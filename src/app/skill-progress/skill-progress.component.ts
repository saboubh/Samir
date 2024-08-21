import { Component, OnInit } from '@angular/core';

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
        Stack: "Frontend/Design",
        progressPercentage: "90%"
      },
      {
        Stack: "Backend",
        progressPercentage: "90%"
      },
   
      {
        Stack: "Database Management",
        progressPercentage: "90%"
      },
      {
        Stack: "System Architecture",
        progressPercentage: "90%"
      },
      {
        Stack: "API Development",
        progressPercentage: "90%"
      },
      {
        Stack: "(CI/CD)",
        progressPercentage: "90%"
      },
      {
        Stack: "Agile Methodologies",
        progressPercentage: "90%"
      },
   
      {
        Stack: "Problem Solving",
        progressPercentage: "90%"
      },
     
      {
        Stack: "Mobile Development",
        progressPercentage: "90%"
      },
      
    ],
    experience2: [
      {
        Stack: "Software Testing/QA",
        progressPercentage: "90%"
      },
      {
        Stack: "Programming",
        progressPercentage: "90%"
      },
      {
        Stack: "Writing Reports",
        progressPercentage: "95%"
      },
    
     
     
    
      {
        Stack: "Machine Learning/AI",
        progressPercentage: "70%"
      },
      {
        Stack: "DevOps",
        progressPercentage: "80%"
      },
      {
        Stack: "Data Analysis",
        progressPercentage: "80%"
      },
      {
        Stack: "Cloud Computing",
        progressPercentage: "75%"
      },
      {
        Stack: "Cybersecurity",
        progressPercentage: "70%"
      },
      {
        Stack: "Embedded Systems",
        progressPercentage: "55%"
      },
      {
        Stack: "Networking",
        progressPercentage: "55%"
      },
     
    ]
  };

  constructor() { }

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
