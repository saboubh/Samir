import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-software-skill',
  templateUrl: './software-skill.component.html',
  styleUrls: ['./software-skill.component.scss']
})
export class SoftwareSkillComponent implements OnInit {
  skillsSection = {
    softwareSkills: [
      {
        skillName: "html-5",
        fontAwesomeClassname: "fab fa-html5"
      },
      {
        skillName: "css3",
        fontAwesomeClassname: "fab fa-css3-alt"
      },
      {
        skillName: "sass",
        fontAwesomeClassname: "fab fa-sass"
      },
      {
        skillName: "JavaScript",
        fontAwesomeClassname: "fab fa-js"
      },
      {
        skillName: "Angularjs",
        fontAwesomeClassname: "fab fa-angular"
      },
      {
        skillName: "nodejs",
        fontAwesomeClassname: "fab fa-node"
      },
      {
        skillName: "npm",
        fontAwesomeClassname: "fab fa-npm"
      },
      {
        skillName: "sql-database",
        fontAwesomeClassname: "fas fa-database"
      },
      {
        skillName: "python",
        fontAwesomeClassname: "fab fa-python"
      },
      {
        skillName: "React",
        fontAwesomeClassname: "fab fa-react"
      },
      {
        skillName: "Next.js",
        fontAwesomeClassname: "fab fa-react" // Utilisez la même icône que React car il n'y a pas de fontAwesome spécifique pour Next.js
      },
      {
        skillName: "Express",
        fontAwesomeClassname: "fab fa-node" // Utilisez l'icône Node.js car il n'y a pas de fontAwesome spécifique pour Express
      },
      {
        skillName: "Linux",
        fontAwesomeClassname: "fab fa-linux"
      },
   
     
      {
        skillName: "MongoDB",
        fontAwesomeClassname: "fas fa-database" // Utilisez l'icône de base de données
      },
      {
        skillName: "Firebase",
        fontAwesomeClassname: "fas fa-fire" // Pas d'icône fontAwesome spécifique, utilisez une icône de feu
      }
      
    ]
  }
;  
  constructor() { }

  ngOnInit(): void {
  }

}
