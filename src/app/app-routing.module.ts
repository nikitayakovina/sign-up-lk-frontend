import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { PersonalAreaComponent } from './modules/personal-area/components/personal-area/personal-area.component';

const routes: Routes = [
  {
    path: 'personal-area',
    loadChildren: () =>
      import('./modules/personal-area/personal-area.module').then((m) => m.PersonalAreaModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
