import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewGstRegistrationComponent } from './new-gst-registration/new-gst-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFileUploadComponent } from './custom-file-upload/custom-file-upload.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoaderComponent } from './layouts/loader/loader.component';
import { ToastrModule } from 'ngx-toastr';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { AuditsAndAssuranceComponent } from './offerings/audits-and-assurance/audits-and-assurance.component';
import { RiskAdvisoryComponent } from './offerings/risk-advisory/risk-advisory.component';
import { TaxationComponent } from './offerings/taxation/taxation.component';
import { InternationalTaxationComponent } from './offerings/international-taxation/international-taxation.component';
import { CorporateSupportComponent } from './offerings/corporate-support/corporate-support.component';
import { AccountingSystemComponent } from './offerings/accounting-system/accounting-system.component';
import { AccrualAccountingSystemComponent } from './offerings/accrual-accounting-system/accrual-accounting-system.component';
import { KpoAccountComponent } from './offerings/kpo-account/kpo-account.component';
import { InputFieldComponent } from './shared/input-field/input-field.component';
import { MapComponent } from './map-component/map-component.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NewGstRegistrationComponent,
    CustomFileUploadComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    LoaderComponent,
    AboutusComponent,
    TermsAndConditionComponent,
    NavbarComponent,
    AuditsAndAssuranceComponent,
    RiskAdvisoryComponent,
    TaxationComponent,
    InternationalTaxationComponent,
    CorporateSupportComponent,
    AccountingSystemComponent,
    AccrualAccountingSystemComponent,
    KpoAccountComponent,
    InputFieldComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
