import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent, CalendarHeaderComponent, CalendarGridComponent, CalendarWizardComponent } from './components';
import { PersonalAreaCalendarRoutingModule } from './personal-area-calendar-routing.module';

@NgModule({
  declarations: [CalendarComponent, CalendarHeaderComponent, CalendarGridComponent, CalendarWizardComponent],
  imports: [CommonModule, PersonalAreaCalendarRoutingModule],
  exports: [CalendarComponent],
})
export class PersonalAreaCalendarModule {}
