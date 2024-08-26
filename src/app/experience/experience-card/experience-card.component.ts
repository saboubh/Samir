import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent implements OnInit {
  isModalActive = false;
  @Input() experience: any;
  isExpanded: boolean = false;

  constructor(private sanitizer: DomSanitizer) {}

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  toggleDetails() {
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit(): void {}

  openModal() {
    this.isModalActive = true;
  }

  closeModal() {
    this.isModalActive = false;
  }
}
