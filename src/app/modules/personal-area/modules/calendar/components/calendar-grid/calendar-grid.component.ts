import { Component, OnDestroy, OnInit } from '@angular/core';
import * as moment from 'moment/moment';
import { Select, Store } from '@ngxs/store';
import { CalendarState } from '../../../../../../store/states/calendar/calendar.state';
import { Observable } from 'rxjs';
import { CalendarEventService } from '../../services/personal-area-calendar.service';

// передаем на бэк в виде строки 'YYYY-MM-DD' а там уже в new Date() а старт и конец уже подумать
// подумать над архитиктурой данного компонента и вложенных, где получать данные о записях и в целом
// console.log(new Date(this._daysArray[0].format('YYYY-MM-DD')))
// console.log(this._daysArray[0].format('YYYY-MM-DDTHH:mm:ss.SSSZ'))
// console.log(this._startWeek.format('YYYY-MM-DD'))
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
@Component({
  selector: 'calendar-grid',
  templateUrl: './calendar-grid.component.html',
  styleUrls: ['./calendar-grid.component.scss'],
})
export class CalendarGridComponent implements OnInit {
  @Select(CalendarState.getDaysArray) daysArray$: Observable<moment.Moment[]>;
  @Select(CalendarState.getObjectCalendarEvents) objectCalendarEvents$: Observable<daysArray[]>;
  constructor(private store: Store, private calendarEventService: CalendarEventService) {}
  ngOnInit() {
    this.objectCalendarEvents$.subscribe((e) => console.log(e));
  }
  public isCurrentDay(day: moment.Moment) {
    return moment().isSame(day, 'day');
  }
  public isSelectedMonth(day: moment.Moment) {
    const currentMonth = this.store.selectSnapshot((state) => state.calendar.today);
    return currentMonth.isSame(day, 'month');
  }

  protected readonly moment = moment;
}
