import { Component } from '@angular/core';

@Component({
  selector: 'app-software-skill',
  templateUrl: './software-skill.component.html',
  styleUrls: ['./software-skill.component.scss']
})
export class SoftwareSkillComponent {
  readonly skillsSection = {
    softwareSkills: [
      {
        labelKey: "skillsSection.iconPanel.items.rfid",
        fontAwesomeClassname: "fas fa-broadcast-tower",
        tone: "violet"
      },
      {
        labelKey: "skillsSection.iconPanel.items.tags",
        fontAwesomeClassname: "fas fa-tags",
        tone: "cyan"
      },
      {
        labelKey: "skillsSection.iconPanel.items.fixedReaders",
        fontAwesomeClassname: "fas fa-wifi",
        tone: "blue"
      },
      {
        labelKey: "skillsSection.iconPanel.items.mobileReaders",
        fontAwesomeClassname: "fas fa-barcode",
        tone: "amber"
      },
      {
        labelKey: "skillsSection.iconPanel.items.iot",
        fontAwesomeClassname: "fas fa-satellite-dish",
        tone: "violet"
      },
      {
        labelKey: "skillsSection.iconPanel.items.tracking",
        fontAwesomeClassname: "fas fa-route",
        tone: "cyan"
      },
      {
        labelKey: "skillsSection.iconPanel.items.ios",
        fontAwesomeClassname: "fab fa-apple",
        tone: "blue"
      },
      {
        labelKey: "skillsSection.iconPanel.items.android",
        fontAwesomeClassname: "fab fa-android",
        tone: "amber"
      },
      {
        labelKey: "skillsSection.iconPanel.items.edge",
        fontAwesomeClassname: "fas fa-microchip",
        tone: "violet"
      },
      {
        labelKey: "skillsSection.iconPanel.items.backend",
        fontAwesomeClassname: "fas fa-server",
        tone: "cyan"
      },
      {
        labelKey: "skillsSection.iconPanel.items.data",
        fontAwesomeClassname: "fas fa-database",
        tone: "blue"
      },
      {
        labelKey: "skillsSection.iconPanel.items.maps",
        fontAwesomeClassname: "fas fa-map-marked-alt",
        tone: "amber"
      }
    ]
  };
}
