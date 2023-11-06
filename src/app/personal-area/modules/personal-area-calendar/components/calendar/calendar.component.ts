import { Component } from '@angular/core';
import * as moment from "moment";
import { BehaviorSubject } from "rxjs";
moment.updateLocale("en", {week: {dow: 1}});

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  private _totalDays: number = 42;
  private _today: BehaviorSubject<moment.Moment> = new BehaviorSubject(moment());
  private _startWeek: BehaviorSubject<moment.Moment> = new BehaviorSubject(this._today.value.clone().startOf('month').startOf('week'));
  public get totalDays() {
    return this._totalDays;
  }
  public get today() {
    return this._today;
  }
  public get startWeek() {
    return this._startWeek;
  }
  public handlePrevClick() {
    this._today.next(this.today.value.clone().subtract(1, 'month'));
    this._startWeek.next(this.today.value.clone().startOf('month').startOf('week'))
  }
  public handleNextClick() {
    this._today.next(this.today.value.clone().add(1, 'month'));
    this._startWeek.next(this.today.value.clone().startOf('month').startOf('week'));
  }
  public handleTodayClick() {
    this._today.next(moment())
    this._startWeek.next(this.today.value.clone().startOf('month').startOf('week'));
  }
  constructor() {}
}
