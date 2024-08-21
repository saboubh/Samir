import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  timeline = [
    // {
    //   heading: "Infosys",
    //   duration: "Present",
    //   subtitle: "",
    //   content: "Upcoming Full stack develover at Infosys!",
    //   className1: "mar-left",
    //   className2: "prt_about_learnbox_right"
    // },
    {
      heading: "B.Eng Bachelor of Software Engineering",
      duration: "2023",
      subtitle: "Polytechnique Montreal -Technological University (QC) -",
      content: "Successfully completed",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    },


    {
      heading: "Specialized Graduate Diploma in Industrial Engineering",
      duration: "2014",
      subtitle: "Laval University (QC)",
      content: "Successfully completed.",
      className1: "mar-left",
      className2: "prt_about_learnbox_right"
    },

    {
      heading: "B.Eng Bachelor of chemical engineering",
      duration: "2007",
      subtitle: "Larbi Ben M’Hidi University -Algeria-",
      content: "Successfully completed",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    },
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
