import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contactInfo = {
    title: "Contact Me :  ",
    subtitle: "Want to collaborate on a project or just say hello? I'm all ears and my inbox is open!",
    number: "+1 514 567 5658",
    email_address: "samir.boussaadi24@gmail.com"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
