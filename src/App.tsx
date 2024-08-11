import { BillForm, Header, InvoiceForm, ItemForm, PreviewInvoice, PreviewItems } from '@components'
import { useBillingForm, useFormikForm } from '@hooks';
import { CLIENT, COMPANY } from '@constants';
import { invoiceFormInitialValues, InvoiceFormSchema } from '@utils';
import { format } from 'date-fns';


function App() {
  const {
    handleChange: handleCompanyChange,
    handleSubmit: handleCompanySubmit,
    errors: companyErrors,
    touched: companyTouched,
    values: companyValues,
    setFieldError: setCompanyFieldError,
    setFieldValue: setCompanyFieldValue,
    clearForm: clearCompanyForm,
  } = useBillingForm(companytSubmitHandler);

  const {
    handleChange: handleClientChange,
    handleSubmit: handleClientSubmit,
    errors: clientErrors,
    touched: clientTouched,
    values: clientValues,
    setFieldError: setClientFieldError,
    setFieldValue: setClientFieldValue,
    clearForm: clearClientForm,
  } = useBillingForm(clientSubmitHandler);
  
  const {
    handleChange: handleInvoiceChange,
    handleSubmit: handleInvoiceSubmit,
    errors: invoiceErrors,
    touched: invoiceTouched,
    values: invoiceValues,
    setFieldError: setInvoiceFieldError,
    setFieldValue: setInvoiceFieldValue,
    clearForm: clearInvoiceForm,
  } = useFormikForm(
      invoiceFormInitialValues, clientSubmitHandler , InvoiceFormSchema
    );
  
  function clientSubmitHandler(values) { 
    console.log('client',values);
  }


  function companytSubmitHandler(values) { 
    console.log('company',values);
  }
  
  const formHandler = () => {
    handleClientSubmit();
    handleCompanySubmit();
    handleInvoiceSubmit();
  }

  const resetHandler = () => {
    console.log({    clearClientForm,
    clearCompanyForm,
    clearInvoiceForm,})
    clearClientForm();
    clearCompanyForm();
    clearInvoiceForm();
  }

  const billedFrom = {
    name: companyValues?.name,
    email: companyValues?.email,
    streetAddress: companyValues?.streetAddress,
    city: companyValues?.city,
    country: companyValues?.country,
    postalCode: companyValues?.postalCode,
  };

  const billedTo = {
    name: clientValues?.name,
    email: clientValues?.email,
    streetAddress: clientValues?.streetAddress,
    city: clientValues?.city,
    country: clientValues?.country,
    postalCode: clientValues?.postalCode,
  };



  return (
    <div className='font-inter px-8 bg-light w-screen h-screen'>
      <Header submitHandler={formHandler} resetHandler={resetHandler}/>
      <button type='button' onClick={formHandler}>Submit</button>
      <div className='grid grid-cols-2 gap-8'>
        <div className='p-6 border-[1px] border-border rounded-3xl col-span-1 flex flex-col gap-4'>
          <BillForm
            title={COMPANY}
            handleChange={handleCompanyChange}
            errors={companyErrors}
            touched={companyTouched}
            values={companyValues}
            setFieldError={setCompanyFieldError}
            setFieldValue={setCompanyFieldValue}
          />
          <BillForm
            title={CLIENT}
            handleChange={handleClientChange}
            errors={clientErrors}
            touched={clientTouched}
            values={clientValues}
            setFieldError={setClientFieldError}
            setFieldValue={setClientFieldValue}
          />
          <InvoiceForm
            handleChange={handleInvoiceChange}
            errors={invoiceErrors}
            touched={invoiceTouched}
            values={invoiceValues}
            setFieldError={setInvoiceFieldError}
            setFieldValue={setInvoiceFieldValue}
          />
          <ItemForm />
        </div>
        <div className='col-span-1 p-6 bg-lightSecondary rounded-3xl flex flex-col gap-4'>
          <h1 className='text-dark font-bold text-2xl'>Preview</h1>
          <div className='bg-light p-6 shadow-2xl rounded-2xl'>
            <h1 className='font-bold text-[18px] text-dark pb-2.5 border-b-[1px] border-silver'>New Invoice</h1>
            <PreviewInvoice
              date={format(invoiceValues?.date, 'dd MMM, yyyy')}
              terms={invoiceValues?.terms}
              billedFrom={billedFrom}
              billedTo={billedTo}
              description={invoiceValues?.description}
            />
            <PreviewItems />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
