import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-resume-builder',
  templateUrl: './resume-builder.component.html',
  styleUrls: ['./resume-builder.component.css']
})
export class ResumeBuilderComponent implements OnInit {
  keywords: string[];
  constructor(
    private stateService: StateService
  ) { 
  }

  ngOnInit() {
    this.stateService.keywords.subscribe(keywords=>this.keywords=keywords);
  }
  cleanKeywords(uncheckedUserInput:string){
    //PUT IT STRAIGHT INTO THE STATE OF THE APP.
    //this is a basic chop of the keywords into a list
    //split on commas and semicolons
    this.stateService.keywords.next(
      uncheckedUserInput
      .split(",")
      .map(item=>{
        //clean whitespace off of the ends
        return item.trim();
      })
    );
  } 
  removeKeyword(keyword: string){
    // remove all keywords that match the one entered and put it in the behaviorsubject
    this.stateService.keywords.next(this.keywords.filter(k=>k!==keyword));
  }
}
