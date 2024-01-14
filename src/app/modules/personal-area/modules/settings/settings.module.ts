import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './components/settings/settings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SettingsRoutingModule } from './settings-routing.module';
import { VisibilityOnSiteComponent } from './components/visibility-on-site/visibility-on-site.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { ServicesComponent } from './components/services/services.component';
import { ServicesModalComponent } from './components/services-modal/services-modal.component';
import { MailSettingsComponent } from './components/mail-settings/mail-settings.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    SettingsComponent,
    VisibilityOnSiteComponent,
    StepperComponent,
    ServicesComponent,
    ServicesModalComponent,
    MailSettingsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SettingsRoutingModule,
    CdkStepperModule,
    BsDropdownModule,
  ],
  exports: [SettingsComponent],
})
export class SettingsModule {}
