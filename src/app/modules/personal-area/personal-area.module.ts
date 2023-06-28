import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalAreaComponent } from './components/personal-area/personal-area.component';
import { PersonalAreaRoutingModule } from './personal-area-routing.module';

@NgModule({
  declarations: [PersonalAreaComponent],
  imports: [CommonModule, PersonalAreaRoutingModule],
})
export class PersonalAreaModule {}
