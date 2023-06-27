import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './modules/components/authorization/authorization.component';
import { PersonalAreaComponent } from './modules/components/personal-area/personal-area.component';

const routes: Routes = [
  { path: 'authorization', component: AuthorizationComponent },
  { path: 'personal-area', component: PersonalAreaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
