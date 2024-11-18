import { Component } from '@angular/core';
import { RegisterGstService } from '../services/register-gst.service';
import { AbstractControl, FormBuilder, FormControl, FormControlName, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { GstForm } from '../models/gst-form';
import { finalize, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-gst-registration',
  templateUrl: './new-gst-registration.component.html',
  styleUrl: './new-gst-registration.component.css',
})
export class NewGstRegistrationComponent {
  maxFileSizeAllowedInMB = 2;
  IsLoading: Boolean = false;
  IsApplicationSucceeded: Boolean = false;
  gstForm: FormGroup = new FormGroup({});
  selectedUserImageUrl: string = '';
  userImageUploadStatus: string = '';

  selectedPanImageUrl: string = '';
  panImageUploadStatus: string = '';

  selectedAadharImageUrl: string = '';
  aadharImageUploadStatus: string = '';

  selectedPassbookImageUrl: string = '';
  passbookImageUploadStatus: string = '';

  selectedElectricityImageUrl: string = '';
  electricityImageUploadStatus: string = '';

  selectedleasedOrRentedImageUrl: string = '';
  leasedOrRentedImageUploadStatus: string = '';

  selectedProofOfBusinessImageUrl: string = '';
  proofOfBusinessImageUploadStatus: string = '';

  fields = [
    {
      label: "Applicant's Name",
      formControlName: 'title',
      placeholder: "Enter Applicant's Name",
      type: 'text',
      errorMessages: { required: "Applicant's Name is required" },
      isMandatory: true,
    },
    {
      label: "Father's Name",
      formControlName: 'fatherName',
      placeholder: "Enter Father's Name",
      type: 'text',
      errorMessages: { required: "Father's Name is required" },
      isMandatory: true,
    },
    {
      label: 'PAN Number',
      formControlName: 'panNumber',
      placeholder: 'AAABB1234C',
      type: 'text',
      errorMessages: {
        required: 'PAN Number is required',
        minlength: 'PAN must be of 10 characters',
      },
      isMandatory: true,
    },
    {
      label: 'Date of Birth',
      formControlName: 'dateOfBirth',
      placeholder: '',
      type: 'date',
      errorMessages: { required: 'Date of Birth is required' },
      isMandatory: true,
    },
    {
      label: 'Aadhar Card Number',
      formControlName: 'aadharCard',
      placeholder: '999955551111',
      type: 'number',
      errorMessages: {
        required: 'Aadhar Card Number is required',
        maxlength: 'Please enter a valid Aadhar Card Number',
      },
      isMandatory: true,
    },
    {
      label: 'Mobile Number',
      formControlName: 'mobileNo',
      placeholder: '1234567891',
      type: 'number',
      errorMessages: { required: 'Mobile Number is required' },
      isMandatory: true,
    },
    {
      label: 'VLE Mobile',
      formControlName: 'vleMobile',
      placeholder: '1234567891',
      type: 'number',
      errorMessages: {},
      isMandatory: false,
    },
    {
      label: 'Email Id',
      formControlName: 'emailId',
      placeholder: 'youremail@gmail.com',
      type: 'email',
      errorMessages: {
        required: 'Email Id is required',
        email: 'Please enter a valid email',
      },
      isMandatory: true,
    },
    {
      label: 'Address',
      formControlName: 'address',
      placeholder: "Enter Applicant's Residential Address",
      type: 'text',
      errorMessages: { required: 'Address is required' },
      isMandatory: true,
    },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterGstService,
    private toast: ToastrService
  ) {
    this.gstForm = this.formBuilder.group({
      title: ['sahil', Validators.required],
      fatherName: ['sahi', Validators.required],
      panNumber: [
        '1234567891',
        [Validators.required, Validators.minLength(10)],
      ],
      dateOfBirth: ['2002-11-02', [Validators.required]],
      aadharCard: ['1', [Validators.required]],
      mobileNo: ['1', [Validators.required]],
      vleMobile: [''],
      emailId: ['sa@gma', [Validators.required, Validators.email]],
      address: ['12', [Validators.required]],
      applicantImg: ['', [Validators.required]],
      panCardImg: [''],
      aadharCardImg: [''],
      passbookImg: [''],
      electricityBillImg: ['', Validators.required],
      businessName: ['sa', [Validators.required]],
      businessStartDate: ['2002-11-03', [Validators.required]],
      businessAddress: ['sa', [Validators.required]],
      natureOfBusiness: ['sa', [Validators.required]],
      typeOfBusinessProperty: ['LeasedOrRented', [Validators.required]],
      leasedOrRented: ['leasedOrRented'],
      proofOfBusiness: ['proofOfBusiness'],
      leaseOrRentAggrement: [''],
      proofOfBusinessImg: [''],
      isTermsAccepted: [true, [Validators.required, Validators.requiredTrue]],
    });
  }

  get fc() {
    return this.gstForm.controls;
  }

  getFormControl(controlName: string): FormControl {
    return this.gstForm.controls[controlName] as FormControl;
  }

  async onSubmit() {
    console.log('on submit is called');
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
      isProduction: false,
    };

    if (this.IsFileUploadInProgress()) {
      this.toast.warning(
        'please wait till all files are marked as Uploaded.',
        'Please Wait !'
      );
      return;
      //TODO: check again for delayed upload
      // console.log("Waiting for file upload")
      // await new Promise(f => setTimeout(()=>{
      //   this.SaveDataOnCloud(formData);
      // }, 3000));
    } else {
      this.IsLoading = true;
      this.registerService
        .saveData(formData)
        .then((docRef) => {
          console.log(docRef);
          this.toast.success(
            'we will start processing application shortly.',
            'Application Submitted'
          );
          this.gstForm.reset();
          this.IsLoading = false;
          this.IsApplicationSucceeded = true;
        })
        .catch((err) => {
          this.toast.error(
            'please try again after some time',
            'Something went wrong !'
          );
          this.IsLoading = false;
        });
    }
  }

  IsFileUploadInProgress(): Boolean {
    return (
      this.userImageUploadStatus == 'Uploading...' ||
      this.panImageUploadStatus == 'Uploading...' ||
      this.aadharImageUploadStatus == 'Uploading...' ||
      this.passbookImageUploadStatus == 'Uploading...' ||
      this.electricityImageUploadStatus == 'Uploading...' ||
      this.leasedOrRentedImageUploadStatus == 'Uploading...' ||
      this.proofOfBusinessImageUploadStatus == 'Uploading...'
    );
  }

  resetForm() {
    this.gstForm.reset();
    this.userImageUploadStatus =
      this.panImageUploadStatus =
      this.aadharImageUploadStatus =
      this.passbookImageUploadStatus =
      this.electricityImageUploadStatus =
      this.leasedOrRentedImageUploadStatus =
      this.proofOfBusinessImageUploadStatus =
        '';
    this.IsApplicationSucceeded = false;
  }

  onFileChoosen($event: { target: any }): void {
    {
      let fileTypeError = false;
      let button = $event.target as HTMLButtonElement;
      //pan. aadhar, electricity, passbook, photo
      // propertytaxreceipt, leasedAgreement
      let node = ($event.target as HTMLInputElement).name;
      let formElementName = ($event.target as HTMLInputElement).getAttribute(
        'formControlName'
      );

      const file = $event.target.files[0];
      if (
        $event.target.files[0].size >
        this.maxFileSizeAllowedInMB * 1024 * 1024
      ) {
        if (formElementName != null)
          this.gstForm.controls[formElementName].setErrors({
            fileTooLarge: true,
          });
        return;
      }

      if (node == 'photo') {
        console.log(file.type);
        if (
          file.type != 'image/jpg' &&
          file.type != 'image/png' &&
          file.type != 'image/jpeg'
        ) {
          fileTypeError = true;
        }
      } else if (
        file.type != 'image/jpg' &&
        file.type != 'image/png' &&
        file.type != 'image/jpeg' &&
        file.type != 'application/pdf'
      ) {
        fileTypeError = true;
      }

      if (fileTypeError) {
        if (formElementName != null)
          this.gstForm.controls[formElementName].setErrors({
            fileFormatInvalid: true,
          });
        return;
      }

      switch (node) {
        case 'photo':
          this.userImageUploadStatus = 'Uploading...';
          break;
        case 'pan':
          this.panImageUploadStatus = 'Uploading...';
          break;
        case 'aadhar':
          this.aadharImageUploadStatus = 'Uploading...';
          break;
        case 'electricity':
          this.electricityImageUploadStatus = 'Uploading...';
          break;
        case 'passbook':
          this.passbookImageUploadStatus = 'Uploading...';
          break;
        case 'propertytaxreceipt':
          this.proofOfBusinessImageUploadStatus = 'Uploading...';
          break;
        case 'leasedAgreement':
          this.leasedOrRentedImageUploadStatus = 'Uploading...';
          break;
        default:
          console.log('image event failed');
      }
      // const reader = new FileReader();
      // reader.onload= (e :any) =>{
      //     this.imgSrc = e.target.result;
      // }
      // reader.readAsDataURL($event?.target.files[0]);

      console.log('Before Uploading. validation passed');
      this.uploadImageAndSetURL(
        $event.target.files[0],
        node + '/' + this.gstForm.value.panNumber + Date.now().toString(),
        node
      );
    }
  }

  uploadImageAndSetURL(image: File | undefined, filepath: string, key: string) {
    this.registerService.uploadImage(image, filepath).subscribe({
      complete: () => {
        this.registerService.getDownloadURL(filepath).subscribe((url) => {
          switch (key) {
            case 'photo':
              this.selectedUserImageUrl = url;
              this.userImageUploadStatus = 'Uploaded';
              break;
            case 'pan':
              this.selectedPanImageUrl = url;
              this.panImageUploadStatus = 'Uploaded';
              break;
            case 'aadhar':
              this.selectedAadharImageUrl = url;
              this.aadharImageUploadStatus = 'Uploaded';
              break;
            case 'electricity':
              this.selectedElectricityImageUrl = url;
              this.electricityImageUploadStatus = 'Uploaded';
              break;
            case 'passbook':
              this.selectedPassbookImageUrl = url;
              this.passbookImageUploadStatus = 'Uploaded';
              break;
            case 'propertytaxreceipt':
              this.selectedProofOfBusinessImageUrl = url;
              this.proofOfBusinessImageUploadStatus = 'Uploaded';
              break;
            case 'leasedAgreement':
              this.selectedleasedOrRentedImageUrl = url;
              this.leasedOrRentedImageUploadStatus = 'Uploaded';
              break;
          }
        });
      },
    });
  }
}

