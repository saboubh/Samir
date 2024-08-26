import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';  // Importer le service de traduction

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  timeline = [
    {
      heading: "education.bachelorSoftwareEngineering.heading",
      duration: "education.bachelorSoftwareEngineering.duration",
      subtitle: "education.bachelorSoftwareEngineering.subtitle",
      content: "education.bachelorSoftwareEngineering.content",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    },
    {
      heading: "education.specializedGraduateDiploma.heading",
      duration: "education.specializedGraduateDiploma.duration",
      subtitle: "education.specializedGraduateDiploma.subtitle",
      content: "education.specializedGraduateDiploma.content",
      className1: "mar-left",
      className2: "prt_about_learnbox_right"
    },
    {
      heading: "education.bachelorChemicalEngineering.heading",
      duration: "education.bachelorChemicalEngineering.duration",
      subtitle: "education.bachelorChemicalEngineering.subtitle",
      content: "education.bachelorChemicalEngineering.content",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    }
  ];

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    // Initialisation, si nécessaire
  }
}
