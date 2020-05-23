import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JobListComponent } from './job-list/job-list.component';
import { EducationListComponent } from './education-list/education-list.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { ResumeBuilderComponent } from './resume-builder/resume-builder.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    EducationListComponent,
    TopNavBarComponent,
    ResumeBuilderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
