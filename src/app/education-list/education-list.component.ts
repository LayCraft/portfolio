import { Component, OnInit } from '@angular/core';
import { Education } from '../classes/education';

@Component({
  selector: 'app-education-list',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.css']
})
export class EducationListComponent implements OnInit {
  EDUCATION: Education[] = [
    {
      schoolName: 'Camosun College',
      programName: 'Computer Systems Technologist Diploma',
      completionDate: '2017',
      programDescription: 'This two-year, double-credentialed program starts with a technician certificate that is focused on practical computer technology, programming, and computer science skills. This is followed by a co-op. The second year has a focus on advanced applications of software, infosec, network and administration skills, and a Capstone project where students get paired with a client to build software.',
      honours: true,
    },
    {
      schoolName: 'Edmonton Digital Arts College',
      programName: 'Digital Media Producer Diploma',
      completionDate: '2007',
      programDescription: 'The Digital Media Production Diploma program is preparation for a professional career in digital media by developing a strong understanding of the fundamentals of visual communications theory and practice. Over the ten months of the program students learn the foundations of design theory and content creation including illustration, typography, layout, web design, photography, and videography for the production of digital media. In addition students learn best practices of the industry and the interpersonal skills necessary for strong collaboration. The program finishes by starting a digital portfolio to showcase skills and talents.',
      honours: true,
    },
    {
      schoolName: 'Lethbridge College',
      programName: 'Business Administration Diploma- Marketing Major',
      completionDate: '2004',
      programDescription: 'Analyze the strategies that make a business successful as a marketing major. With a focus on practical application this training is to prepare a student to become a marketing professional. This involves group presentations, case studies, creating marketing plans, business plans, advertising and working with local businesses.',
      honours: false,
    },
    {
      schoolName: 'Willow Creek Composite High School',
      programName: 'High School Diploma',
      completionDate: '2002',
      programDescription: 'Math, science, history, unravleing the mystery that all started with the big bang. I think we all know about high school.',
      honours: false,
    }   
  ];
  constructor() { }

  ngOnInit() {
  }

}
