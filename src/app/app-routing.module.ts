import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewGstRegistrationComponent } from './new-gst-registration/new-gst-registration.component';
import { LoginComponent } from './auth/login/login.component';
import { authGuard } from './auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component';
import { AuditsAndAssuranceComponent } from './offerings/audits-and-assurance/audits-and-assurance.component';
import { TaxationComponent } from './offerings/taxation/taxation.component';
import { RiskAdvisoryComponent } from './offerings/risk-advisory/risk-advisory.component';
import { InternationalTaxationComponent } from './offerings/international-taxation/international-taxation.component';
import { CorporateSupportComponent } from './offerings/corporate-support/corporate-support.component';
import { AccrualAccountingSystemComponent } from './offerings/accrual-accounting-system/accrual-accounting-system.component';
import { AccountingSystemComponent } from './offerings/accounting-system/accounting-system.component';
import { KpoAccountComponent } from './offerings/kpo-account/kpo-account.component';
import { MapComponent } from './map-component/map-component.component';

const routes: Routes = [
  { path: '', component: NewGstRegistrationComponent},
  { path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [authGuard]},
  {path: 'about-us', component: AboutusComponent},
  {path: 'terms-and-conditions', component: TermsAndConditionComponent},
  {path: 'services/audits-and-assurance', component: AuditsAndAssuranceComponent},
  {path: 'services/taxation', component:TaxationComponent},
  {path: 'services/risk-and-transaction-advisory', component:RiskAdvisoryComponent},
  {path: 'services/international-taxation', component:InternationalTaxationComponent},
  {path: 'services/corporate-support', component:CorporateSupportComponent},
  {path: 'services/accrual-based-account', component:AccrualAccountingSystemComponent},
  {path: 'services/accounting-system', component: AccountingSystemComponent},
  {path: 'services/kpo-accounts', component: KpoAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
