export const billingFormInitialValues = {
    email: '',
    name: '',
    country: '',
    city: '',
    postalCode: '',
    streetAddress:'',
};

export const invoiceFormInitialValues = {
    date: new Date(),
    terms: '',
    description: '',
};

export const itemFormInitialValues = {
    name: '',
    quantity: '',
    price: '',
};

export type BillingFormValues = typeof billingFormInitialValues;
export type InvoiceFormValues = typeof invoiceFormInitialValues;
export type ItemFormValues = typeof itemFormInitialValues;
