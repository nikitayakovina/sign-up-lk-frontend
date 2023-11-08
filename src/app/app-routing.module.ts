import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
    canActivateChild: [AuthGuard],
  },
  // {
  //   path: 'user',
  //   children: [
  //     {
  //       path: 'auth',
  //       component: AuthorizationComponent,
  //     },
  //   ],
  // },
  {
    path: 'auth',
    component: AuthorizationComponent,
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'calendar',
    loadChildren: () => import('./modules/calendar/calendar.module').then((m) => m.CalendarModule),
  },
  {
    path: 'settings',
    loadChildren: () => import('./modules/settings/settings.module').then((m) => m.SettingsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
