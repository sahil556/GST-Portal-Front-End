import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"gst-data-collector","appId":"1:68683473962:web:a16b68cf28fdd320620f53","storageBucket":"gst-data-collector.appspot.com","apiKey":"AIzaSyBNWRaeZFigfry_-IzWXlwa1sWGTk6dQiA","authDomain":"gst-data-collector.firebaseapp.com","messagingSenderId":"68683473962","measurementId":"G-Q9BJRH49HM"})),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
