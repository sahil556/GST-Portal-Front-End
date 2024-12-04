import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  isLoggedinguard: boolean = false;
  constructor(
    private http: HttpClient,
    private afauth: AngularFireAuth,
    private router: Router,
    private toastr: ToastrService
  ) {}

  login(email: string, password: string)
  {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    let responce = firstValueFrom(this.http.post(
      environment.baseUrl + '/Auth/Login',
      JSON.stringify({ userEmail: email, password }),
      { headers }
    ));
    responce
      .then((logRef: any) => {
        console.log(logRef);
        localStorage.setItem('token', logRef.token)
        localStorage.setItem('refreshToken', logRef.refreshToken)
        this.loggedIn.next(true);
        this.isLoggedinguard = true;
        this.router.navigate(['/dashboard']);
      })
      .catch((err) => {
        if(err.status == 401 )
        {
          this.toastr.warning(
            'Please enter correct credentails',
            'Invalid Credentials'
          );
        }
        else
          this.toastr.warning(err.statusText,"Some thing went Wrong !");
      });
    return responce;
  }

  isLoggedin() {
    if (localStorage.getItem('token') != undefined) {
      this.loggedIn.next(true);
      this.isLoggedinguard = true;
    }
    return this.loggedIn.asObservable();
  }

  logout() {
    this.afauth.signOut().then(() => {
      this.loggedIn.next(false);
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      this.isLoggedinguard = false;
      this.toastr.success('Logged Out Successfully');
      this.router.navigate(['/login']);
    });
  }

  resetPassword(email: string) {
    let responce = this.afauth.sendPasswordResetEmail(email);
    return responce;
  }
}
