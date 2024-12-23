import { Injectable } from '@angular/core';
import { GstForm } from '../models/gst-form';
import { firstValueFrom, Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterGstService {

  constructor(private http: HttpClient) { }

  downloadURL$ : Observable<string> | undefined

  uploadImage(image:any, filepath: string)
  {
    const formData = new FormData();
    formData.append('file', image, image.name);

    let responce = firstValueFrom(
      this.http.post<{ url: string }>(
        environment.baseUrl + '/GSTDetails',
        formData
      )
    );
    return responce;
  }

  saveData(formData: GstForm )
  {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    formData.isProduction = environment.isProduction;
     let responce = firstValueFrom(
       this.http.post(
         environment.baseUrl + '/GSTDetails/submit',
         JSON.stringify(formData),
         { headers }
       )
     );
    return responce;
  }
}


// {
//   "applicantName": "sahil",
//   "fatherName": "sahi",
//   "panNumber": "1234567891",
//   "dateOfBirth": "2002-11-02",
//   "aadharCardNumber": "1",
//   "mobileNumber": "1",
//   "vleMobileNumber": "",
//   "emailId": "sa@gma",
//   "address": "12",
//   "userImgUrl": "https://firebasestorage.googleapis.com/v0/b/gst-data-collector.appspot.com/o/1725937382193?alt=media&token=ede8964c-54d4-456e-aa1d-30c43e24b331",
//   "panCardUrl": "https://firebasestorage.googleapis.com/v0/b/gst-data-collector.appspot.com/o/1725937386047?alt=media&token=074c93ae-75ba-4453-b5d7-bc8cf230bdff",
//   "aadharCardUrl": "https://firebasestorage.googleapis.com/v0/b/gst-data-collector.appspot.com/o/1725937395329?alt=media&token=771a50a3-c80d-4dd9-83c2-61674fb66c73",
//   "passbookPageUrl": "https://firebasestorage.googleapis.com/v0/b/gst-data-collector.appspot.com/o/1725937400134?alt=media&token=03ac91bc-b82d-41c8-af3d-09343084ecab",
//   "electricityBillUrl": "https://firebasestorage.googleapis.com/v0/b/gst-data-collector.appspot.com/o/1725937405913?alt=media&token=7dee0aba-c5b1-4e28-a484-e5ffe3f72744",
//   "businessName": "sa",
//   "businessStartDate": "2002-11-03",
//   "businessAddress": "sa",
//   "natureOfBusiness": "sa",
//   "typeOfBusiness": "LeasedOrRented",
//   "LeasedOrRented": "leasedOrRented",
//   "proofOfBusiness": "proofOfBusiness",
//   "leasedOrRentedAggrementUrl": "https://firebasestorage.googleapis.com/v0/b/gst-data-collector.appspot.com/o/1725937413682?alt=media&token=f118a8ef-8e97-4d30-933f-bfd734a41d10",
//   "proofOfBusinessUrl": "https://firebasestorage.googleapis.com/v0/b/gst-data-collector.appspot.com/o/1725937418102?alt=media&token=3b646933-7808-4508-9478-372f63463ef7",
//   "isTermsAccepted": true
// }
