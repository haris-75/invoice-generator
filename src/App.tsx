import { BillForm, Header, InvoiceForm, ItemForm, PreviewCard } from '@components'


function App() {

  return (
    <div className='font-inter px-8 bg-light w-screen h-screen'>
      <Header />
      <div className='grid grid-cols-2 gap-8'>
        <div className='p-6 border-[1px] border-border rounded-3xl col-span-1 flex flex-col gap-4 '>
          <BillForm />
          <BillForm />
          <InvoiceForm />
          <ItemForm />
        </div>
        <div className='col-span-1 p-6 bg-lightSecondary rounded-3xl'>
          <h1 className='text-dark font-bold text-2xl'>Preview</h1>
          <PreviewCard/>
        </div>
      </div>
    </div>
  )
}

export default App
