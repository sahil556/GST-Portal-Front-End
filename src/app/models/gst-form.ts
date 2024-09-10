export interface GstForm {
    applicantName: string;
    fatherName: string;
    panNumber: string;
    dateOfBirth: Date;
    aadharCardNumber: number;
    mobileNumber: number;
    vleMobileNumber: number;
    emailId: string;
    address: string;
    userImgUrl: string;
    panCardUrl: string;
    aadharCardUrl: string;
    passbookPageUrl: string;
    electricityBillUrl: string;

    businessName: string;
    businessStartDate: Date;
    businessAddress: string;
    natureOfBusiness: string;
    typeOfBusiness: string;
    LeasedOrRented: string;
    proofOfBusiness: string;
    leasedOrRentedAggrementUrl: string;
    proofOfBusinessUrl: string;
    isTermsAccepted: boolean;
    isProduction: boolean;
}
