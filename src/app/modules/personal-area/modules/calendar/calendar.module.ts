import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CalendarComponent,
  CalendarHeaderComponent,
  CalendarGridComponent,
  CalendarWizardComponent,
} from './components';
import { CalendarRoutingModule } from './calendar-routing.module';

@NgModule({
  declarations: [
    CalendarComponent,
    CalendarHeaderComponent,
    CalendarGridComponent,
    CalendarWizardComponent,
  ],
  imports: [CommonModule, CalendarRoutingModule],
  exports: [CalendarComponent],
})
export class CalendarModule {}
