import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsSection = {
    title: "My Expertise ",
    subTitle: "Passionate Full Stack Developer eager to explore and master diverse technology stacks to create innovative solutions.",
    skills: [
      "✨ Develop highly interactive front-end/user interfaces for web and mobile applications using Angular, React, and Flutter",
      "✨ Create robust application backends with Node.js, Express, and Spring Boot",
      "✨ Design and implement Progressive Web Applications (PWA) in both standard and single-page application (SPA) stacks",
      "✨ Integrate third-party services such as Firebase and AWS for enhanced application functionality",
      "✨ Optimize application performance and ensure smooth deployment to production environments",
      "✨ Collaborate with design teams to integrate new designs and enhance user experience",
      "✨ Perform unit and server testing to ensure application reliability",
      "✨ Develop secure authentication and authorization systems",
      "✨ Write and execute complex SQL queries for data management and retrieval",
      "✨ Participate in code reviews and brainstorming sessions to foster continuous improvement and innovation",
      "✨ Manage real-time communication using WebSocket protocols for interactive applications",
      "✨ Utilize DevOps practices for continuous integration and deployment (CI/CD)",

      
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
