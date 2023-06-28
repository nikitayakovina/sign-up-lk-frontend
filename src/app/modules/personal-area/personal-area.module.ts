import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalAreaMainComponent } from './components/personal-area-main/personal-area-main.component';
import { PersonalAreaRoutingModule } from './personal-area-routing.module';

@NgModule({
  declarations: [PersonalAreaMainComponent],
  imports: [CommonModule, PersonalAreaRoutingModule],
})
export class PersonalAreaModule {}
