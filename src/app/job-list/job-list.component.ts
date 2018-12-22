import { Component, OnInit } from '@angular/core';
import { Job } from '../classes/job';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  JOBS: Job[] = [
    {    
      companyName: 'Schneider Electric - Power Measurement Ltd',
      positionName: 'position',
      startDate: '2018',
      endDate: 'present',
      shortDescription: 'Creation of software tools to support the manufacturing process. Application creation in MongoDB, Express, Angular, and NodeJS. ',
      longDescription: 'Creation of software tools to support the manufacturing process. Application creation in MongoDB, Express, Angular, and NodeJS. ',
      keywords: []
    },
    {    
      companyName: 'Schneider Electric - Power Measurement Ltd',
      positionName: 'Junior Software Engineer Intern',
      startDate: '2017',
      endDate: '2018',
      shortDescription: 'Creation of software tools to support the manufacturing process. Application creation in MongoDB, Express, Angular, and NodeJS. ',
      longDescription: 'Need a long description.',
      keywords: []
    },
    {    
      companyName: 'BC Public Service Agency',
      positionName: 'Application Support',
      startDate: '2015',
      endDate: '2016',
      shortDescription: 'Six month co-op. Report creation, data analysis, implementation, process recommendations, troubleshooting, strategic threat & risk assessment (STRA), privacy impact assessment (PIA), support for data migration. Focus on mobile version.',
      longDescription: 'Curtis joined the Time and Leave project team at the BC Public Service agency for the larger product rollout and transfer of the project to the operations team.\nThe software is based on Oracle PeopleSoft. Responsibilities included report creation, data analysis, implementation, process recommendations, troubleshooting, strategic threat & risk assessment (STRA), privacy impact assessment (PIA), and support for data migration.\n With oversight from project managers, he developed project management  and documentation skills through a sub-project called "Mobile Enablement". The project was taken from charter to completion and is built on GreyHeller\'s People Mobile software. The project can be seen by visiting the BC Gov’s MyHR portal from a mobile device. This was a tremendous learning experience and introduction to the software development life cycle in large organizations.',
      keywords: []
    },
    {    
      companyName: 'LayCraft Design',
      positionName: 'Founder, Graphic Designer, Client Management',
      startDate: '2007',
      endDate: '2014',
      shortDescription: 'Client communication, administration, creative direction, print design, illustration, photography, branding consultation, and contract instruction.',
      longDescription: 'Curtis joined the Time and Leave project team at the BC Public Service agency for the larger product rollout and transfer of the project to the operations team.\nThe software is based on Oracle PeopleSoft. Responsibilities included report creation, data analysis, implementation, process recommendations, troubleshooting, strategic threat & risk assessment (STRA), privacy impact assessment (PIA), and support for data migration.\n With oversight from project managers, he developed project management  and documentation skills through a sub-project called "Mobile Enablement". The project was taken from charter to completion and is built on GreyHeller\'s People Mobile software. The project can be seen by visiting the BC Gov’s MyHR portal from a mobile device. This was a tremendous learning experience and introduction to the software development life cycle in large organizations.',
      keywords: []
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
