import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as moment from "moment/moment";

@Component({
  selector: 'calendar-wizard',
  templateUrl: './calendar-wizard.component.html',
  styleUrls: ['./calendar-wizard.component.scss']
})
export class CalendarWizardComponent implements OnInit {
  private _today: moment.Moment = moment();
  @Output() prevClicked = new EventEmitter<void>();
  @Output() nextClicked = new EventEmitter<void>();
  @Output() todayClicked = new EventEmitter<void>();
  @Input() public set today(today: moment.Moment) {
    if (!this._today.isSame(today, 'day')) {
      this._today = today.clone();
    }
  }
  public get objectCurrentMonth(): { m: string; y: string } {
    return {
      m: this._today.locale("ru").format("MMMM"),
      y: this._today.format("YYYY")
    };
  }

  constructor() {}
  ngOnInit() {}
  public onPrevClick() {
    this.prevClicked.emit();
  }
  public onNextClick() {
    this.nextClicked.emit();
  }
  public onTodayClick() {
    this.todayClicked.emit();
  }
}
