import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public workExperiences = {
    viewExperiences: true,
    experience: [
      
     
          {
          
            role: "Full Stack Developer",
            company: "Comparastore",
            color: "#007bff",
            companylogo: "../../../assets/images/compa.jpg",
            date: "Jun 2023 – Dec 2023",

            desc: [
              "✨ Collaborated with the team to understand the specific requirements of version 2.0 of the Comparastore dashboard.",
              "✨ Evaluated existing features and identified necessary improvements.",
              "✨ Set up the backend of the dashboard using Next.js.",
              "✨ Created robust APIs to support the application's features and ensure optimal performance.",
              "✨ Integrated features and user interfaces into the dashboard using Next.js.",
              "✨ Participated in the deployment process of the application to production."
            ],
            
            

            companyUrl: "https://www.comparastore.com" ,

           descBullets: [
      {
        url: "https://www.youtube.com/embed/AEy1Xk0Kfxg",
        title: "Introduction to Comparastore",
        description: "A brief introduction to the features and functionalities of Comparastore."
      },
      {
        url: "https://www.youtube.com/embed/-2_eGnBrkRI",
        title: "Comparastore Version 2.0",
        description: "Overview of the improvements made in version 2.0."
      }
    ]
          },
      
          {
            role: "Programmer Analyst",
            company: "OpenBook",
            color: "#ff5722",
            companylogo: "../../../assets/images/ob.jpg",
            date: "Feb 2019 – Jan 2021",
            desc: "Led the development of user interfaces and backend services.",
            companyUrl: "https://www.openbookplatform.com" ,

            descBullets: [
              {
                url: "https://www.youtube.com/embed/AEy1Xk0Kfxg",
                title: "Introduction to Comparastore",
                description: "A brief introduction to the features and functionalities of Comparastore."
              },
              {
                url: "https://www.youtube.com/embed/-2_eGnBrkRI",
                title: "Comparastore Version 2.0",
                description: "Overview of the improvements made in version 2.0."
              }
            ]
            // descBullets: [
            //  //    openbookplatform.com
            //   //    https://www.facebook.com/openbook.live/?paipv=0&eav=Afb8h2WwXg0PcaIRhftOqct_zPhZwQGHfwJDMkstDIVaXxrfLiFiMJLshflyCD3nRQU&_rdr
            //   // "Created the user interface using Angular, ensuring responsiveness and user-friendliness.",
            //   // "Designed the Firebase database structure according to the application's requirements.",
            //   // "Configured and developed the backend server using Node.js.",
            //   // "Implemented features that allow users to post ads with details, images, and availability.",
            //   // "Set up a secure authentication and authorization system using Firebase.",
            //   // "Performed unit and server testing.",
            //   // "Deployed the application to production."
            // ]
          },
          {
            role: "Software Engineer",
            company: "Poly Technical",
            color: "#8e44ad",
            companylogo: "../../../assets/images/poly.JPG",
            date: "Final Year Project",
            desc: "Control via Android Application",
            companyUrl: "https://www.polymtl.ca/programmes/cours/projet-integrateur-final-en-genie-logiciel" ,

            descBullets: [
              {
                url: "https://www.youtube.com/embed/AEy1Xk0Kfxg",
                title: "Introduction to Comparastore",
                description: "A brief introduction to the features and functionalities of Comparastore."
              },
              {
                url: "https://www.youtube.com/embed/-2_eGnBrkRI",
                title: "Comparastore Version 2.0",
                description: "Overview of the improvements made in version 2.0."
              }
            ]
          },
          {
            role: "Programmer Analyst",
            company: "Poly Technical",
            color: "#2980b9",
            companylogo: "../../../assets/images/poly.JPG",
            companyUrl: "https://www.polymtl.ca/programmes/cours/projet-devolution-dun-logiciel" ,
           
            date: "3rd Year Project",
            desc: "Development of a Multiplayer Application (Web and Mobile)",
            descBullets: [
              {
                url: "https://www.youtube.com/embed/AEy1Xk0Kfxg",
                title: "Introduction to Comparastore",
                description: "A brief introduction to the features and functionalities of Comparastore."
              },
              {
                url: "https://www.youtube.com/embed/-2_eGnBrkRI",
                title: "Comparastore Version 2.0",
                description: "Overview of the improvements made in version 2.0."
              }
            ]
          },
          {
            role: "2nd Year Project",
            company: "Poly Technical",
            color: "#d35400",
            companylogo: "../../../assets/images/poly.JPG",
            companyUrl: "https://www.polymtl.ca/" ,

            date: "2nd Year Project",
            desc: "Development of an Interactive Web Application (Web Version of Scrabble Game)",
            descBullets: [
              {
                url: "https://www.youtube.com/embed/AEy1Xk0Kfxg",
                title: "Introduction to Comparastore",
                description: "A brief introduction to the features and functionalities of Comparastore."
              },
              {
                url: "https://www.youtube.com/embed/-2_eGnBrkRI",
                title: "Comparastore Version 2.0",
                description: "Overview of the improvements made in version 2.0."
              }
            ]
          },
          {
            role: "1st Year Project",
            company: "Poly Technical",
            color: "#d35400",
            companylogo: "../../../assets/images/poly.JPG",
            companyUrl: "https://www.polymtl.ca/" ,

            date: "2nd Year Project",
            desc: "Development of an Interactive Web Application (Web Version of Scrabble Game)",
            descBullets: [
              {
                url: "https://www.youtube.com/embed/AEy1Xk0Kfxg",
                title: "Introduction to Comparastore",
                description: "A brief introduction to the features and functionalities of Comparastore."
              },
              {
                url: "https://www.youtube.com/embed/-2_eGnBrkRI",
                title: "Comparastore Version 2.0",
                description: "Overview of the improvements made in version 2.0."
              }
            ]
          },
     
        ]

        

      
    
  };

  constructor() { }

  ngOnInit(): void {
    console.log("samir " + this.workExperiences.viewExperiences);
  }
  

}
