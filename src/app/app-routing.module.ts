import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  // возможно придется использовать onpush, потому что при выходе не происходит редирект
  // {
  //   path: '',
  //   redirectTo: '/personal-area',
  //   pathMatch: 'full',
  //   canActivateChild: [AuthGuard],
  // },
  {
    path: 'personal-area',
    canActivateChild: [AuthGuard],
    loadChildren: () =>
      import('./modules/personal-area/personal-area.module').then((m) => m.PersonalAreaModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
