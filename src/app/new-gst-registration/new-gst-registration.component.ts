import { Component } from '@angular/core';
import { RegisterGstService } from '../services/register-gst.service';
import { AbstractControl, FormBuilder, FormControl, FormControlName, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { GstForm } from '../models/gst-form';
import { finalize, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { fields } from './fields/personal-info';
import { businessFields } from './fields/business-info';
import { environment } from '../../environments/environment';

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

  fields = fields;

  businessFields = businessFields;

  PropertyProofDocumentOptions = [
    {
      type: 'LeasedOrRented',
      documents: [
        'Lease / Rent Agreement',
        'Property Tax Receiept',
        'Municipal Khata Book',
        'Index',
        '7/12',
        'Electric Bill',
      ],
    },
    {
      type: 'ConsentOrShared',
      documents: [
        'NOC Notarised',
        'Property Tax Receipt',
        'Municipal Khata Book',
        'Index',
        '7/12',
        'Electric Bill',
      ],
    },
  ];

  typeOfBusinessPropertyProofOptions: string[] =
    this.PropertyProofDocumentOptions[0].documents;

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterGstService,
    private toast: ToastrService
  ) {
    this.gstForm = this.formBuilder.group({
      title: ['', Validators.required],
      fatherName: ['', Validators.required],
      panNumber: [
        '',
        [Validators.required, Validators.minLength(10)],
      ],
      dateOfBirth: ['', [Validators.required]],
      aadharCard: ['', [Validators.required]],
      mobileNo: ['', [Validators.required]],
      vleMobile: [''],
      emailId: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      applicantImg: ['', [Validators.required]],
      panCardImg: [''],
      aadharCardImg: [''],
      passbookImg: [''],
      electricityBillImg: ['', Validators.required],
      businessName: ['', [Validators.required]],
      businessStartDate: ['', [Validators.required]],
      businessAddress: ['', [Validators.required]],
      hsnCode: ['', [Validators.required]],
      natureOfBusiness: ['', [Validators.required]],
      typeOfBusinessProperty: ['LeasedOrRented', [Validators.required]],
      leasedOrRented: [this.typeOfBusinessPropertyProofOptions[0]],
      proofOfBusiness: ['proofOfBusiness'],
      typeOfBusinessPropertyDocument: [''],
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

  SelectionChange() {
    let selectedType = this.gstForm.value.typeOfBusinessProperty;
    this.PropertyProofDocumentOptions.map((item) => {
      if (item.type == selectedType) {
        this.typeOfBusinessPropertyProofOptions = item.documents;
      }
    });

    this.gstForm.patchValue({
      leasedOrRented: this.typeOfBusinessPropertyProofOptions[0],
    });
  }

  async onSubmit() {
    // console.log('on submit is called');
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
      hsnCode: this.gstForm.value.hsnCode,
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
        'Please Wait !',
        {timeOut: 5000}
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
            'Application Submitted',
            { timeOut: 5000 }
          );
          this.resetForm();
          this.IsLoading = false;
          this.IsApplicationSucceeded = true;
        })
        .catch((err) => {
          let validationFailedProperties = "";
          this.IsLoading = false;
          for (const [key, value] of Object.entries(err.error.errors)) {
              validationFailedProperties += `${key}, `
          }

          this.toast.error(
            validationFailedProperties,
            'Validation Failed for below properties',
            { timeOut: 10000 }
          );
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
    this.gstForm.patchValue({
      typeOfBusinessProperty: 'LeasedOrRented',
      leasedOrRented: [this.typeOfBusinessPropertyProofOptions[0]],
    });
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

      // if (node == 'photo') {
      //   console.log(file.type);
      //   if (
      //     file.type != 'image/jpg' &&
      //     file.type != 'image/png' &&
      //     file.type != 'image/jpeg'
      //   ) {
      //     fileTypeError = true;
      //   }
      // } else if (
      //   file.type != 'image/jpg' &&
      //   file.type != 'image/png' &&
      //   file.type != 'image/jpeg' &&
      //   file.type != 'application/pdf'
      // ) {
      //   fileTypeError = true;
      // }

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
        this.gstForm.value.panNumber + Date.now().toString(),
        node
      );
    }
  }

  uploadImageAndSetURL(image: File | undefined, filepath: string, key: string) {
    this.registerService
      .uploadImage(image, filepath)
      .then((res) => {
        let url = res.url;
        this.updateUploadStatusBadgeAndSetURL(key, 'Uploaded', url);
      })
      .catch((err) => {
        this.updateUploadStatusBadgeAndSetURL(key, '', '');
        this.toast.warning(err.error, 'Please Select Appropriate File');
      });
  }

  updateUploadStatusBadgeAndSetURL(key: string, status: string, url: string) {
    switch (key) {
      case 'photo':
        this.selectedUserImageUrl = url;
        this.userImageUploadStatus = status;
        break;
      case 'pan':
        this.selectedPanImageUrl = url;
        this.panImageUploadStatus = status;
        break;
      case 'aadhar':
        this.selectedAadharImageUrl = url;
        this.aadharImageUploadStatus = status;
        break;
      case 'electricity':
        this.selectedElectricityImageUrl = url;
        this.electricityImageUploadStatus = status;
        break;
      case 'passbook':
        this.selectedPassbookImageUrl = url;
        this.passbookImageUploadStatus = status;
        break;
      case 'propertytaxreceipt':
        this.selectedProofOfBusinessImageUrl = url;
        this.proofOfBusinessImageUploadStatus = status;
        break;
      case 'leasedAgreement':
        this.selectedleasedOrRentedImageUrl = url;
        this.leasedOrRentedImageUploadStatus = status;
        break;
    }
  }
}

