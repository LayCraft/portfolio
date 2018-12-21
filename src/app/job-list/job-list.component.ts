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
      companyName: 'company',
      positionName: 'position',
      startDate: 'start',
      endDate: 'end',
      shortDescription: 'short',
      longDescription: 'long',
      keywords: ['key']
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
