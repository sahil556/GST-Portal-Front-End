import { Component } from '@angular/core';
import { RegisterGstService } from '../services/register-gst.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GstForm } from '../models/gst-form';
import { finalize, Observable } from 'rxjs';

@Component({
  selector: 'app-new-gst-registration',
  templateUrl: './new-gst-registration.component.html',
  styleUrl: './new-gst-registration.component.css'
})
export class NewGstRegistrationComponent {
  gstForm: FormGroup = new FormGroup({});
  selectedUserImageUrl: string = "";
  userImageUploadStatus: string = "Uploading...";

  selectedPanImageUrl: string = "";
  panImageUploadStatus: string = "Uploading...";

  selectedAadharImageUrl: string = "";
  aadharImageUploadStatus: string = "Uploading...";

  selectedPassbookImageUrl: string = "";
  passbookImageUploadStatus: string = "Uploading...";

  selectedElectricityImageUrl: string = "";
  electricityImageUploadStatus: string = "Uploading...";

  selectedleasedOrRentedImageUrl: string = "";
  leasedOrRentedImageUploadStatus: string = "Uploading...";

  selectedProofOfBusinessImageUrl: string = "";
  proofOfBusinessImageUploadStatus: string = "Uploading...";

  constructor(private formBuilder: FormBuilder, private registerService: RegisterGstService) {
    this.gstForm = this.formBuilder.group({
      title: ['sahil', Validators.required],
      fatherName: ['sahi', Validators.required],
      panNumber: ['1234567891', [Validators.required, Validators.minLength(10)]],
      dateOfBirth: ["2002-11-02", [Validators.required]],
      aadharCard: ["1", [Validators.required]],
      mobileNo: ["1", [Validators.required]],
      vleMobile: [""],
      emailId: ["sa@gma", [Validators.required, Validators.email]],
      address: ["12", [Validators.required]],
      applicantImg: ["", [Validators.required]],
      panCardImg: [""],
      aadharCardImg: [""],
      passbookImg: [""],
      electricityBillImg: ["", Validators.required],
      businessName: ["sa", [Validators.required]],
      businessStartDate: ["2002-11-03", [Validators.required]],
      businessAddress: ["sa", [Validators.required]],
      natureOfBusiness: ["sa", [Validators.required]],
      typeOfBusinessProperty: ["LeasedOrRented", [Validators.required]],
      leasedOrRented: [""],
      proofOfBusiness: [""],
      leaseOrRentAggrement: [""],
      proofOfBusinessImg: [""],
      isTermsAccepted: [true, [Validators.required, Validators.requiredTrue]],
    });
  }

  get fc() {
    return this.gstForm.controls;
  }

  onSubmit() {
    console.log("on submit is called");
    const formData: GstForm = {
      applicantName: this.gstForm.value.title,
      fatherName: this.gstForm.value.fatherName,
      panNumber: this.gstForm.value.panNumber,
      dateOfBirth: this.gstForm.value.dateOfBirth,
      aadharCardNumber: this.gstForm.value.aadharCard,
      mobileNumber: this.gstForm.value.mobileNo,
      vleMobileNumber: this.gstForm.value.vleMobile,
      emailId: this.gstForm.value.emailId,
      address: this.gstForm.value.address,
      userImgUrl: this.selectedUserImageUrl,
      panCardUrl: this.selectedPanImageUrl,
      aadharCardUrl: this.selectedAadharImageUrl,
      passbookPageUrl: this.selectedPassbookImageUrl,
      electricityBillUrl: this.selectedElectricityImageUrl,
      businessName: this.gstForm.value.businessName,
      businessStartDate: this.gstForm.value.businessStartDate,
      businessAddress: this.gstForm.value.businessAddress,
      natureOfBusiness: this.gstForm.value.natureOfBusiness,
      typeOfBusiness: this.gstForm.value.typeOfBusinessProperty,
      LeasedOrRented: this.gstForm.value.leasedOrRented,
      proofOfBusiness: this.gstForm.value.proofOfBusiness,
      leasedOrRentedAggrementUrl: this.selectedleasedOrRentedImageUrl,
      proofOfBusinessUrl: this.selectedProofOfBusinessImageUrl,
      isTermsAccepted: this.gstForm.value.isTermsAccepted,
      isProduction : false,
      createdAt: new Date()
    }

    this.registerService.saveData(formData)
  }

  onFileChoosen($event: { target: any}): void {
    {
      let button  = ($event.target as HTMLButtonElement)
      //pan. aadhar, electricity, passbook, photo 
      // propertytaxreceipt, leasedAgreement
      console.log($event.target)
      let node  = ($event.target as HTMLInputElement).name;
      console.log(node)
      
      // const reader = new FileReader();
      // reader.onload= (e :any) =>{
      //     this.imgSrc = e.target.result;
      // }
      // reader.readAsDataURL($event?.target.files[0]);
      if($event.target.files[0] != undefined && node != "")
      {
        this.uploadImageAndSetURL($event.target.files[0], node +"/"+  this.gstForm.value.panNumber + Date.now().toString() , node)
      }
    }
  }

  uploadImageAndSetURL(image: File | undefined, filepath: string, key: string)
  {
    this.registerService.uploadImage(image, filepath).subscribe({
        complete: () =>{
        this.registerService.getDownloadURL(filepath).subscribe(url =>{
          switch(key)
          {
              case 'photo':
                this.selectedUserImageUrl = url;
                this.userImageUploadStatus = "Uploaded"
                break;
              case 'pan':
                this.selectedPanImageUrl = url;
                this.panImageUploadStatus = "Uploaded"
                break;
              case 'aadhar':
                this.selectedAadharImageUrl = url;
                this.aadharImageUploadStatus = "Uploaded"
                break;
              case 'electricity':
                this.selectedElectricityImageUrl = url;
                this.electricityImageUploadStatus = "Uploaded"
                break;
              case 'passbook':
                this.selectedPassbookImageUrl = url;
                this.passbookImageUploadStatus = "Uploaded"
                break;
              case 'propertytaxreceipt':
                this.selectedProofOfBusinessImageUrl = url;
                this.proofOfBusinessImageUploadStatus = "Uploaded"
                break;
              case 'leasedAgreement':
                this.selectedleasedOrRentedImageUrl = url;
                this.leasedOrRentedImageUploadStatus = "Uploaded"
                break;    
              default:
                console.log("no node matched")
          }
        })
      }, 
    })
  }

}

