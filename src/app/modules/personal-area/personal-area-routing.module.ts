import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalAreaMainComponent } from './components/personal-area-main/personal-area-main.component';
import { PersonalAreaSettingsComponent } from './components/personal-area-settings/personal-area-settings.component';

const routes: Routes = [
  { path: '', component: PersonalAreaMainComponent },
  { path: 'settings', component: PersonalAreaSettingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalAreaRoutingModule {}
