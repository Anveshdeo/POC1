import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginpgComponent } from './loginpg/loginpg.component';
import { MbmComponent } from './mbm/mbm.component';
import { ResultsComponent } from './results/results.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginpgComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'mbm',component:MbmComponent},
  {path:'result',component:ResultsComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
