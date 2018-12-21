import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JobListComponent } from './job-list/job-list.component';
import { EducationListComponent } from './education-list/education-list.component';

@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    EducationListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
