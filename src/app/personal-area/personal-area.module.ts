import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalAreaMainComponent } from './components/personal-area-main/personal-area-main.component';
import { PersonalAreaRoutingModule } from './personal-area-routing.module';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonalAreaCalendarModule } from './modules/personal-area-calendar/personal-area-calendar.module';
import { PersonalAreaSettingsModule } from './modules/personal-area-settings/personal-area-settings.module';

@NgModule({
  declarations: [PersonalAreaMainComponent, WidgetsComponent],
  imports: [
    PersonalAreaRoutingModule,
    CommonModule,
    TabsModule,
    ReactiveFormsModule,
    PersonalAreaCalendarModule,
    PersonalAreaSettingsModule,
  ],
})
export class PersonalAreaModule {}
