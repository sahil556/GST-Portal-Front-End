import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { firstValueFrom, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { GstForm } from '../models/gst-form';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) {}

  loadDataFromFirestore() {
    console.log('Is Production');
    console.log(environment.isProduction);
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ 'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
     });

    let responce = firstValueFrom(
      this.http.get<Array<GstForm>>(environment.baseUrl + '/GSTDetails', {
        headers,
      })
    );
    responce
      .then((logRef: any) => {})
      .catch((err) => {
        if (err.status == 401) {
          this.toastr.warning('Session Time out', 'Please Login Again !');
          localStorage.removeItem('token')
          localStorage.removeItem('refreshToken')
          this.router.navigate(['/login']);
        } else this.toastr.warning(err.statusText, 'Some thing went Wrong !');
      });
    return responce;
  }
}
