import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SharedDataService {
  keywords: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  constructor() {}
}
