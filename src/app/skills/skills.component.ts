import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  readonly skillsSection = {
    title: "skillsSection.title",
    subTitle: "skillsSection.subTitle",
    skills: [
      "skillsSection.skills.0",
      "skillsSection.skills.1",
      "skillsSection.skills.2",
      "skillsSection.skills.3",
      "skillsSection.skills.4",
      "skillsSection.skills.5",
    ]
  };
}
