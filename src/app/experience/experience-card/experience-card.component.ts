import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  Input,
  OnDestroy,
  Renderer2,
  ViewChild
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface SafeVideo {
  title: string;
  description: string;
  safeUrl: SafeResourceUrl;
}

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent implements OnDestroy {
  @ViewChild('detailsButton') detailsButton: ElementRef<HTMLButtonElement>;
  @ViewChild('modalCloseButton') modalCloseButton: ElementRef<HTMLButtonElement>;

  public isModalActive = false;
  public safeVideos: SafeVideo[] = [];
  private experienceValue: any;

  @Input()
  public set experience(value: any) {
    this.experienceValue = value;
    this.safeVideos = (value && value.descBullets ? value.descBullets : [])
      .filter(video => /^https:\/\/www\.youtube\.com\/embed\/[A-Za-z0-9_-]+$/.test(video.url))
      .map(video => ({
        title: video.title,
        description: video.description,
        safeUrl: this.sanitizer.bypassSecurityTrustResourceUrl(video.url)
      }));
  }

  public get experience(): any {
    return this.experienceValue;
  }

  constructor(
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  public openModal(): void {
    this.isModalActive = true;
    this.renderer.setStyle(this.document.body, 'overflow', 'hidden');

    setTimeout(() => {
      if (this.modalCloseButton) {
        this.modalCloseButton.nativeElement.focus();
      }
    });
  }

  public closeModal(): void {
    if (!this.isModalActive) {
      return;
    }

    this.isModalActive = false;
    this.renderer.removeStyle(this.document.body, 'overflow');

    setTimeout(() => {
      if (this.detailsButton) {
        this.detailsButton.nativeElement.focus();
      }
    });
  }

  @HostListener('document:keydown.escape')
  public onEscape(): void {
    this.closeModal();
  }

  public ngOnDestroy(): void {
    if (this.isModalActive) {
      this.renderer.removeStyle(this.document.body, 'overflow');
    }
  }
}
