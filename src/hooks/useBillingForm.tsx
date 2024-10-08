import { billingFormInitialValues, BillingFormSchema } from '@utils'
import { useFormikForm } from './useFormikForm'

export const useBillingForm = (submitHandler: (values:any)=>void) => {
  const {
    handleChange,
    handleSubmit,
    errors,
    touched,
    values,
    setFieldError,
    setFieldValue,
    clearForm,
    isValid,
  } =
    useFormikForm(billingFormInitialValues, submitHandler, BillingFormSchema);
  
  return {
    isValid,
    handleChange,
    handleSubmit,
    errors,
    touched,
    values,
    setFieldError,
    setFieldValue,
    clearForm,
  }
}