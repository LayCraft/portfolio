import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-builder',
  templateUrl: './resume-builder.component.html',
  styleUrls: ['./resume-builder.component.css']
})
export class ResumeBuilderComponent implements OnInit {
  keywords: string[];
  constructor() { }

  ngOnInit() {
  }
  cleanKeywords(uncheckedUserInput: string) {
    // this is a basic chop of the keywords into a list
    // split on commas and semicolons
    this.keywords = uncheckedUserInput
      .split(',')
      .map(item => {
        // clean whitespace off of the ends
        return item.trim();
      });
  }
}
