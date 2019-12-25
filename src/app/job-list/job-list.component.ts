import { Component, OnInit } from '@angular/core';
import { iJob } from '../classes/job';
import { JOBS } from 'src/app/constants/jobs';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  JOBS: iJob[] = JOBS;
  constructor() { }

  ngOnInit() {
  }

}
