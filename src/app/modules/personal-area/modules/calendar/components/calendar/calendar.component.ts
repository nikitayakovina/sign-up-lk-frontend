import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { CalendarEventService } from '../../services/personal-area-calendar.service';
import { Select, Store } from '@ngxs/store';
import { CalendarState } from '../../../../../../store/states/calendar/calendar.state';
import { GetToday } from '../../../../../../store/actions/calendar/calendar.actions';

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
  }
  public handleNextClick() {
    this.store.dispatch(
      new GetToday(this.store.selectSnapshot(CalendarState.getToday).clone().add(1, 'month')),
    );
  }
  public handleTodayClick() {
    this.store.dispatch(new GetToday(moment().clone()));
  }
  constructor(private calendarEvents: CalendarEventService, private store: Store) {}
  ngOnInit(): void {
    this.fetchCalendarEvents();
  }
  fetchCalendarEvents() {
    const token = 'ваш_токен';
    const dates = ['начало_периода', 'конец_периода'];

    this.calendarEvents.fetchCalendarEvents(dates).subscribe((e) => {
      // console.log('test ', e);
    });

    // this.calendarEvents.apiCalendarGet$Response({ token, dates })
    //   .subscribe(
    //     (response: GetCalendarEventsResponse) => {
    //       this.events = response.body; // Предполагается, что ответ содержит массив объектов
    //     },
    //     error => {
    //       console.error('Ошибка при получении календарных событий', error);
    //     }
    // );
  }
}
