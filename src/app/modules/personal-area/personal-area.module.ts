import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalAreaMainComponent } from './components/personal-area-main/personal-area-main.component';
import { PersonalAreaRoutingModule } from './personal-area-routing.module';
import { WidgetsComponent } from './components/widgets/widgets.component';

@NgModule({
  declarations: [PersonalAreaMainComponent, WidgetsComponent],
  imports: [CommonModule, PersonalAreaRoutingModule],
})
export class PersonalAreaModule {}
