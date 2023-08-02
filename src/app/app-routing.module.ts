import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';
import { AuthorizationComponent } from './components/authorization/authorization.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user/personal-area',
    pathMatch: 'full',
    canActivateChild: [AuthGuard],
  },
  {
    path: 'user',
    children: [
      {
        path: 'auth',
        component: AuthorizationComponent,
      },
      {
        path: 'personal-area',
        canActivateChild: [AuthGuard],
        loadChildren: () =>
          import('./modules/personal-area/personal-area.module').then((m) => m.PersonalAreaModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
