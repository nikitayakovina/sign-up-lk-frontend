import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationComponent } from './modules/components/authorization/authorization.component';
import { RegistrationComponent } from './modules/components/registration/registration.component';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [AppComponent, AuthorizationComponent, RegistrationComponent],
  imports: [BrowserModule, AppRoutingModule, TabsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
