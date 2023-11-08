import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './shared/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { environment } from '../environments/environment';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalService } from './shared/services/modal.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WidgetsComponent } from './components/widgets/widgets.component';

const config: SocketIoConfig = {
  url: environment.url,
  options: {
    autoConnect: false,
  },
};
@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    MainComponent,
    NavbarComponent,
    WidgetsComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TabsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [AuthService, BsModalService, ModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
