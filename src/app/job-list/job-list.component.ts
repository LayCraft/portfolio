import { Component, OnInit } from '@angular/core';
import { Job } from '../classes/job';
import { JOBS } from 'src/app/constants/jobs';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  JOBS: Job[] = JOBS;
  constructor() { }

  ngOnInit() {
  }

}
