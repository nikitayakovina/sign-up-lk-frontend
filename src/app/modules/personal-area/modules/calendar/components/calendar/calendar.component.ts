import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { CalendarEventService } from '../../services/personal-area-calendar.service';
import { Select, Store } from '@ngxs/store';
import { CalendarState } from '../../../../../../store/states/calendar/calendar.state';
import { GetEventsDays, GetToday } from '../../../../../../store/actions/calendar/calendar.actions';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  @Select(CalendarState.getToday) today$: Observable<moment.Moment>;
  public handlePrevClick() {
    this.store.dispatch(
      new GetToday(this.store.selectSnapshot(CalendarState.getToday).clone().subtract(1, 'month')),
    );
    this.store.dispatch(
      new GetEventsDays(this.store.selectSnapshot(CalendarState.getObjectCalendarEvents)),
    );
  }
  public handleNextClick() {
    this.store.dispatch(
      new GetToday(this.store.selectSnapshot(CalendarState.getToday).clone().add(1, 'month')),
    );
    this.store.dispatch(
      new GetEventsDays(this.store.selectSnapshot(CalendarState.getObjectCalendarEvents)),
    );
  }
  public handleTodayClick() {
    this.store.dispatch(new GetToday(moment().clone()));
    this.store.dispatch(
      new GetEventsDays(this.store.selectSnapshot(CalendarState.getObjectCalendarEvents)),
    );
  }
  constructor(private calendarEvents: CalendarEventService, private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(
      new GetEventsDays(this.store.selectSnapshot(CalendarState.getObjectCalendarEvents)),
    );
  }
}
