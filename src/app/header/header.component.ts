import { Component, HostListener, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public currentLangLabel: string;
  public isMenuOpen = false;

  constructor(private languageService: LanguageService) {}

  public ngOnInit(): void {
    this.updateLangLabel();
  }

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public closeMenu(): void {
    this.isMenuOpen = false;
  }

  public toggleLanguage(): void {
    this.languageService.toggleLanguage();
    this.updateLangLabel();
    this.closeMenu();
  }

  public updateLangLabel(): void {
    this.currentLangLabel = this.languageService.getCurrentLanguage() === 'en' ? 'FR' : 'EN';
  }

  @HostListener('document:keydown.escape')
  public onEscape(): void {
    this.closeMenu();
  }
}
