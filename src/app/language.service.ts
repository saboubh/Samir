// language.service.ts
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage: string = 'en'; // Initialisez la langue par défaut à l'anglais

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.currentLanguage);
  }

  // Méthode pour basculer entre les langues
  toggleLanguage(): void {
    this.currentLanguage = this.currentLanguage === 'en' ? 'fr' : 'en';
    this.translate.use(this.currentLanguage);
  }

  // Méthode pour obtenir la langue actuelle
  getCurrentLanguage(): string {
    return this.currentLanguage;
  }
}
