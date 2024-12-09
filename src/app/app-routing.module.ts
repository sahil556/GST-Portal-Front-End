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
  {
    path: '',
    component: NewGstRegistrationComponent,
    title: 'V & V Associates - Chartered Accountants',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login |  V & V Associates',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    title: 'Home | V & V Associates',
  },
  {
    path: 'about-us',
    component: AboutusComponent,
    title: 'About Us | V & V Associates',
  },
  {
    path: 'terms-and-conditions',
    component: TermsAndConditionComponent,
    title: 'Terms & Conditions | V & V Associates',
  },
  {
    path: 'services/audits-and-assurance',
    component: AuditsAndAssuranceComponent,
    title: 'GST Audits and Assurance | V & V Associates',
  },
  {
    path: 'services/taxation',
    component: TaxationComponent,
    title: 'Taxation | V & V Associates',
  },
  {
    path: 'services/risk-and-transaction-advisory',
    component: RiskAdvisoryComponent,
    title: 'Risk & Transaction Advisory | V & V Associates',
  },
  {
    path: 'services/international-taxation',
    component: InternationalTaxationComponent,
    title: 'International Taxation | V & V Associates',
  },
  {
    path: 'services/corporate-support',
    component: CorporateSupportComponent,
    title: 'Corporate Support | V & V Associates',
  },
  {
    path: 'services/accrual-based-account',
    component: AccrualAccountingSystemComponent,
    title: 'Accrual Based Accounting System | V & V Associates',
  },
  {
    path: 'services/accounting-system',
    component: AccountingSystemComponent,
    title: 'Accounting System | V & V Associates',
  },
  {
    path: 'services/kpo-accounts',
    component: KpoAccountComponent,
    title: 'KPO Accounts & Tax | V & V Associates',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
