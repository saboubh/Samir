// header.component.ts
import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';
import { animate, group, query, state, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('fadein', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(5000)
      ]),
      transition('* => void', [
        animate(5000, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
  currentLangLabel: string;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.updateLangLabel();
  }

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
    this.updateLangLabel();
  }

  updateLangLabel(): void {
    this.currentLangLabel = this.languageService.getCurrentLanguage() === 'en' ? 'FR' : 'EN';
  }
}
