import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './shared/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { AuthorizationComponent } from './modules/components/authorization/authorization.component';
import { environment } from '../environments/environment';
import { BsModalService } from 'ngx-bootstrap/modal';
import { PersonalAreaComponent } from './modules/components/personal-area/personal-area.component';

const config: SocketIoConfig = {
  url: environment.url,
  options: {
    autoConnect: false,
  },
};
@NgModule({
  declarations: [AppComponent, AuthorizationComponent, PersonalAreaComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TabsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [AuthService, BsModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
