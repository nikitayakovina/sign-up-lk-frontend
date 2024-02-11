import {
  Action,
  NgxsOnChanges,
  NgxsOnInit,
  NgxsSimpleChange,
  Selector,
  State,
  StateContext,
} from '@ngxs/store';
import * as moment from 'moment/moment';
import {
  GenerateArrayDays,
  GetEventsDays,
  GetToday,
} from '../../actions/calendar/calendar.actions';
import { CalendarEventService } from '../../../modules/personal-area/modules/calendar/services/personal-area-calendar.service';
import { NgModule } from '@angular/core';
import { GetCalendarEventsResponse } from '../../../api/open-api/models/get-calendar-events-response';
import { SpecializationParametersResponse } from '../../../api/open-api/models/specialization-parameters-response';
moment.updateLocale('en', { week: { dow: 1 } });

type calendarEvents = {
  id?: string;
  date?: string;
  name?: string;
  service?: Array<number>;
  start_time?: string;
  end_time?: string;
  phone_number?: string;
  notes?: string;
};
type daysArray = {
  moment: moment.Moment;
  events: calendarEvents[] | null;
};
export interface ICalendarStateModel {
  totalDays: number;
  today: moment.Moment;
  startWeek: moment.Moment;
  eventsDays: calendarEvents[] | null;
  // daysArray: daysArray;
  daysArray: moment.Moment[];
  objectCalendarEvents: daysArray[] | null;
}

@State<ICalendarStateModel>({
  name: 'calendar',
  defaults: {
    totalDays: 42,
    today: moment(),
    startWeek: moment().startOf('month').startOf('week'),
    eventsDays: null,
    daysArray: [],
    objectCalendarEvents: null,
  },
})
@NgModule({
  providers: [CalendarEventService],
})
export class CalendarState implements NgxsOnInit {
  constructor(private calendarEvents: CalendarEventService) {}
  ngxsOnInit(ctx: StateContext<ICalendarStateModel>): void {
    const state = ctx.getState();
    const startWeek = state.today.clone().startOf('month').startOf('week');
    const today = startWeek.clone().subtract(1, 'day');
    ctx.setState({
      ...state,
      daysArray: [...Array(state.totalDays)].map(() => today.add(1, 'day').clone()),
    });
  }
  @Selector()
  static getDaysArray(state: ICalendarStateModel) {
    const startWeek = state.today.clone().startOf('month').startOf('week');
    const today = startWeek.clone().subtract(1, 'day');

    return [...Array(state.totalDays)].map(() => today.add(1, 'day').clone());
  }
  @Selector()
  static getToday(state: ICalendarStateModel) {
    return state.today;
  }
  @Selector()
  static getObjectCalendarEvents(state: ICalendarStateModel) {
    return state.objectCalendarEvents;
  }

  @Action(GenerateArrayDays)
  generateArrayDays(ctx: StateContext<ICalendarStateModel>, action: GenerateArrayDays): void {
    const state = ctx.getState();
  }
  @Action(GetToday)
  getToday(ctx: StateContext<ICalendarStateModel>, action: GetToday): void {
    const state = ctx.getState();
    const startWeek = action.momentObject.clone().startOf('month').startOf('week');
    const today = startWeek.clone().subtract(1, 'day');
    ctx.setState({
      ...state,
      today: action.momentObject,
      daysArray: [...Array(state.totalDays)].map(() => today.add(1, 'day').clone()),
    });
  }
  @Action(GetEventsDays)
  getEventsDays(ctx: StateContext<ICalendarStateModel>, action: GetEventsDays): void {
    const state = ctx.getState();
    const daysArray = state.daysArray;
    const dates = [
      state.daysArray[0].format(),
      state.daysArray[state.daysArray.length - 1].format(),
    ];
    this.calendarEvents
      .fetchCalendarEvents(dates)
      .subscribe((response: GetCalendarEventsResponse) => {
        const objectCalendarEvents: daysArray[] = daysArray.map((day) => {
          const matchingData = response.data.filter((data) => moment(data.date).isSame(day, 'day'));

          return {
            moment: day,
            events: matchingData.length > 0 ? matchingData : null,
          };
        });
        ctx.setState({
          ...state,
          eventsDays: response.data,
          objectCalendarEvents,
        });
      });
  }
}
