import { BillForm, Header, InvoiceForm, ItemForm, PreviewInvoice, PreviewItems } from '@components'


function App() {
  const billedFrom = {
    name:'Kevin Scott',
    email:'kevin@gmail.com',
    streetAddress:'211 Elm Street',
    city:'New York',
    country:'USA',
    postalCode: 10001,
  }
  const billedTo = {
    name:'Josh Mathews',
    email:'josh@gmail.com',
    streetAddress:'211 Elm Street',
    city:'New York',
    country:'USA',
    postalCode: 10001,
  }

  return (
    <div className='font-inter px-8 bg-light w-screen h-screen'>
      <Header />
      <div className='grid grid-cols-2 gap-8'>
        <div className='p-6 border-[1px] border-border rounded-3xl col-span-1 flex flex-col gap-4'>
          <BillForm />
          <BillForm />
          <InvoiceForm />
          <ItemForm />
        </div>
        <div className='col-span-1 p-6 bg-lightSecondary rounded-3xl flex flex-col gap-4'>
          <h1 className='text-dark font-bold text-2xl'>Preview</h1>
          <div className='bg-light p-6 shadow-2xl rounded-2xl'>
            <h1 className='font-bold text-[18px] text-dark pb-2.5 border-b-[1px] border-silver'>New Invoice</h1>
            <PreviewInvoice
              date='12 Dec, 2014'
              terms='Net 30 Days'
              billedFrom={billedFrom}
              billedTo={billedTo}
              description='Graphic Design Project'
            />
            <PreviewItems />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
