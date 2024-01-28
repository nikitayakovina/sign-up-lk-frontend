import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PersonalAreaComponent } from './personal-area.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: PersonalAreaComponent,
    children: [
      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full',
      },
      {
        path: 'main',
        component: MainComponent,
      },
      {
        path: 'calendar',
        loadChildren: () =>
          import('./modules/calendar/calendar.module').then((m) => m.CalendarModule),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./modules/settings/settings.module').then((m) => m.SettingsModule),
      },
      {
        path: 'analyze',
        loadChildren: () => import('./modules/analyze/analyze.module').then((m) => m.AnalyzeModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalAreaRoutingModule {}
