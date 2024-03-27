import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as moment from 'moment/moment';
moment.updateLocale('en', { week: { dow: 1 } });
@Component({
  selector: 'calendar-header',
  templateUrl: './calendar-header.component.html',
  styleUrls: ['./calendar-header.component.scss'],
})
export class CalendarHeaderComponent implements OnInit {
  private readonly _format = 'HH:mm:ss DD.MM.YYYY';
  private _time: string;
  private _timer: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.startWatchTime();
  }

  public switchDay() {
    return '';
  }

  public switchWeek() {
    return '';
  }

  public switchYear() {
    return '';
  }
  public switchMonth() {
    return '';
  }

  public get time() {
    return this._time;
  }
  private takeTime(): void {
    this._time = moment().format(this._format);
    this.cdr.detectChanges();
  }
  private startWatchTime(): void {
    this.takeTime();
    this._timer = setInterval(() => {
      this.takeTime();
    }, 1000);
  }
}
