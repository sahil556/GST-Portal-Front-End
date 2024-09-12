import { Component } from '@angular/core';
import { GstForm } from '../models/gst-form';
import { OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  gstDataArray: Array<{id:string, data: any}> = [];
  popupModal: any

  constructor(private adminService: AdminService){}

  openDialog(data: any): void {
    this.popupModal = data
  }



  ngOnInit(): void {
    console.log("ng on init Triggered")
    // this.adminService.loadDataFromFirestore().subscribe(val =>{
    //   this.gstDataArray = val;
    //   console.log(this.gstDataArray)
    // })
    this.gstDataArray = [
      {
          "id": "a4R9sHLeNX68z9k5duzE",
          "data": {
              "businessName": "Global Business Solution pvt.Ltd",
              "isProduction": false,
              "userImgUrl": "https://firebasestorage.googleapis.com/v0/b/gst-data-collector.appspot.com/o/photo%2F12345678911725945447955?alt=media&token=e1bc6fe9-65cc-4f29-9b0f-76f84d4c120b",
              "businessStartDate": "2002-11-03",
              "vleMobileNumber": "9856895689",
              "mobileNumber": "4578124563",
              "applicantName": "sahil nandaniya",
              "aadharCardUrl": "https://firebasestorage.googleapis.com/v0/b/gst-data-collector.appspot.com/o/aadhar%2F12345678911725945459355?alt=media&token=79b09e50-e1bd-47d2-b6ad-9c357eb77718",
              "leasedOrRentedAggrementUrl": "https://firebasestorage.googleapis.com/v0/b/gst-data-collector.appspot.com/o/leasedAgreement%2F12345678911725945475022?alt=media&token=325f5915-170c-463c-8a8a-617e1eb65a18",
              "panNumber": "NQFPS4561G",
              "dateOfBirth": "2002-11-02",
              "fatherName": "Bharatbhai nandaniya",
              "panCardUrl": "https://firebasestorage.googleapis.com/v0/b/gst-data-collector.appspot.com/o/pan%2F12345678911725945453195?alt=media&token=185292dc-9442-4336-a929-ef8f5809f571",
              "electricityBillUrl": "https://firebasestorage.googleapis.com/v0/b/gst-data-collector.appspot.com/o/electricity%2F12345678911725945464162?alt=media&token=ae6d534d-d816-43ad-bd78-88ae0712620f",
              "passbookPageUrl": "https://firebasestorage.googleapis.com/v0/b/gst-data-collector.appspot.com/o/passbook%2F12345678911725945467858?alt=media&token=1877c4ca-b385-4eed-b17b-20a8db4abdb5",
              "address": "1 1 mote vadala kalavad jamnagar gujarat 3534323",
              "LeasedOrRented": "leasedOrRented",
              "natureOfBusiness": "jeweleey solution pvy",
              "proofOfBusiness": "proofOfBusiness",
              "isTermsAccepted": true,
              "aadharCardNumber": "7307036985461",
              "emailId": "sa@gmailgmaigmailgmail.com",
              "proofOfBusinessUrl": "",
              "businessAddress": "sahil sahd rajkot gujarat india",
              "typeOfBusiness": "LeasedOrRented"
          }
      },
  ]

  // this.gstDataArray = []
  }
  openModal(record: any) {
    // this.selectedRecord = record;
  }
}