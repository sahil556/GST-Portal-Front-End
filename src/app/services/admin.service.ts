import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { environment } from '../../environments/environment';
import { firstValueFrom, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { GstForm } from '../models/gst-form';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  loadDataFromFirestore()
  {
    console.log("Is Production")
    console.log(environment.isProduction)
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });


    let responce = firstValueFrom(
      this.http.get <Array<GstForm>>(environment.baseUrl + '/GSTDetails', { headers })
    );
    responce
      .then((logRef: any) => {
      })
      .catch((err) => {
        if (err.status == 401) {
          this.toastr.warning(
            'Session Time out',
            'Please Login Again !'
          );
        } else this.toastr.warning(err.statusText, 'Some thing went Wrong !');
      });
    return responce;
  }

}
