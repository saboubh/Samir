import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';  // Importer le service de traduction

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsSection = {
    title: "skillsSection.title",
    subTitle: "skillsSection.subTitle",
    skills: [
      "skillsSection.skills.0",
      "skillsSection.skills.1",
      "skillsSection.skills.2",
      "skillsSection.skills.3",
      "skillsSection.skills.4",
      "skillsSection.skills.5",
      "skillsSection.skills.6",
      "skillsSection.skills.7",
      "skillsSection.skills.8",
      "skillsSection.skills.9",
      "skillsSection.skills.10",
      "skillsSection.skills.11",
    ]
  };

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    // Initialisation, si nécessaire
  }
}
