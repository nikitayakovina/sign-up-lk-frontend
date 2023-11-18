import { Component, Input, OnInit } from '@angular/core';
import * as moment from "moment/moment";
moment.updateLocale("en", {week: {dow: 1}});

@Component({
  selector: 'calendar-grid',
  templateUrl: './calendar-grid.component.html',
  styleUrls: ['./calendar-grid.component.scss']
})
export class CalendarGridComponent implements OnInit {
  private _totalDays: number;
  private _daysArray: moment.Moment[];
  private _today: moment.Moment = moment();
  private _startWeek: moment.Moment = moment();
  private _currentSelectedMonth: moment.Moment = moment();

  @Input() public set totalDays(days: number) {
    if (this._totalDays !== days) {
      this._totalDays = days;
    }
  }
  @Input() public set today(today: moment.Moment) {
    if (!this._today.isSame(today, 'day')) {
      this._today = today.clone();
      this._currentSelectedMonth = today.clone();
      this.initializingConfiguration();
    }
  }
  @Input() public set startWeek(startWeek: moment.Moment) {
    if (!this._startWeek.isSame(startWeek, 'day')) {
      this._startWeek = startWeek.clone();
      this.initializingConfiguration();
    }
  }

  public get daysArray() {
    return this._daysArray;
  }
  public get today() {
    return this._today;
  }

  constructor() {}
  ngOnInit() {
    this.initializingConfiguration();
  }

  private initializingConfiguration() {
    this._today = this._startWeek.clone().subtract(1, "day");
    this._daysArray = [...Array(this._totalDays)].map(() => this._today.add(1, "day").clone());
  }
  public isCurrentDay(day: moment.Moment)  {
    return moment().isSame(day, "day");
  }
  public isSelectedMonth (day: moment.Moment) {
    return this._currentSelectedMonth.isSame(day, "month");
  }

  protected readonly moment = moment;
}