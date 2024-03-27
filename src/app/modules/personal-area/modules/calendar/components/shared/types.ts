import * as moment from 'moment';

export enum switchingDisplay {
  Day = 'day',
  Week = 'week',
  Month = 'month',
  Year = 'year',
}

export type calendarEvents = {
  id?: string;
  date?: string;
  name?: string;
  service?: Array<number>;
  start_time?: string;
  end_time?: string;
  phone_number?: string;
  notes?: string;
};

export type daysArray = {
  moment: moment.Moment;
  events: calendarEvents[] | null;
};
export interface ICalendarStateModel {
  totalDays: number;
  matrixDaysInCurrentYear: moment.Moment[][];
  today: moment.Moment;
  startWeek: moment.Moment;
  eventsDays: calendarEvents[] | null;
  // daysArray: daysArray;
  daysArray: moment.Moment[];
  objectCalendarEvents: daysArray[] | null;
}
