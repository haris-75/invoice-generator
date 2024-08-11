import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: string[]) {
  return twMerge(clsx(inputs))
}

export  const getTotalPrice = (quantity: string , price: string ) => isNaN(parseInt(quantity) * parseInt(price)) ? '' : (parseInt(quantity) * parseInt(price))?.toString();

export {
  type BillingFormValues,
  type InvoiceFormValues,
  type ItemFormValues,
  itemFormInitialValues,
  billingFormInitialValues,
  invoiceFormInitialValues
} from './formikInitialValues'
export { ItemFormSchema, BillingFormSchema, InvoiceFormSchema } from './formikValidationSchema';