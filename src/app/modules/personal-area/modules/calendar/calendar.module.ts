import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CalendarComponent,
  CalendarHeaderComponent,
  CalendarGridComponent,
  CalendarWizardComponent,
} from './components';
import { CalendarRoutingModule } from './calendar-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CalendarGridModalComponent } from './components/calendar-grid/calendar-grid-modal/calendar-grid-modal.component';

@NgModule({
  declarations: [
    CalendarComponent,
    CalendarHeaderComponent,
    CalendarGridComponent,
    CalendarWizardComponent,
    CalendarGridModalComponent,
  ],
  imports: [CommonModule, CalendarRoutingModule, ModalModule.forRoot()],
  exports: [CalendarComponent],
})
export class CalendarModule {}
