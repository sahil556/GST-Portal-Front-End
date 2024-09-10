import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false); 
  isLoggedinguard: boolean = false;
  constructor(private afauth: AngularFireAuth, private router : Router) { }

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
}
