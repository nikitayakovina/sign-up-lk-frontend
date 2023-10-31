import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalAreaMainComponent } from './components/personal-area-main/personal-area-main.component';

const routes: Routes = [{ path: '', component: PersonalAreaMainComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalAreaRoutingModule {}
