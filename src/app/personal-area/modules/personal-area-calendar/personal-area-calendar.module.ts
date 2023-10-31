import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './components/calendar/calendar.component';
import { PersonalAreaCalendarRoutingModule } from './personal-area-calendar-routing.module';

@NgModule({
  declarations: [CalendarComponent],
  imports: [CommonModule, PersonalAreaCalendarRoutingModule],
  exports: [CalendarComponent],
})
export class PersonalAreaCalendarModule {}
