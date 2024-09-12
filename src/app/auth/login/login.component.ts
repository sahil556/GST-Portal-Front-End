import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  ShouldShowLoader: boolean = false;

  IsLoginForm: boolean = true;

  ngOnInit(): void {
    console.log("Rerendered Login")
  }
  constructor(private authservice : AuthService, private toastr: ToastrService){}
  
  async onSubmit(formValue:any):Promise<void>{
    this.ShouldShowLoader = true;
    if(this.IsLoginForm)
    {
      this.authservice.login(formValue.email, formValue.password).then(()=>{
        this.toastr.success("Logged in successfully")
      })
      .catch(err =>{
        this.ShouldShowLoader = false;
        this.toastr.warning("Please enter correct credentails", "Invalid Credentials",);
      });
    }
    else
    {
      this.authservice.resetPassword(formValue.email).then((docRef)=>{
        this.ShouldShowLoader = false;
        this.toastr.success("please reset your password using link, link will expire in 30 min.", "Password reset link sent to email", {
          timeOut: 5000
        } );
      })
      .catch((error)=>{
        this.ShouldShowLoader = false;
        this.toastr.warning("some thing went wront !", "please try after some time");
      })
      
    }
  }

  togglePage(){
    this.IsLoginForm = !this.IsLoginForm;
  }
}
