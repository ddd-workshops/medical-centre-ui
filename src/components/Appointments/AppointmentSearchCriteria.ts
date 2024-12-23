import { AppointmentBrief } from "../../contract/types";

export type AppointmentSearchCriteria = {
  query: string;
  status?: AppointmentBrief['status'];
  dateFrom?: Date;
  dateTo?: Date;
};
