import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalAreaMainComponent } from './components/personal-area-main/personal-area-main.component';
import { PersonalAreaRoutingModule } from './personal-area-routing.module';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { PersonalAreaSettingsComponent } from './components/personal-area-settings/personal-area-settings.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PersonalAreaMainComponent,
    WidgetsComponent,
    PersonalAreaSettingsComponent,
    CalendarComponent,
  ],
  imports: [CommonModule, PersonalAreaRoutingModule, TabsModule, ReactiveFormsModule],
})
export class PersonalAreaModule {}
