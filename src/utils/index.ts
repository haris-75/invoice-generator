import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: string[]) {
  return twMerge(clsx(inputs))
}

export { type BillingFormValues , type InvoiceFormValues, billingFormInitialValues, invoiceFormInitialValues } from './formikInitialValues'
export { BillingFormSchema, InvoiceFormSchema } from './formikValidationSchema';