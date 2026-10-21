import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, HostBinding, HostListener, ElementRef } from '@angular/core';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { startWith, delay, takeWhile } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';
import { trigger } from '@angular/animations';
import { AnimateService } from './animate.service';
// Animations
import { beat, bounce, headShake, heartBeat, pulse, rubberBand, shake, swing, wobble, jello, tada, flip } from './attention-seekers';
import { bumpIn, bounceIn, fadeIn, flipIn, jackInTheBox, landing, rollIn, zoomIn } from './entrances';
import { bounceOut, fadeOut, hinge, rollOut, zoomOut } from './exits';

export type wmAnimateSpeed = 'slower'|'slow'|'normal'|'fast'|'faster';
export type wmAnimations =
// Attention seekers
  'beat'|'bounce'|'flip'|'headShake'|'heartBeat'|'jello'|'pulse'|'rubberBand'|'shake'|'swing'|'tada'|'wobble'|
  // Entrances
  'bumpIn'|'bounceIn'|'bounceInDown'|'bounceInLeft'|'bounceInUp'|'bounceInRight'|'fadeIn'|'fadeInRight'|'fadeInLeft'|'fadeInUp'|'fadeInDown'|'flipInX'|'flipInY'|'jackInTheBox'|'landing'|'rollIn'|'zoomIn'|'zoomInDown'|'zoomInLeft'|'zoomInUp'|'zoomInRight'|
  // Exits
  'bounceOut'|'bounceOutDown'|'bounceOutUp'|'bounceOutRight'|'bounceOutLeft'|'fadeOut'|'fadeOutRight'|'fadeOutLeft'|'fadeOutDown'|'fadeOutUp'|'hinge'|'rollOut'|'zoomOut'|'zoomOutDown'|'zoomOutRight'|'zoomOutUp'|'zoomOutLeft';

@Component({
  selector: '[wmAnimate]',
  template: '<ng-content></ng-content>',
  animations: [ trigger('animate', [
    // Attention seekers
    ...beat,...bounce,...flip,...headShake,...heartBeat,...jello,...pulse,...rubberBand,...shake,...swing,...tada,...wobble,
    // Entrances
    ...bumpIn,...bounceIn,...fadeIn,...flipIn,...jackInTheBox,...landing,...rollIn,...zoomIn,
    // Exits
    ...bounceOut,...fadeOut,...hinge,...rollOut,...zoomOut
  ])]
})
export class AnimateComponent implements OnInit, OnDestroy {

  private replay$ = new Subject<boolean>();
  private sub: Subscription = null;
  private initialized = false;
  private pendingTrigger: boolean = null;
  private inputDisabled = false;
  private prefersReducedMotion = false;

  // Animating parameters
  private timing: string;
  private delay: string;

  // Animating properties
  public animating = false;
  public animated = false;

  constructor(private elm: ElementRef, private scroll: AnimateService) {}

  @HostBinding('@animate') private trigger;

  private get idle() { return { value: `idle-${this.animate}` }; }
  private get play() {

    const params = {};
    // Builds the params object, so, leaving to the default values when undefined
    if(!!this.timing) { params['timing'] = this.timing; }
    if(!!this.delay) { params['delay'] = this.delay; }

    return { value: this.animate, params };
  }

  /** Selects the animation to be played */
  @Input('wmAnimate') animate: wmAnimations;

  /** Speeds up or slows down the animation */
  @Input() set speed(speed: wmAnimateSpeed) {
    // Turns the requested speed into a valid timing
    const timings = {
      slower: '3s',
      slow: '2s',
      normal: '1s',
      fast: '500ms',
      faster: '300ms'
    };

    this.timing = timings[speed] || timings.normal;
  }

  /** Delays the animation */
  @Input('delay') set postpone(delay: string) {
    // Coerces the input into a number first
    const value = coerceNumberProperty(delay, 0);
    if(value) {
      // Turns a valid number into a ms delay
      this.delay = `${value}ms`;
    }
    else {
      // Test the string for a valid delay combination
      this.delay = /^\d+(?:ms|s)$/.test(delay) ? delay : '';
    }
  }

  /** Disables the animation */
  @Input('disabled') set disableAnimation(value: boolean) {
    this.inputDisabled = coerceBooleanProperty(value);
    this.updateDisabledState();
  }
  @HostBinding('@.disabled')
  public disabled = false;

  /** Emits at the end of the animation */
  @Output() start = new EventEmitter<void>();
  @HostListener('@animate.start')
  private animationStart() { this.animating = true; this.animated = false; this.start.emit(); }

  /** Emits at the end of the animation */
  @Output() done = new EventEmitter<void>();
  @HostListener('@animate.done')
  private animationDone() {
    this.animating = false;
    this.animated = true;
    this.done.emit();

    if (this.pendingTrigger !== null) {
      const trigger = this.pendingTrigger;
      this.pendingTrigger = null;
      this.setTrigger(trigger);
    }
  }

  /** When true, keeps the animation idle until the next replay triggers */
  @Input('paused') set pauseAnimation(value: boolean) {
    this.paused = coerceBooleanProperty(value);

    if (this.initialized && !this.disabled) {
      this.replay$.next(!this.paused);
    }
  }
  public paused: boolean = false;

  /** When defined, triggers the animation on element scrolling in the viewport by the specified amount. Amount defaults to 50% when not specified */
  @Input('aos') set enableAOS(value: number) {
    const threshold = coerceNumberProperty(value, 0.5);
    this.threshold = Math.max(0, Math.min(1, threshold));
  }
  private threshold: number = 0;

  /** When true, triggers the animation on element scrolling in the viewport */
  @Input('once') set aosOnce(value: boolean) { this.once = coerceBooleanProperty(value); }
  public once: boolean = false;

  /** Replays the animation */
  @Input() set replay(replay: any) {

    // Re-triggers the animation again on request (skipping the very fist value)
    if (!!this.trigger && coerceBooleanProperty(replay)) {

      this.trigger = this.idle;
      if (!this.paused && !this.disabled) {
        this.replay$.next(true);
      }
    }
  }

  ngOnInit() {
    this.prefersReducedMotion = typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.updateDisabledState();
    this.initialized = true;

    if (this.disabled) {
      // Disabled/reduced-motion content must remain visible instead of being
      // left in an idle entrance state with opacity: 0.
      this.trigger = this.play;
      this.animated = true;
      return;
    }

    // Sets the idle state for the given animation
    this.trigger = this.idle;
    this.startListening();
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
    this.replay$.complete();
  }

  private startListening() {
    if (this.sub || this.disabled) {
      return;
    }

    // Triggers the animation based on the input flags
    this.sub = this.replay$.pipe(
      // Waits the next round to re-trigger
      delay(0),
      // Triggers immediately when not paused
      startWith(!this.paused),
      // Builds the AOS observable from the common service
      this.scroll.trigger(this.elm, this.threshold),
      // Stops after the first on trigger when 'once' is set
      takeWhile(trigger => !trigger || !this.once, true),

    ).subscribe( trigger => {
      this.setTrigger(trigger);
    });
  }

  private setTrigger(shouldPlay: boolean) {
    if (this.animating) {
      this.pendingTrigger = shouldPlay;
      return;
    }

    this.trigger = shouldPlay ? this.play : this.idle;
  }

  private updateDisabledState() {
    this.disabled = this.inputDisabled || this.prefersReducedMotion;

    if (!this.initialized) {
      return;
    }

    if (this.disabled) {
      if (this.sub) {
        this.sub.unsubscribe();
        this.sub = null;
      }
      this.pendingTrigger = null;
      this.trigger = this.play;
      this.animated = true;
    }
    else {
      if (!this.sub) {
        this.trigger = this.idle;
        this.startListening();
      }
      else {
        this.replay$.next(!this.paused);
      }
    }
  }
}
