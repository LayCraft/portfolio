import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JobListComponent } from './job-list/job-list.component';
import { EducationListComponent } from './education-list/education-list.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { ResumeBuilderComponent } from './resume-builder/resume-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    EducationListComponent,
    TopNavBarComponent,
    ResumeBuilderComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
