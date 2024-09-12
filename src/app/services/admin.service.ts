import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { environment } from '../../environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private angularFireStore: AngularFirestore, private angularFireStorage: AngularFireStorage) { }

  loadDataFromFirestore()
  {
    return this.angularFireStore.collection('gstData', ref => ref.where('isProduction', '==', environment.isProduction)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a =>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, data};
        })
      })
    )
  }

}
