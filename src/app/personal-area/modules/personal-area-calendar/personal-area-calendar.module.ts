import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent, CalendarHeaderComponent, CalendarGridComponent, CalendarWizardComponent, CalendarGridItemsComponent} from './components';
import { PersonalAreaCalendarRoutingModule } from './personal-area-calendar-routing.module';

@NgModule({
  declarations: [CalendarComponent, CalendarHeaderComponent, CalendarGridComponent, CalendarWizardComponent, CalendarGridItemsComponent],
  imports: [CommonModule, PersonalAreaCalendarRoutingModule],
  exports: [CalendarComponent],
})
export class PersonalAreaCalendarModule {}
