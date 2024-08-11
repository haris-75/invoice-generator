import { Dropdown } from './dropdown'
import { Input } from './input';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CarrotIcon } from '@svg';
import { InvoiceFormValues } from '@utils';
import { UseFormikFormReturnType } from '@hooks';


export const InvoiceForm = (
{
  handleChange,
  errors,
  touched,
  values,
  setFieldValue
}:UseFormikFormReturnType<InvoiceFormValues>
) => {
    return (
        <div className='grid grid-cols-2 gap-4'>
            <div className='col-span-1'>
                <div className="relative flex flex-col gap-1.5">
                    <label className='text-sm font-medium text-secondary'>Invoice Date</label>
                    <DatePicker
                        className='text-base text-dark flex h-10 w-full rounded-lg border border-border bg-light py-[10px] px-[14px]'
                        selected={values?.date}
                        onChange={(date) => setFieldValue('date',date)}
                    />
                    <div className='absolute carrot-icon'>
                        <CarrotIcon/>
                    </div>
                </div>
            </div>
            <div className='col-span-1'>
                <Dropdown
                    name='terms'
                    label='Payment Terms'
                    touched={touched?.terms}
                    error={errors?.terms}
                    placeholder='Select Terms'
                    selectedValue={values?.terms}
                    setSelectedValue={setFieldValue}
                    dropdownList={['Net 10 Days', 'Net 20 Days', 'Net 30 Days']}

                />
            </div>
            <div className='col-span-2'>
                <Input
                    type='text'
                    label='Project Description'
                    touched={touched?.description}
                    error={errors?.description}
                    value={values?.description}
                    onChange={handleChange('description')}
                />
            </div>
        </div>
  )
}
