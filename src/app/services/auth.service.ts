import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false); 
  isLoggedinguard: boolean = false;
  constructor(private afauth: AngularFireAuth, private router : Router, private toastr: ToastrService) { }

  login(email: string, password: string)
  {
    let responce = this.afauth.signInWithEmailAndPassword(email, password);
    responce.then((logRef)=>{
      this.loadUser()
      this.loggedIn.next(true);
      this.isLoggedinguard = true;
      this.router.navigate(['/dashboard']);
    })
    .catch(err =>{
      console.log(err)
      //TODO: 
      // this.toastr.warning(err,"Invalid Credentials");
    })
    return responce;
  }

  loadUser()
  {
    this.afauth.authState.subscribe(user =>{
      localStorage.setItem('user', JSON.stringify(user));
    })
  }

  isLoggedin()
  {
    console.log(JSON.parse(localStorage.getItem('user') || '{}').email)
    if(JSON.parse(localStorage.getItem('user') || '{}').email != undefined)
    {
      this.loggedIn.next(true);
      this.isLoggedinguard = true;
    }
    return this.loggedIn.asObservable();
  }

  logout()
  {
    this.afauth.signOut().then(()=>{
      this.loggedIn.next(false);
      localStorage.removeItem('user');
      this.isLoggedinguard = false;
      this.toastr.success("Logged Out Successfully")
      this.router.navigate(['/login'])
    })
  }

}
