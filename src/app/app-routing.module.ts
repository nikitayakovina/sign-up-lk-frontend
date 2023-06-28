import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { PersonalAreaComponent } from './components/personal-area/personal-area.component';

const routes: Routes = [
  { path: 'authorization', component: AuthorizationComponent },
  { path: 'personal-area', component: PersonalAreaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
