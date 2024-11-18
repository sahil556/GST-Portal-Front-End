export const businessFields = [
  {
    controlName: 'businessName',
    label: 'Business Name',
    placeholder: 'Enter Business Name',
    type: 'text',
    required: true,
    errorMessages: { required: 'Business Name is required' },
  },
  {
    controlName: 'businessStartDate',
    label: 'Business Commencement Date',
    placeholder: 'Enter Business Commencement Date',
    type: 'date',
    required: true,
    errorMessages: { required: 'Business Commencement Date is required' },
  },
  {
    controlName: 'businessAddress',
    label: 'Business Address',
    placeholder: 'Enter Business Address',
    type: 'text',
    required: true,
    errorMessages: { required: 'Business Address is required' },
  },
  {
    controlName: 'natureOfBusiness',
    label: 'Nature of Business Activities to be carried',
    placeholder: 'Eg:- Jewellery Business, Consultancy Services, Footwear, etc',
    type: 'text',
    required: true,
    errorMessages: { required: 'Nature of Business is required' },
  },
];
