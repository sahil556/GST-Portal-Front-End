import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { GstForm } from '../models/gst-form';
import { finalize, Observable } from 'rxjs';
import { HttpEvent } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterGstService {

  constructor(private angularFireStore: AngularFirestore, private angularFireStorage: AngularFireStorage) { }

  downloadURL$ : Observable<string> | undefined

  uploadImage(image:any, filepath: string)
  {
    // this.angularFireStorage.upload(filepath, image).then(() => {
    //   this.angularFireStorage.ref(filepath).getDownloadURL().subscribe(url =>{
    //     console.log("image uploaded ", url);
    //     return url;
    //   })
    // });
    const fileRef = this.angularFireStorage.ref(filepath);
    const task = this.angularFireStorage.upload(filepath, image);
    return task
    .snapshotChanges()
    .pipe(
      finalize(() => {
        this.downloadURL$ = fileRef.getDownloadURL();
        this.downloadURL$.subscribe(url => {
        });
      })
    )
  }

  getDownloadURL(filePath: string)
  {
    return this.angularFireStorage.ref(filePath).getDownloadURL()
  }

  saveData(formData: GstForm )
  {
    console.log("Within service")
    console.log(formData)
    formData.isProduction = environment.isProduction
      this.angularFireStore.collection('gstData').add(formData).then(docRef =>{
        console.log("GST Data Uploaded")
      })
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