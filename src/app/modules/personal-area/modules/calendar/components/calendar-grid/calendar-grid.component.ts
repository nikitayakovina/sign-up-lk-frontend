import { Component, OnInit } from '@angular/core';
import * as moment from 'moment/moment';
import { Select, Store } from '@ngxs/store';
import { CalendarState } from '../../../../../../store/states/calendar/calendar.state';
import { Observable } from 'rxjs';

// передаем на бэк в виде строки 'YYYY-MM-DD' а там уже в new Date() а старт и конец уже подумать
// подумать над архитиктурой данного компонента и вложенных, где получать данные о записях и в целом
// console.log(new Date(this._daysArray[0].format('YYYY-MM-DD')))
// console.log(this._daysArray[0].format('YYYY-MM-DDTHH:mm:ss.SSSZ'))
// console.log(this._startWeek.format('YYYY-MM-DD'))
@Component({
  selector: 'calendar-grid',
  templateUrl: './calendar-grid.component.html',
  styleUrls: ['./calendar-grid.component.scss'],
})
export class CalendarGridComponent implements OnInit {
  @Select(CalendarState.getDaysArray) daysArray$: Observable<moment.Moment[]>;
  constructor(private store: Store) {}
  ngOnInit() {}

  public isCurrentDay(day: moment.Moment) {
    return moment().isSame(day, 'day');
  }
  public isSelectedMonth(day: moment.Moment) {
    const currentMonth = this.store.selectSnapshot((state) => state.calendar.today);
    return currentMonth.isSame(day, 'month');
  }

  protected readonly moment = moment;
}
