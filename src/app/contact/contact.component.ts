import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'; // Importer le service de traduction

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contactInfo = {
    title: 'contact.title',
    subtitle: 'contact.subtitle',
    number: '+1 514 567 5658',  // Si ces champs doivent être traduits également, utilisez des clés de traduction
    email_address: 'samir.boussaadi24@gmail.com'  // Sinon, gardez les champs directs comme ils le sont
  };

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }
}
