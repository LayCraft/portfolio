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
      schoolName: 'edu',
      programName: 'edu',
      completionDate: 'edu',
      programDescription: 'edu',
      honours: true,
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
