import {Component} from '@angular/core';
import * as moment from "moment/moment";

moment.updateLocale("en", {week: {dow: 1}})
@Component({
  selector: 'calendar-grid',
  templateUrl: './calendar-grid.component.html',
  styleUrls: ['./calendar-grid.component.scss']
})
export class CalendarGridComponent {
  private _totalDays: number = 42; // будет зависит от того какой формат календаря
  public headerDaysArray: moment.Moment[];
  private _today: moment.Moment = moment();
  private _startWeek: moment.Moment = this._today.clone().startOf("month").startOf("week");
  private _daysArray: moment.Moment[];
  private initializingConfiguration() {
    this._today = this.startWeek.clone().subtract(1, "day");
    this._daysArray = [...Array(this._totalDays)].map(() => this._today.add(1, "day").clone());
  }
  public get startWeek() {
    return this._startWeek
  }
  public get daysArray() {
    return this._daysArray;
  }
  constructor() {
    this.initializingConfiguration();
    this.headerDaysArray = [...Array(7)].map(() => this._today.add(1, 'day').clone());
  }
  public isCurrentDay(day: moment.Moment)  {
    return moment().isSame(day, "day");
  }
  public isSelectedMonth (day: moment.Moment) {
    return moment().isSame(day, "month");
  }

  protected readonly moment = moment;
}
