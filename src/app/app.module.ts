import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"gst-data-collector","appId":"1:68683473962:web:a16b68cf28fdd320620f53","storageBucket":"gst-data-collector.appspot.com","apiKey":"AIzaSyBNWRaeZFigfry_-IzWXlwa1sWGTk6dQiA","authDomain":"gst-data-collector.firebaseapp.com","messagingSenderId":"68683473962","measurementId":"G-Q9BJRH49HM"})),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
