import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';  // Importer le service de traduction

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  timeline = [
    {
      heading: "timeline.infosys.heading",
      duration: "timeline.infosys.duration",
      content: "timeline.infosys.content",
      className: "direction-r"
    },
    {
      heading: "timeline.btech.heading",
      duration: "timeline.btech.duration",
      content: "timeline.btech.content",
      className: "direction-l"
    },
    {
      heading: "timeline.intermediate.heading",
      duration: "timeline.intermediate.duration",
      content: "timeline.intermediate.content",
      className: "direction-r"
    },
    {
      heading: "timeline.highSchool.heading",
      duration: "timeline.highSchool.duration",
      content: "timeline.highSchool.content",
      className: "direction-l"
    }
  ];

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    // Initialisation, si nécessaire
  }
}
