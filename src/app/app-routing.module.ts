import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { MainComponent } from './components/main/main.component';
import { JournalComponent } from './components/journal/journal.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'journal',
    component: JournalComponent,
  },
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
