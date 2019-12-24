export interface iJob {
  bonus?: string[]; // This is a collection of flavour text that can be added onto the resume for situations where specific information is saught.
  companyName: string;
  endDate: string;
  longDescription?: string;
  shortDescription: string;
  startDate: string;
  methodology?: string[];
  positionName: string;
  project?: string;
  software?: string[];
  technology?: string[];
}
