import { Injectable, ElementRef, NgZone } from '@angular/core';
import { ScrollDispatcher, ViewportRuler } from '@angular/cdk/scrolling';
import { Observable, of, OperatorFunction } from 'rxjs';
import { map, startWith, distinctUntilChanged, first, scan, switchMap, debounceTime, shareReplay } from 'rxjs/operators';

/**
 * Computes how much of an element is visible in a viewport.
 *
 * The denominator is the largest area that can actually fit in the viewport.
 * This lets elements larger than the viewport reach a ratio of 1 instead of
 * remaining permanently below the AOS threshold.
 */
export function getVisibilityRatio(rect: ClientRect, view: ClientRect): number {
  const intersectionWidth = Math.max(0, Math.min(rect.right, view.right) - Math.max(rect.left, view.left));
  const intersectionHeight = Math.max(0, Math.min(rect.bottom, view.bottom) - Math.max(rect.top, view.top));
  const maxVisibleWidth = Math.min(Math.max(0, rect.width), Math.max(0, view.width));
  const maxVisibleHeight = Math.min(Math.max(0, rect.height), Math.max(0, view.height));
  const maxVisibleArea = maxVisibleWidth * maxVisibleHeight;

  if (maxVisibleArea <= 0) {
    return 0;
  }

  return Math.max(0, Math.min(1, intersectionWidth * intersectionHeight / maxVisibleArea));
}

/** Returns an observable mirroring the source while running within the given zone */
export function runInZone<T>(zone: NgZone): OperatorFunction<T, T> {
  return source => {
    return new Observable( observer => {
      return source.subscribe(
        (value: T) => zone.run(() => observer.next(value)),
        (e: any) => zone.run(() => observer.error(e)),
        () => zone.run(() => observer.complete())
      );
    });
  };
}

@Injectable({
  providedIn: 'root'
})
export class AnimateService {

  private view$: Observable<ClientRect>;

  // By default, use the viewport rectangle
  protected get viewRect(): ClientRect {
    const size = this.viewPort.getViewportSize();

    // getBoundingClientRect() is relative to the viewport, while
    // ViewportRuler.getViewportRect() includes the document scroll offset.
    // Keep both rectangles in the same coordinate system.
    return {
      top: 0,
      left: 0,
      right: size.width,
      bottom: size.height,
      width: size.width,
      height: size.height
    };
  }

  constructor(readonly scroll: ScrollDispatcher, readonly viewPort: ViewportRuler, private zone: NgZone) {

    // Tracks for viewport changes giving it 100ms time to accurately update for orientation changes
    this.view$ = viewPort.change(100).pipe(

      startWith( null ),

      map( () => this.viewRect ),

      debounceTime(20),
      // Makes all the component to share the same viewport values
      shareReplay({ bufferSize: 1, refCount: true })
    );
  }

  // Triggers the animation
  public trigger(elm: ElementRef<HTMLElement>, threshold: number): OperatorFunction<boolean, boolean> {

    // Waits until the zone is stable once, aka the render is complete so the element to measure is there
    return source => this.zone.onStable.pipe(
      // Waits just once
      first(),
      // Triggers the play and replay requests
      switchMap( () => source ),
      // Triggers the while scrolling
      switchMap(requested => {
        if (!requested) {
          return of(false);
        }

        return threshold > 0 ? this.aos(elm, threshold) : of(true);
      })
    );
  }

  // Triggers the animation on scroll
  private aos(elm: ElementRef<HTMLElement>, threshold: number): Observable<boolean> {

    // A variation based on IntersectionObserver can be conditionally implemented here.

    // Returns an AOS observable
    return this.scroll.ancestorScrolled(elm, 0).pipe(
      // Makes sure triggering the start no matter there's no scroll event hits yet
      startWith(0),
      // Maps the scrolling to the element visibility value
      switchMap( () => this.visibility(elm) ),
      // Applies an hysteresys, so, to trigger the animation on based on the treshold while off on full invisibility
      scan((result, visibility) => (visibility >= threshold) || (result && visibility > 0), false),
      // Distincts the resulting triggers
      distinctUntilChanged(),
      // Runs within the angular zone to trigger change detection back on
      runInZone(this.zone)
    );
  }
  // Computes the element's visibility ratio against the viewport
  private visibility(elm: ElementRef<HTMLElement>): Observable<number> {

    // Resolves from the latest viewport
    return this.view$.pipe(map(view => {

      // Gets the element's bounding rect
      const rect = elm && elm.nativeElement && elm.nativeElement.getBoundingClientRect();
      if (!rect) {
        return 0;
      }

      return getVisibilityRatio(rect, view);
    }));
  }
}
