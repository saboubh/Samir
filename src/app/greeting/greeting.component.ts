import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
})
export class GreetingComponent implements OnInit {
  greeting = {
    username: "Samir Boussaadi",
    title: "Hello everyone, I'm Samir",
    subTitle: "I am a dedicated junior developer with a robust foundation in software engineering and practical experience in full-stack development. I am actively seeking an opportunity to apply my skills and expand my knowledge in a dynamic and innovative environment. My innate curiosity and adaptability equip me to address a wide range of technical challenges, whether in front-end or back-end development. I am particularly drawn to projects that encourage continuous learning and foster a collaborative work culture. I am eager to contribute meaningfully to a forward-thinking and dedicated team. If you're looking for a passionate developer committed to making a positive impact, I would love to connect :)",
    resumeLinkEn: "https://drive.google.com/file/d/1h4DU1PqaAAevQbXvWE4mm9rVTovm7rp4/view?usp=sharing",
    
    resumeLinkFr: "https://drive.google.com/file/d/1aEOakF-VVzz4RMyX6JYcda_kpEjCqA3r/view?usp=drive_link"
  };

  currentLangLabel = 'FR'; // Initialement en anglais

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en'); // Définir explicitement la langue active
}


  ngOnInit(): void { }

  toggleLanguage(): void {
    const lang = this.translate.currentLang === 'en' ? 'fr' : 'en';
    this.translate.use(lang);
    this.currentLangLabel = lang.toUpperCase();
  }

  getResumeLink(): string {
    return this.translate.currentLang === 'en' ? this.greeting.resumeLinkEn : this.greeting.resumeLinkFr;
  }
}
