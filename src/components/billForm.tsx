import { Dropdown } from './dropdown'
import { Input } from './input'
import { COMPANY } from '@constants';
import { UseFormikFormReturnType } from '@hooks';
import { BillingFormValues } from '@utils';

export const BillForm = ({
  title,
  handleChange,
  errors,
  touched,
  values,
  setFieldValue
}:UseFormikFormReturnType<BillingFormValues> & {title:string}) => {
  const formTitle = title === COMPANY ? 'Bill From' : 'Bill To';
  const labelName = title === COMPANY ? 'Company' : 'Client'
    return (
      <div className='flex flex-col gap-4'>
          <h1 className='text-dark font-bold text-2xl'>{formTitle}</h1>
          <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6">
                  <Input
                    type='text'
                    label={`${labelName} Name`}
                    touched={touched?.name}
                    error={errors?.name}
                    value={values?.name}
                    onChange={handleChange('name')}
                  />
              </div>
              <div className="col-span-6">
                  <Input
                    type='text'
                    label={`${labelName} Email`}
                    touched={touched?.email}
                    error={errors?.email}
                    value={values?.email}
                    onChange={handleChange('email')}
                  />
              </div>
              <div className="col-span-4">
                  <Dropdown
                    label='Country'
                    touched={touched?.country}
                    error={errors?.country}
                    placeholder='Select Country'
                    selectedValue={values?.country}
                    setSelectedValue={setFieldValue}
                    dropdownList={['Pakistan', 'India', 'USA', 'Canada']}
                    name='country'
                  />
              </div>
              <div className="col-span-4">
                  <Input
                    type='text'
                    label='City'
                    touched={touched?.city}
                    error={errors?.city}
                    value={values?.city}
                    onChange={handleChange('city')}
                  />
              </div>
              <div className="col-span-4">
                  <Input
                    type='text'
                    label='Postal Code'
                    touched={touched?.postalCode}
                    error={errors?.postalCode}
                    value={values?.postalCode}
                    onChange={handleChange('postalCode')}
                  />
              </div>
              <div className="col-span-12">
                  <Input
                    type='text'
                    label='Street Address'
                    touched={touched?.streetAddress}
                    error={errors?.streetAddress}
                    value={values?.streetAddress}
                    onChange={handleChange('streetAddress')}
                  />
                </div>
            </div>
     </div>
  )
}
