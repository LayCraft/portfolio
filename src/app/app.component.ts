import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is an Angular App automatically deployed to Github pages using Travis CI. If there are some misplaced images please excuse them. It will get fixed when Curtis has a few moments to do work outside of work.';
}
