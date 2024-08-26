import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'; // Importer le service de traduction

@Component({
  selector: 'app-skill-progress',
  templateUrl: './skill-progress.component.html',
  styleUrls: ['./skill-progress.component.scss']
})
export class SkillProgressComponent implements OnInit {

  techStack = {
    viewSkillBars: true,
    experience: [
      {
        Stack: "skillProgress.frontendDesign",
        progressPercentage: "90%"
      },
      {
        Stack: "skillProgress.backend",
        progressPercentage: "90%"
      },
      {
        Stack: "skillProgress.databaseManagement",
        progressPercentage: "90%"
      },
      {
        Stack: "skillProgress.systemArchitecture",
        progressPercentage: "90%"
      },
      {
        Stack: "skillProgress.apiDevelopment",
        progressPercentage: "90%"
      },
      {
        Stack: "skillProgress.ciCd",
        progressPercentage: "90%"
      },
      {
        Stack: "skillProgress.agileMethodologies",
        progressPercentage: "90%"
      },
      {
        Stack: "skillProgress.problemSolving",
        progressPercentage: "90%"
      },
      {
        Stack: "skillProgress.mobileDevelopment",
        progressPercentage: "90%"
      }
    ],
    experience2: [
      {
        Stack: "skillProgress.softwareTestingQa",
        progressPercentage: "90%"
      },
      {
        Stack: "skillProgress.programming",
        progressPercentage: "90%"
      },
      {
        Stack: "skillProgress.writingReports",
        progressPercentage: "95%"
      },
      {
        Stack: "skillProgress.machineLearningAi",
        progressPercentage: "70%"
      },
      {
        Stack: "skillProgress.devOps",
        progressPercentage: "80%"
      },
      {
        Stack: "skillProgress.dataAnalysis",
        progressPercentage: "80%"
      },
      {
        Stack: "skillProgress.cloudComputing",
        progressPercentage: "75%"
      },
      {
        Stack: "skillProgress.cybersecurity",
        progressPercentage: "70%"
      },
      {
        Stack: "skillProgress.embeddedSystems",
        progressPercentage: "55%"
      },
      {
        Stack: "skillProgress.networking",
        progressPercentage: "55%"
      }
    ]
  };

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

  progressStyle(percentage: string) {
    return { width: percentage };
  }

  getProgressColor(progress: string): string {
    const value = parseInt(progress, 10);
    if (value > 80) {
      return 'green';
    } else if (value > 60) {
      return 'orange';
    } else if (value > 50) {
      return 'yellow';
    } else {
      return 'red';
    }
  }

}
