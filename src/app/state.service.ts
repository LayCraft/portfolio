import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }
  keywords: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
}
