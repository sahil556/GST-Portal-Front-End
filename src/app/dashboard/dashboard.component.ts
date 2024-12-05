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
  gstDataArray: Array<GstForm> = [];
  popupModal: any

  constructor(private adminService: AdminService){}

  openDialog(data: any): void {
    this.popupModal = data
  }



  ngOnInit(): void {
    this.adminService.loadDataFromFirestore()
    .then(val =>{
      this.gstDataArray = val;
    })
  }
  openModal(record: any) {
    // this.selectedRecord = record;
  }
}
