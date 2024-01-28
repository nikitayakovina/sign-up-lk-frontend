import { Action, Selector, State, StateContext } from '@ngxs/store';
import * as moment from 'moment/moment';
import { GenerateArrayDays, GetToday } from '../../actions/calendar/calendar.actions';
moment.updateLocale('en', { week: { dow: 1 } });

type calendarEvents = {
  id: string;
  date: string;
  name: string;
  service: number[];
  start_time: string;
  end_time: string;
  phone_number: string;
  notes: string;
};

type daysArray = {
  day: moment.Moment;
  events: calendarEvents;
};
export interface ICalendarStateModel {
  totalDays: number;
  today: moment.Moment;
  startWeek: moment.Moment;
  // daysArray: daysArray;
  daysArray: moment.Moment[];
}

@State<ICalendarStateModel>({
  name: 'calendar',
  defaults: {
    totalDays: 42,
    today: moment(),
    startWeek: moment().startOf('month').startOf('week'),
    daysArray: [],
  },
})
export class CalendarState {
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

  @Action(GenerateArrayDays)
  generateArrayDays(ctx: StateContext<ICalendarStateModel>, action: GenerateArrayDays): void {
    const state = ctx.getState();
  }
  @Action(GetToday)
  getToday(ctx: StateContext<ICalendarStateModel>, action: GetToday): void {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      today: action.momentObject,
    });
  }
}
