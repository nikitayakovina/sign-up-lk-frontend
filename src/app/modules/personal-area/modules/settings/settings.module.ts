import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './components/settings/settings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SettingsRoutingModule } from './settings-routing.module';
import { VisibilityOnSiteComponent } from './components/visibility-on-site/visibility-on-site.component';
import { StepperComponent } from "./components/stepper/stepper.component";
import { CdkStepperModule } from "@angular/cdk/stepper";

@NgModule({
  declarations: [SettingsComponent, VisibilityOnSiteComponent, StepperComponent],
  imports: [CommonModule, ReactiveFormsModule, SettingsRoutingModule, CdkStepperModule],
  exports: [SettingsComponent],
})
export class SettingsModule {}
