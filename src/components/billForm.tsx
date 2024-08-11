import { useState } from 'react'
import { Dropdown } from './dropdown'
import { Input } from './input'

export const BillForm = () => {
    const [country, setCountry]=useState('')
    return (
      <div className='flex flex-col gap-4'>
          <h1 className='text-dark font-bold text-2xl'>Bill Form</h1>
          <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6">
                  <Input
                    type='text'
                    label='Company Name'
                    touched={false}
                    error=''
                    disabled={false}
                  />
              </div>
              <div className="col-span-6">
                  <Input
                    type='text'
                    label='Company Email'
                    touched={false}
                    error=''
                    disabled={false}
                  />
              </div>
              <div className="col-span-4">
                  <Dropdown
                      label='Country'
                      touched={false}
                      error=''
                      placeholder='Select Country'
                      selectedValue={country}
                      setSelectedValue={setCountry}
                      dropdownList={['Pakistan', 'India', 'USA', 'Canada']} 
                  />
              </div>
              <div className="col-span-4">
                  <Input
                    type='text'
                    label='City'
                    touched={false}
                    error=''
                    disabled={false}
                  />
              </div>
              <div className="col-span-4">
                  <Input
                    type='text'
                    label='Postal Code'
                    touched={false}
                    error=''
                    disabled={false}
                  />
              </div>
              <div className="col-span-12">
                  <Input
                    type='text'
                    label='Postal Code'
                    touched={false}
                    error=''
                    disabled={false}
                  />
                </div>
            </div>
     </div>
  )
}
