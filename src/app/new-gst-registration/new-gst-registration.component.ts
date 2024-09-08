import { Component } from '@angular/core';
import { RegisterGstService } from '../services/register-gst.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GstForm } from '../models/gst-form';

@Component({
  selector: 'app-new-gst-registration',
  templateUrl: './new-gst-registration.component.html',
  styleUrl: './new-gst-registration.component.css'
})
export class NewGstRegistrationComponent {
  gstForm: FormGroup = new FormGroup({});
  selectedUserImage: any;
  selectedPanImage: any;
  selectedAadharImage: any;
  selectedPassbookImage: any;
  selectedElectricityImage: any;
  selectedleasedOrRentedImage: any;
  selectedProofOfBusinessImage: any;


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
      userImgUrl: this.gstForm.value.applicantImg,
      panCardUrl: this.gstForm.value.panCardImg,
      aadharCardUrl: this.gstForm.value.aadharCardImg,
      passbookPageUrl: this.gstForm.value.passbookImg,
      electricityBillUrl: this.gstForm.value.electricityBillImg,
      businessName: this.gstForm.value.businessName,
      businessStartDate: this.gstForm.value.businessStartDate,
      businessAddress: this.gstForm.value.businessAddress,
      natureOfBusiness: this.gstForm.value.natureOfBusiness,
      typeOfBusiness: this.gstForm.value.typeOfBusinessProperty,
      LeasedOrRented: this.gstForm.value.leasedOrRented,
      proofOfBusiness: this.gstForm.value.proofOfBusiness,
      leasedOrRentedAggrementUrl: this.gstForm.value.leaseOrRentAggrement,
      proofOfBusinessUrl: this.gstForm.value.proofOfBusinessImg,
      isTermsAccepted: this.gstForm.value.isTermsAccepted
    }

    this.registerService.saveData(
      this.selectedUserImage,
      this.selectedAadharImage, 
      this.selectedPanImage,
      this.selectedPassbookImage,
      this.selectedElectricityImage,
      this.selectedProofOfBusinessImage,
      this.selectedleasedOrRentedImage,
      formData
    )
    console.log(formData)
  }

  onFileChoosen($event: { target: any}): void {
    {
      //pan. aadhar, electricity, passbook, photo 
      // propertytaxreceipt, leasedAgreement
      console.log($event.target)
      let node  = ($event.target as HTMLInputElement).name;
      console.log(node)
      switch (node)
      {
        case 'photo':
          this.selectedUserImage = $event.target.files[0]
          break;
        case 'pan':
          this.selectedPanImage =  $event.target.files[0]
          break;
        case 'aadhar':
          this.selectedAadharImage = $event.target.files[0]
          break;
        case 'electricity':
          this.selectedElectricityImage = $event.target.files[0]
          break;
        case 'passbook':
          this.selectedPassbookImage = $event.target.files[0]
          break;
        case 'propertytaxreceipt':
          this.selectedProofOfBusinessImage = $event.target.files[0]
          break;
        case 'leasedAgreement':
          this.selectedleasedOrRentedImage = $event.target.files[0]
          break;
        default:
          console.log("image event failed");
      }
    }
  }
}
