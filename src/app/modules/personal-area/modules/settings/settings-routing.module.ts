import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './components/settings/settings.component';
import { MailSettingsComponent } from './components/mail-settings/mail-settings.component';

const routes: Routes = [
  // { path: '', component: SettingsComponent },
  {
    path: 'personalSettings',
    component: SettingsComponent,
  },
  {
    path: 'mailSettings',
    component: MailSettingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
