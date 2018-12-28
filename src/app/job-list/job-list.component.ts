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
      positionName: 'Manufacturing Industrialization Technologist',
      startDate: '2018',
      endDate: 'present',
      shortDescription: 'Create and maintain support tools for manufacturing and production teams.',
      longDescription: 'Create and maintain software tools to support manufacturing and production teams. This includes updating legacy .NET apps. Reverse engineering. Documentation. Network understanding. File management. Sharepoint management. Server admin. Database skills. Developing support software tools. Scripting, automation. Digitization. A mile wide of experience.',
      bonus: [
        'Active Directory', 
        'ASP.NET', 
        'Angular',
        'C#', 
        'Email',
        'Engineering', 
        'ExpressJS',
        'Database',
        'Docker and virtualization',
        'Group policy',
        'Industrialization',
        'InfoSec',
        'JavaScript',
        'Linux',
        'Labview',
        'Project management', 
        'Python 3', 
        'NodeJS',
        'Sharepoint', 
        'Raspberry Pi', 
        'Reverse Engineering', 
        'Server Admin and permissions', 
        'Systems Architecture', 
        'Testing',
        'Versioning Github and Perforce',
        'Virtualization P2V', 
        'Windows'
      ]
    },
    {    
      companyName: 'Schneider Electric - Power Measurement Ltd',
      positionName: 'Junior Software Engineer Intern',
      startDate: '2017',
      endDate: '2018',
      shortDescription: 'Creation of software tools to support the manufacturing process. Application creation in MongoDB, Express, Angular, and NodeJS. ',
      longDescription: 'Need a long description.',
      bonus: [

      ]
    },
    {    
      companyName: 'C3I - Capstone Project',
      positionName: 'Stackbutton: A friendly provisioning tool for DevOps tool chains.',
      startDate: '2017',
      endDate: '2017',
      shortDescription: '',
      longDescription: '',
      bonus: []
    },
    {    
      companyName: 'BC Public Service Agency',
      positionName: 'Application Support',
      startDate: '2015',
      endDate: '2016',
      shortDescription: 'Six month co-op. Report creation, data analysis, implementation, process recommendations, troubleshooting, strategic threat & risk assessment (STRA), privacy impact assessment (PIA), support for data migration. Focus on mobile version.',
      longDescription: 'Curtis joined the Time and Leave project team at the BC Public Service agency for the larger product rollout and transfer of the project to the operations team.\nThe software is based on Oracle PeopleSoft. Responsibilities included report creation, data analysis, implementation, process recommendations, troubleshooting, strategic threat & risk assessment (STRA), privacy impact assessment (PIA), and support for data migration.\n With oversight from project managers, he developed project management  and documentation skills through a sub-project called "Mobile Enablement". The project was taken from charter to completion and is built on GreyHeller\'s People Mobile software. The project can be seen by visiting the BC Gov’s MyHR portal from a mobile device. This was a tremendous learning experience and introduction to the software development life cycle in large organizations.',
      bonus: []
    },
    {    
      companyName: 'LayCraft Design',
      positionName: 'Founder, Graphic Designer, Client Management',
      startDate: '2007',
      endDate: '2014',
      shortDescription: 'Client communication, administration, creative direction, print design, illustration, photography, branding consultation, and contract instruction.',
      longDescription: 'Established in 2007, LayCraft Design was a full-service creative company. Curtis\' primary responsibilities included client communication, administration, creative direction, web design, print design, illustration, photography, branding consultation, and contract instruction.\nExamples of clients: Government of Alberta computer training centre, Sun Media Group, BC Art Teachers Association, The Red Cross, The Salvation Army, and Events Edmonton. Created various branding, ads, promotions for nightclubs, restaurants, industrial companies, and other businesses.',
      bonus: []
    },
    {    
      companyName: 'Interactivity Board Game Café',
      positionName: 'Game Lord',
      startDate: '2013',
      endDate: '2016',
      shortDescription: 'Teaching board games. Café duties. Technical stuff.',
      longDescription: 'Curtis taught games and sold games at the board games café. Curtis has taught and played over 400 modern designer board games. During the startup phase, he was responsible for a miscellany of work: setting up POS, TouchBistro server, and counting and arranging inventory. Board games are a beautiful mixture of algorithms, graphic design, game theory, and cardboard.',
      bonus: []
    },
    {    
      companyName: 'The Salvation Army Community and Family Services',
      positionName: 'Communication Designer',
      startDate: '2013',
      endDate: '2016',
      shortDescription: 'Website content, rebranding, communication design, computer literacy instruction.',
      longDescription: 'Curtis set up and the new Joomla website. He collected and wrote descriptions about the many programs and services that The Salvation Army Stan Hagen Centre for Families provides. He redesigned print materials to fit the centre\'s renaming: forms, business cards, certificates, manuals, signs, and etc… Curtis taught computer literacy skills in the computer lab: Windows, File Management, Word, Excel, and powerpoint. During Christmas he was responsible for various organizational tasks surrounding the Christmas Hamper and Toy Shop programs such as collecting and managing client intake data.',
      bonus: []
    },
    {    
      companyName: 'Northern Alberta Institute of Technology (NAIT)',
      positionName: 'Instructor',
      startDate: '2007',
      endDate: '2009',
      shortDescription: 'Curriculum development, and instruction for graphic design classes.',
      longDescription: 'Curtis developed curriculum and instructed at The Northern Alberta Institute of Technology (NAIT).  Classes included InDesign Level 1 & 2, Acrobat Level 1 & 2, Print Tools for Scanning & Printing, Photoshop Level 1-3, Digital Photo Basic, and Design Theory. He was also an instructor for NAIT\'s kids summer camps in GameMaker, digital photography, and Photoshop.',
      bonus: []
    },
    {    
      companyName: 'Edmonton Digital Arts College',
      positionName: 'Instructor',
      startDate: '2007',
      endDate: '2009',
      shortDescription: 'Instructor for graphic design tools. Focused training.',
      longDescription: 'After graduation, the college hired Curtis for his ability to instruct. Curtis\' work was mainly in corporate-training and focused-training. He provided classes for various organizations such as: Blackberry & Acrobat Pro training for the Government of Alberta, InDesign Training for Sun Media Group, Adobe creative suite training for the University of Alberta\'s faculty of extension.',
      bonus: []
    },
    {    
      companyName: 'AT&T (Via: Convergys)',
      positionName: 'Customer Service Representative',
      startDate: '2006',
      endDate: '2006',
      shortDescription: 'Tech-support, after-hours tech-support, billing support, activations and transfers.',
      longDescription: 'Customers across the western USA called for troubleshooting and support with their GSM devices. Curtis used Siebel and AXIS CRM systems to track, resolve, and notate issues. Included troubleshooting of various GSM issues using AT&T tools.',
      bonus: []
    },
    {    
      companyName: 'Starbucks Coffee Co.',
      positionName: 'Barista',
      startDate: '2004',
      endDate: '2006',
      shortDescription: 'Slinging coffee and schmoozing with patrons.',
      longDescription: 'Curtis\' responsibility at Starbucks was primarily a Barista but included training other staff on making bar drinks. He started in West Edmonton Mall Chapters and transferred to Callingwood. He then moved to Terra Losa. Starbucks\' work flexibility allowed him to work in dozens of stores in Edmonton and with many types of people.',
      bonus: []
    },
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
