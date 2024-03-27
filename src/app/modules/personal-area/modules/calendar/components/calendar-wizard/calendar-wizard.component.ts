import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ICalendarStateModel } from '../shared/types';

@Component({
  selector: 'calendar-wizard',
  templateUrl: './calendar-wizard.component.html',
  styleUrls: ['./calendar-wizard.component.scss'],
})
export class CalendarWizardComponent implements OnInit {
  @Output() prevClicked = new EventEmitter<void>();
  @Output() nextClicked = new EventEmitter<void>();
  @Output() todayClicked = new EventEmitter<void>();
  @Select('calendar') calendar$: Observable<ICalendarStateModel>;

  constructor() {
    this.calendar$.subscribe((e) => console.log(e)); // вывод store calendar
  }
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
