import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  socialMediaLinks = {

    github: "https://github.com/sabouh",
    linkedin: "https://www.linkedin.com/in/samir-boussaadi-b53aa823a/",
    gmail: "samir.boussaadi24@gmail.com",
    instagram : "https://www.instagram.com/...",
    facebook: "https://www.facebook.com/semsoum04/"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
