import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewGstRegistrationComponent } from './new-gst-registration/new-gst-registration.component';
import { LoginComponent } from './auth/login/login.component';
import { authGuard } from './auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component';

const routes: Routes = [
  { path: '', component: NewGstRegistrationComponent},
  { path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [authGuard]},
  {path: 'about-us', component: AboutusComponent},
  {path: 'terms-and-conditions', component: TermsAndConditionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
