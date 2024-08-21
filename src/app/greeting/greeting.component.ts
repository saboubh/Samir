import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
  // animations:[  trigger('list1', [
  //   state('in', style({
  //     opacity: 1,
  //     transform: 'translateX(0)'
  //   })),
  //   transition('void => *', [
  //     style({
  //       opacity: 0,
  //       transform: 'translateX(-100px)'
  //     }),
  //     animate(300)
  //   ]),
  //   transition('* => void', [
  //     animate(300, style({
  //       transform: 'translateX(100px)',
  //       opacity: 0
  //     }))
  //   ])
  // ])]
  //
  //
  // animations: [
  //   trigger('visibilityChanged', [
  //     state('in', style({
  //       opacity: 0
  //     })),
  //     state('out',   style({
  //       opacity: 1
  //     })),
  //     transition('in => out', animate('100ms ease-in')),
  //     transition('out => in', animate('100ms ease-out'))
  //   ])
  // ]


})
export class GreetingComponent implements OnInit {
  greeting= {
    username: "Samir Boussaadi",
    title: "Hi all, I'm Samir",
    subTitle: " I am a dedicated junior developer with a robust foundation in software engineering and practical experience in full-stack development. I am actively seeking an opportunity to apply my skills and expand my knowledge in a dynamic and innovative environment. My innate curiosity and adaptability equip me to address a wide range of technical challenges, whether in front-end or back-end development. I am particularly drawn to projects that encourage continuous learning and foster a collaborative work culture. I am eager to contribute meaningfully to a forward-thinking and dedicated team. If you're looking for a passionate developer committed to making a positive impact, I would love to connect :) ",
    resumeLink: "https://drive.google.com/file/d/1h4DU1PqaAAevQbXvWE4mm9rVTovm7rp4/view?usp=drive_link"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
