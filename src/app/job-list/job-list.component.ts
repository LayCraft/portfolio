import { Component, OnInit } from '@angular/core';
import { Job } from '../classes/job';
import { StateService } from '../state.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  keywords = ['jibberty'];
  JOBS: Job[] = [
    {    
      companyName: 'Schneider Electric - Power Measurement Ltd',
      positionName: 'Manufacturing Industrialization Technologist',
      startDate: '2018',
      endDate: 'present',
      shortDescription: 'Create and maintain support tools for manufacturing and production teams.',
      bonus: [
        'Integrate machines with Active Directory (AD) and group policy.', 
        'Maintenence of legacy .NET web apps running on IIS. This includes C# and VB.NET.', 
        'Build web apps using Node with Angular, JavaScript, and Express.',
        'API development with Node/Express and Python/Bottle.',
        'Front-end design with Angular and Bootstrap.',
        'Email, Skype, and team meetings.',
        'Understanding of manufacturing logistics and ergonomics.',
        'Engineer new communication systems such as Raspberry Pi digital signs.',
        'Programmatic data retrieval from network drives.',
        'Denormalized database storage and retrieval with MongoDB.',
        'Normalized database querying and automation with T-SQL and SQL. (Both MS and Oracle)',
        'Use Docker for development; addition of dockerfiles to most projects.', 
        'Move legacy industrial systems to CentOS hypervisor (P2V).',
        'InfoSec incidence responses for Kerberos and JASBUG security vulnerabilities',
        'Configuration of CentOS and Debian Linux to meet corporate security certificates.',
        'Basic Labview understanding.',
        'Create and integrate 55" touchscreen boards for short interval meetings and digitization.', 
        'Customer asset tracking automation with Python through SFTP protocol.',
        'Generate and install public/private keys on remote servers through SSH.',
        'Bash and command line experience.',
        'Sharepoint navigation changes and content management during site decommisioning.',  
        'Regular full-stack reverse engineering at times when documentation is unavailable', 
        'Manage user permissions on Windows Server and other admin tasks.', 
        'Understand and propose ideas for changes to manufactuing systems architecture.', 
        'Write tests in Python for HTTP API endpoint testing.',
        'Created and hosted wiki for manufacturing engineering.',
        'Wrote centralized step-by-step guides and documentation for various systems.',
        'Source control versioning experience in Github Enterprise and Perforce.',
        'IT tasks for Windows systems including OS installation, hardware troubleshooting, and office support.',
        'Electrical safety and manufacturing ergonomics design training.',
        'Create digitization solutions for manufacturing and production.',
        'Create team triage tool for automated risk assessment.'
      ]
    },
    {    
      companyName: 'Schneider Electric - Power Measurement Ltd',
      positionName: 'Junior Software Engineer Intern',
      startDate: '2017',
      endDate: '2018',
      shortDescription: 'Creation of software tools to support the manufacturing process.',
      bonus: [
        'Process analysis for manufacturing change orders.',
        'Web application creation in MongoDB, Express, Angular, and NodeJS.',
        'Stakeholder presentations and public speaking.',
        'Stakeholder requirements gathering',
        'Third party software research and evaluation.'
      ]
    },
    {    
      companyName: 'C3I - Capstone Project',
      positionName: 'Stackbutton: A friendly provisioning tool for DevOps tool chains.',
      startDate: '2017',
      endDate: '2017',
      shortDescription: 'Student project working with Cloud Compass Computing Inc for a central information collection solution for Red Hat OpenShift.',
      bonus: [
        'Work with Patternfly UI library.',
        'Angular web application development',
        'Cloud development introduction.',
        'Collect and comprehend client needs.',
        'Development pipline exposure.',
        'Introduction to containers and microservices.',
        'Collaborative development using feature branch workflow and GitHub.',
      ]
    },
    {    
      companyName: 'BC Public Service Agency',
      positionName: 'Application Support',
      startDate: '2015',
      endDate: '2016',
      shortDescription: 'Six month co-op. Report creation, data analysis, implementation, process recommendations, troubleshooting, strategic threat & risk assessment (STRA), privacy impact assessment (PIA), support for data migration. Focus on mobile version.',
      bonus: [
        'Project charter development',
        'Agile teams and daily standup meetings.',
        'Understanding of BC Government structure.',
        'On-site training in many government offices.',
        'Software testing and validation.',
        'Working with external vendors to meet requirements.',
        'The Time and Leave project team at the BC Public Service was an effor to replace the legacy HR system with Oracle PeopleSoft.',
        'Product rollout and transfer of the project to the operations team.',
        'Project management and risk mitigation strategies.',
        'Troubleshooting access issues relating to the HR system.',
        'Sharepoint administration.',
        'Daily report creation using excel to condense tracking metrics.',
        'Data analysis and requirements collection for data warehoue team.',
        'Compliance and understanding of government privacy and security requirements',
        'Process reccomendations for continuous improvement governance.',
        'Completed strategic threat & risk assessment (STRA).',
        'Privacy impact assessment (PIA).',
        'Follow PMI project management phases.',
        'Introduction to the software development life cycle in large organizations.',
        'Creation of training materials for mobile version of MyHR.',
      ]
      
    },
    {    
      companyName: 'LayCraft Design',
      positionName: 'Founder, Graphic Designer, Client Management',
      startDate: '2007',
      endDate: '2014',
      shortDescription: 'Established in 2007, LayCraft Design was a full-service creative company.',
      bonus: [
        'Established a full-service creative company.',
        'Client communication and requirements gathering.',
        'Project management.',
        'Contract training for software.',
        'Branding consultation.',
        'Proficient in Adobe Creative Suite software.',
        'Print design. Created books, cards, brochures, and promotional materials.',
        'Branding creation for night clubs and bars.',
        'Product photography and studio lighting.',
        'Web design and layouts.',
        'Advertising and applied arts.',
        'Creative direction for various projects.'
      ]
    },
    {    
      companyName: 'Interactivity Board Game Café',
      positionName: 'Game Lord',
      startDate: '2013',
      endDate: '2016',
      shortDescription: 'Teaching board games. Café duties. Technical stuff. This is a startup made by my friends.',
      bonus: [
        'Teaching designer board games to groups of customers.',
        'Retail sales and finding games that fit a customer\'s intended playstyle.',
        'Slinging coffee.',
        'Various tasks during business startup.',
        'Game theory.',
        'Carboard algrithms.',
        'Set up POS and TouchBistro system.',
        'Food handling.',
        'Inventory counts.',
        'Business strategy.',
      ]
    },
    {    
      companyName: 'The Salvation Army Stan Hagen Centre For Families',
      positionName: 'Communication Designer',
      startDate: '2013',
      endDate: '2016',
      shortDescription: 'Website content, rebranding, communication design, computer literacy instruction.',
      // longDescription: 'Curtis set up and the new Joomla website. He collected and wrote descriptions about the many programs and services that The Salvation Army Stan Hagen Centre for Families provides. He redesigned print materials to fit the centre\'s renaming: forms, business cards, certificates, manuals, signs, and etc… Curtis taught computer literacy skills in the computer lab: Windows, File Management, Word, Excel, and powerpoint. During Christmas he was responsible for various organizational tasks surrounding the Christmas Hamper and Toy Shop programs such as collecting and managing client intake data.',
      bonus: [
        'Joomla website redesign.',
        'Form design and creation for intake.',
        'Communication design, including print material creation, rebranding, and building signage.',
        'Social media campaigns.',
        'Cataloging services and creation of information pamphlets.',
        'Computer literacy instruction in the computer training centre. (Windows, online trust, file management, Word, Excel, and powerpoint.)',
        'Administrative work for Christmas toy shop and food hampers.',
      ]
    },
    {    
      companyName: 'Northern Alberta Institute of Technology (NAIT)',
      positionName: 'Instructor',
      startDate: '2007',
      endDate: '2009',
      shortDescription: 'Curriculum development, and instruction for graphic design classes.',
      // longDescription: 'Curtis developed curriculum and instructed at The Northern Alberta Institute of Technology (NAIT).  Classes included InDesign Level 1 & 2, Acrobat Level 1 & 2, Print Tools for Scanning & Printing, Photoshop Level 1-3, Digital Photo Basic, and Design Theory. He was also an instructor for NAIT\'s kids summer camps in GameMaker, digital photography, and Photoshop.',
      bonus: [
        'Curriculum development for various technology training centre courses.',
        'Class instruction for InDesign Level 1 & 2, Acrobat Level 1 & 2, Print Tools for Scanning & Printing, Photoshop Level 1-3, Digital Photo Basic, and Design Theory.',
        'Instructor for NAIT\'s kids summer camps in GameMaker, digital photography, and Photoshop.',
      ]
    },
    {    
      companyName: 'Edmonton Digital Arts College',
      positionName: 'Instructor',
      startDate: '2007',
      endDate: '2009',
      shortDescription: 'Instructor for graphic design tools. Focused training.',
      // longDescription: 'After graduation, the college hired Curtis for his ability to instruct. Curtis\' work was mainly in corporate-training and focused-training. He provided classes for various organizations such as: Blackberry & Acrobat Pro training for the Government of Alberta, InDesign Training for Sun Media Group, Adobe creative suite training for the University of Alberta\'s faculty of extension.',
      bonus: [
        'After graduation, the college hired Curtis for his ability to teach.',
        'In-house corporate-training and focused-training sessions.',
        'Blackberry & Acrobat Pro training for the Government of Alberta.',
        'InDesign training for Sun Media Group',
        'Adobe Creative Suite training for the University of Alberta\'s faculty of extension.',
      ]
    },
    {    
      companyName: 'AT&T (Via: Convergys)',
      positionName: 'Customer Service Representative',
      startDate: '2006',
      endDate: '2006',
      shortDescription: 'Tech-support, after-hours tech-support, billing support, activations and transfers.',
      // longDescription: 'Customers across the western USA called for troubleshooting and support with their GSM devices. Curtis used Siebel and AXIS CRM systems to track, resolve, and notate issues. Included troubleshooting of various GSM issues using AT&T tools.',
      bonus: [
        'Telephone skills.',
        'Customer service.',
        'Included troubleshooting of various GSM issues using AT&T tools.',
        'Customer deescalation skills.',
        'Used Siebel and AXIS CRM systems to track, resolve, and notate issues.',
      ]
    },
    {    
      companyName: 'Starbucks Coffee Co.',
      positionName: 'Barista',
      startDate: '2004',
      endDate: '2006',
      shortDescription: 'Slinging coffee and schmoozing with patrons.',
      // longDescription: 'Curtis\' responsibility at Starbucks was primarily a Barista but included training other staff on making bar drinks. He started in West Edmonton Mall Chapters and transferred to Callingwood. He then moved to Terra Losa. Starbucks\' work flexibility allowed him to work in dozens of stores in Edmonton and with many types of people.',
      bonus: [
        'Drink and bar training of new staff.',
        'Worked at locations throughout Edmonton.',
        'Organized live music and events.',
        'Work with a wide varierty of people.',
      ]
    },
    
  ];
  constructor(
    private stateService: StateService
  ) { }

  ngOnInit() {
    this.stateService.keywords.subscribe(keywords=>this.keywords=keywords);
  }

}
