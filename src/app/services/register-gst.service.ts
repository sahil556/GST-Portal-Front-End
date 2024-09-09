import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { GstForm } from '../models/gst-form';
import { finalize, Observable } from 'rxjs';
import { HttpEvent } from '@angular/common/http';

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

  saveData(
    selectedUserImage: any,
    selectedAadharImage: any, 
    selectedPanImage: any,
    selectedPassbookImage: any,
    selectedElectricityImage: any,
    selectedProofOfBusinessImage: any,
    selectedleasedOrRentedImage: any,
    formData: GstForm
  )
  {
    console.log("Within service")
    console.log(formData)
    if(selectedUserImage != undefined)
    {
      // formData.userImgUrl = this.uploadImage(selectedUserImage, "UAMDOOFLF"+Date.now())
      // this.angularFireStore.collection('gstData').add(formData).then(docRef =>{
      //   console.log("GST Data Uploaded")
      // })
    }
  }
}
