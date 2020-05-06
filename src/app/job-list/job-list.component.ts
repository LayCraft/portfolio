import { Component, OnInit } from "@angular/core";
import { iJob } from "../classes/job";
import { JOBS } from "src/app/constants/jobs";
import { SharedDataService } from "../shared-data.service";

@Component({
  selector: "app-job-list",
  templateUrl: "./job-list.component.html",
  styleUrls: ["./job-list.component.css"],
})
export class JobListComponent implements OnInit {
  jobs: iJob[] = [];
  keys: string[] = [];
  meta: string[][] = [];
  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    // build a collection of
    this.meta = JOBS.map((job: iJob): string[] => {
      return [
        // collect all the content into a meta block for searching
        job.companyName,
        //last element is the company name in entirety
        JSON.stringify(job).toLowerCase(),
      ];
    });

    // collect the keys
    this.sharedDataService.keywords.subscribe((keys: string[]) => {
      //put the keywords in a variable we can use
      if (keys.length > 0) {
        this.keys = keys.map((k) => k.toLowerCase());
        // the indexes that should be added
        const employers: string[] = [];
        for (let m of this.meta) {
          // check for the presence of the key in the meta fields
          for (let key of this.keys) {
            // compare each word to the key
            if (m[1].includes(key)) {
              // add the job to the list
              employers.push(m[0]);
              // no need to evaluate the rest if one is already found
              break;
            }
          }
        }
        this.jobs = JOBS.filter((job) => employers.includes(job.companyName));
      } else {
        // include all the jobs
        this.jobs = JOBS;
      }
    });
  }
}
