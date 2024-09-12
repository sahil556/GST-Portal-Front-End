import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  user: any = '';
  isLoggedin$!: Observable<boolean>;
  shouldDisplayLogin: boolean = true;
  constructor(private authservice: AuthService) {
  }
  ngOnInit() {
    this.isLoggedin$ = this.authservice.isLoggedin();
  }

  shoulddisplay() {
    if (window.location.href.endsWith('login') || window.location.href.endsWith('signup')) {
      return false;
    }
    return true;
  }

  getuser() {
    return JSON.parse(localStorage.getItem('user') || '{}').email;
  }

  onLogout() {
    this.authservice.logout();
  }
}
