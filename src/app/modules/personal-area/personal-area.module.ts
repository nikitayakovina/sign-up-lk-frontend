import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PersonalAreaComponent } from './personal-area.component';
import { PersonalAreaRoutingModule } from './personal-area-routing.module';
import { MainComponent } from './components/main/main.component';
import { WidgetsComponent } from './components/widgets/widgets.component';

@NgModule({
  declarations: [NavbarComponent, PersonalAreaComponent, MainComponent, WidgetsComponent],
  imports: [CommonModule, PersonalAreaRoutingModule],
})
export class PersonalAreaModule {}
