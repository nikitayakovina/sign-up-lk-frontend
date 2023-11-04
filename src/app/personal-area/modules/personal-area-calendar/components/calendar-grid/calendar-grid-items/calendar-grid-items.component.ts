import {Component, Input} from '@angular/core';
// import * as moment from "moment/moment";
import * as moment from "moment";

@Component({
  selector: 'calendar-grid-items',
  templateUrl: './calendar-grid-items.component.html',
  styleUrls: ['./calendar-grid-items.component.scss']
})
export class CalendarGridItemsComponent {
  // private _day: moment.Moment;
  // private _daysArray: moment.Moment[];
  //
  // @Input() public startWeek: moment.Moment = this._day.clone().startOf("month").startOf("week");
  // @Input() public today: moment.Moment;
  // @Input() public totalDays: number = 42;
  //
  // public get daysArray() {
  //   return this._daysArray;
  // }
  //
  // constructor() {
  //   this.initializingConfiguration()
  // }
  //
  // public isCurrentDay(day: moment.Moment)  {
  //   return moment().isSame(day, "day");
  // }
  // public isSelectedMonth (day: moment.Moment) {
  //   return this.today.isSame(day, "month");
  // }
  //
  // private initializingConfiguration() {
  //   this._day = this.startWeek.clone().subtract(1, "day");
  //   this._daysArray = [...Array(this.totalDays)].map(() => this._day.add(1, "day").clone());
  //   console.log(this.startWeek)
  // }
  //
  // protected readonly moment = moment;
}
