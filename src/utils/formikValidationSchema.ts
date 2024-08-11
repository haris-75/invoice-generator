import * as Yup from 'yup';
export const BillingFormSchema = Yup.object().shape({
  email: Yup.string().email().required().label('Email'),
  name: Yup.string().required().label('Name'),
  country: Yup.string().required().label('Country'),
  city: Yup.string().required().label('City'),
  postalCode: Yup.number()
    .positive('Postal Code must be a positive number')
    .integer('Postal Code must be an integer')
    .required()
    .label('Postal Code'),
  streetAddress: Yup.string().required().label('Street Address'),
});

export const InvoiceFormSchema = Yup.object().shape({
  terms: Yup.string().required().label('Payment Terms'),
  description: Yup.string().required().label('Project Description'),
  date: Yup.string().required().label('Date'),
});