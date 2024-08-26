import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from "@angular/animations";
import { TranslateService } from '@ngx-translate/core'; // Import du service de traduction

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(300)),
    ])
  ]
})
export class FooterComponent implements OnInit {

  state = 'normal';

  constructor(private translate: TranslateService) { // Ajout du service de traduction
    // Définir la langue par défaut
    this.translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    // Utiliser la langue courante (par exemple, peut-être définie globalement ailleurs dans l'application)
    this.translate.use(this.translate.getDefaultLang());
  }

  onAnimate() {
    this.state = 'highlighted';
  }

  // Méthode pour changer la langue dynamiquement
  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
