import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';  // Importer le service de traduction

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
        role: "experience.fullStackDeveloper.role",
        company: "experience.fullStackDeveloper.company",
        color: "#007bff",
        companylogo: "../../../assets/images/compa.jpg",
        date: "experience.fullStackDeveloper.date",
        desc: [
          "experience.fullStackDeveloper.desc1",
          "experience.fullStackDeveloper.desc2",
          "experience.fullStackDeveloper.desc3",
          "experience.fullStackDeveloper.desc4",
          "experience.fullStackDeveloper.desc5",
          "experience.fullStackDeveloper.desc6"
        ],
        companyUrl: "https://www.comparastore.com",
        descBullets: [
          {
            url: "https://www.youtube.com/embed/emunPOTU9hs",
            title: "experience.fullStackDeveloper.bullet1.title",
            description: "experience.fullStackDeveloper.bullet1.description"
          },
          {
            url: "https://www.youtube.com/embed/-2_eGnBrkRI",
            title: "experience.fullStackDeveloper.bullet2.title",
            description: "experience.fullStackDeveloper.bullet2.description"
          }
        ]
      },
      {
        role: "experience.programmerAnalyst.role",
        company: "experience.programmerAnalyst.company",
        color: "#ff5722",
        companylogo: "../../../assets/images/ob.jpg",
        date: "experience.programmerAnalyst.date",
        desc: [
          "experience.programmerAnalyst.desc1",
          "experience.programmerAnalyst.desc2",
          "experience.programmerAnalyst.desc3",
          "experience.programmerAnalyst.desc4",
          "experience.programmerAnalyst.desc5",
          "experience.programmerAnalyst.desc6",
          "experience.programmerAnalyst.desc7"
        ],
        companyUrl: "https://www.facebook.com/openbook.live/",
        descBullets: [],
        photoList: [
          { title: 'OpenBook', filename: "../../../assets/images/ob1.png", description: 'Musician Dashboard' },
          { title: 'OpenBook', filename: "../../../assets/images/ob2.jpg", description: 'Chat' }
        ]
      },
      {
        role: "experience.softwareEngineer.role",
        company: "experience.softwareEngineer.company",
        color: "#8e44ad",
        companylogo: "../../../assets/images/smolCell.png",
        date: "experience.softwareEngineer.date",
        desc: [
          "experience.softwareEngineer.desc1",
          "experience.softwareEngineer.desc2",
          "experience.softwareEngineer.desc3",
          "experience.softwareEngineer.desc4"
        ],
        companyUrl: "https://www.polymtl.ca/",
        descBullets: [
          {
            url: "https://www.youtube.com/embed/rzRli4YbGXU",
            title: "experience.softwareEngineer.bullet1.title",
            description: "experience.softwareEngineer.bullet1.description"
          }
        ],
        photoList: [
          { title: "experience.softwareEngineer.photoList1.title", filename: "../../../assets/images/smolCell.png", description: "experience.softwareEngineer.photoList1.description" },
          { title: "experience.softwareEngineer.photoList2.title", filename: "../../../assets/images/smol.jpg", description: "experience.softwareEngineer.photoList2.description" }
        ]
      },
      {
        role: "experience.scrabbleDeveloper.role",
        company: "experience.scrabbleDeveloper.company",
        color: "#2980b9",
        companylogo: "../../../assets/images/scrbl.gif",
        date: "experience.scrabbleDeveloper.date",
        desc: [
          "experience.scrabbleDeveloper.desc1",
          "experience.scrabbleDeveloper.desc2",
          "experience.scrabbleDeveloper.desc3",
          "experience.scrabbleDeveloper.desc4",
          "experience.scrabbleDeveloper.desc5",
          "experience.scrabbleDeveloper.desc6",
          "experience.scrabbleDeveloper.desc7",
          "experience.scrabbleDeveloper.desc8",
          "experience.scrabbleDeveloper.desc9",
          "experience.scrabbleDeveloper.desc10",
          "experience.scrabbleDeveloper.desc11"
        ],
        companyUrl: "https://www.polymtl.ca/",
        descBullets: [
          {
            url: "https://www.youtube.com/embed/smp7Iczqpeo",
            title: "experience.scrabbleDeveloper.bullet1.title",
            description: "experience.scrabbleDeveloper.bullet1.description"
          },
          {
            url: "https://www.youtube.com/embed/i8xGl_pzEqY",
            title: "experience.scrabbleDeveloper.bullet2.title",
            description: "experience.scrabbleDeveloper.bullet2.description"
          }
        ]
      },
      {
        role: "experience.secondYearProject.role",
        company: "experience.secondYearProject.company",
        color: "#d35400",
        companylogo: "../../../assets/images/poly.JPG",
        date: "experience.secondYearProject.date",
        desc: [
          "experience.secondYearProject.desc1",
          "experience.secondYearProject.desc2",
          "experience.secondYearProject.desc3",
          "experience.secondYearProject.desc4",
          "experience.secondYearProject.desc5"
        ],
        companyUrl: "https://www.polymtl.ca/"
      },
      {
        role: "experience.firstYearProject.role",
        company: "experience.firstYearProject.company",
        color: "#d35400",
        companylogo: "../../../assets/images/poly.JPG",
        date: "experience.firstYearProject.date",
        desc: [
          "experience.firstYearProject.desc1",
          "experience.firstYearProject.desc2",
          "experience.firstYearProject.desc3"
        ],
        companyUrl: "https://www.polymtl.ca/"
      }
    ]
  };

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    console.log("samir " + this.workExperiences.viewExperiences);
  }

  toggleImageSize(photo) {
    photo.isEnlarged = !photo.isEnlarged; // Bascule l'état entre agrandi et réduit
  }

}
