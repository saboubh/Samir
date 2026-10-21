import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'; // Import du service de traduction

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private translate: TranslateService) { // Ajout du service de traduction
    // Définir la langue par défaut
    this.translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    // Utiliser la langue courante (par exemple, peut-être définie globalement ailleurs dans l'application)
    this.translate.use(this.translate.getDefaultLang());
  }

  // Méthode pour changer la langue dynamiquement
  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
