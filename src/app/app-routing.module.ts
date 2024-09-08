import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewGstRegistrationComponent } from './new-gst-registration/new-gst-registration.component';

const routes: Routes = [
  { path: '', component: NewGstRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
