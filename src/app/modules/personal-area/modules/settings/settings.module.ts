import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './components/settings/settings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SettingsRoutingModule } from './settings-routing.module';
import { VisibilityOnSiteComponent } from './components/visibility-on-site/visibility-on-site.component';

@NgModule({
  declarations: [SettingsComponent, VisibilityOnSiteComponent],
  imports: [CommonModule, ReactiveFormsModule, SettingsRoutingModule],
  exports: [SettingsComponent],
})
export class SettingsModule {}
