import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalAreaMainComponent } from './components/personal-area-main/personal-area-main.component';
import { PersonalAreaRoutingModule } from './personal-area-routing.module';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { PersonalAreaSettingsComponent } from './components/personal-area-settings/personal-area-settings.component';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [PersonalAreaMainComponent, WidgetsComponent, PersonalAreaSettingsComponent],
  imports: [CommonModule, PersonalAreaRoutingModule, TabsModule],
})
export class PersonalAreaModule {}
