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
  JOBS: iJob[] = JOBS;
  keywords: string[];
  metaBlock: string[][] = [];
  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.metaBlock = JOBS.map((job: iJob): string[] => {
      const meta: string[] = [];
      // collect all the content into a meta block for searching
      if (job.companyName)
        job.companyName.split(" ").forEach((word: string) => meta.push(word));
      if (job.longDescription)
        job.longDescription
          .split(" ")
          .forEach((word: string) => meta.push(word));
      if (job.positionName)
        job.positionName.split(" ").forEach((word: string) => meta.push(word));
      if (job.project)
        job.project.split(" ").forEach((word: string) => meta.push(word));
      job.shortDescription
        .split(" ")
        .forEach((word: string) => meta.push(word));
      if (job.methodology)
        job.methodology.forEach((word: string) => meta.push(word));
      if (job.software) job.software.forEach((word: string) => meta.push(word));
      if (job.technology)
        job.technology.forEach((word: string) => meta.push(word));

      // remove duplicates and sort
      const metaClean = meta
        .sort()
        .filter((m, index) => meta.indexOf(m) === index)
        .map((m: string): string => {
          //when the last character is not a letter, #, or +  we remove it. (Punctuation)
          return m.length > 1 && m[m.length - 1].match(/[^a-zA-Z#+]/)
            ? m.substring(0, m.length - 1)
            : m;
        });
      return metaClean;
    });
    this.sharedDataService.keywords.subscribe((k: string[]) =>
      //put the keywords in a variable we can use
      k ? (this.keywords = k) : (this.keywords = [])
    );
  }
}
