import { useState } from 'react'
import { Dropdown } from './dropdown'
import { Input } from './input'

export const InvoiceForm = () => {
    const [paymentTerm, setPaymentTerm] = useState('')
    return (
        <div className='grid grid-cols-2 gap-4'>
            <div className='col-span-1'>
                <Input
                    type='text'
                    label='Invoice Date'
                    error=''
                    touched={false}
                    disabled={false}
              />
            </div>
            <div className='col-span-1'>
                <Dropdown
                    label='Payment Terms'
                    touched={false} error=''
                    placeholder='Select Term'
                    selectedValue={paymentTerm}
                    setSelectedValue={setPaymentTerm}
                    dropdownList={['Net 10 Days', 'Net 20 Days', 'Net 0 Days']}
                />
            </div>
            <div className='col-span-2'>
                <Input
                    type='text'
                    label='Project Description'
                    error=''
                    touched={false}
                    disabled={false}
                />
            </div>
        </div>
  )
}
