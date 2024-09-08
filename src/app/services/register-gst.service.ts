import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { GstForm } from '../models/gst-form';

@Injectable({
  providedIn: 'root'
})
export class RegisterGstService {

  // constructor(private angularFireStore: AngularFirestore, private angularFireStore: AngularFireStorage) { }

  uploadImage(image:any, filepath: string)
  {
    // logic to upload an image to the
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
    // logic to save data on cloud store
  }
}
