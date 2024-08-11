export const billingFormInitialValues = {
    email: '',
    name: '',
    country: '',
    city: '',
    postalCode: -1,
    streetAddress:'',
};

export const invoiceFormInitialValues = {
    date: new Date(),
    terms: '',
    description: '',
};

export type BillingFormValues = typeof billingFormInitialValues;
export type InvoiceFormValues = typeof invoiceFormInitialValues;
