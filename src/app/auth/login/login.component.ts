import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  ShouldShowLoader: boolean = false;
  constructor(private authservice : AuthService, private toastr: ToastrService){}
  
  async onSubmit(formValue:any):Promise<void>{
    this.ShouldShowLoader = true;
    this.authservice.login(formValue.email, formValue.password).then(()=>{
      this.toastr.success("Logged in successfully")
    })
    .catch(err =>{
      this.ShouldShowLoader = false;
      this.toastr.error("Please enter correct credentails", "Invalid Credentials",);
    });
    
  }
}
