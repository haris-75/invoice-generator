import { BillForm, Header, InvoiceForm, Item, ItemForm, PreviewInvoice, PreviewItems } from '@components'
import { useBillingForm, useFormikForm } from '@hooks';
import { CLIENT, COMPANY } from '@constants';
import { getTotalPrice, invoiceFormInitialValues, InvoiceFormSchema, itemFormInitialValues, ItemFormSchema } from '@utils';
import { format } from 'date-fns';
import { useState } from 'react';


function App() {
  const [itemArray, setItemArray]= useState<Item[]>([])
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
  
  const {
    handleChange: handleItemChange,
    handleSubmit: handleItemSubmit,
    errors: itemErrors,
    touched: itemTouched,
    values: itemValues,
    setFieldError: setItemFieldError,
    clearForm: clearItemForm,
    } = useFormikForm(itemFormInitialValues, itemSubmitHandler, ItemFormSchema,);
  
  function itemSubmitHandler(values: any) { 
    setItemArray([...itemArray, {
      name: values?.name,
      price: values?.price,
      quantity: values?.quantity,
      key: JSON.stringify(values?.name + values?.price + values?.quantity),
      total: parseInt(getTotalPrice(values?.price, values?.quantity))
    }]);
    clearItemForm();
  }
  
  function clientSubmitHandler(values: any) { 
    console.log('client',values);
  }


  function companytSubmitHandler(values:any) { 
    console.log('company',values);
  }
  
  const formHandler = () => {
    handleClientSubmit();
    handleCompanySubmit();
    handleInvoiceSubmit();
  }

  const resetHandler = () => {
    clearClientForm();
    clearCompanyForm();
    clearInvoiceForm();
    clearItemForm();
    setItemArray([]);
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
          <ItemForm
            itemArray={itemArray}
            setItemArray={setItemArray}
            handleSubmit={handleItemSubmit}
            handleChange={handleItemChange}
            errors={itemErrors}
            touched={itemTouched}
            values={itemValues}
            setFieldError={setItemFieldError}
          />
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
            <PreviewItems  itemArray={itemArray}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
