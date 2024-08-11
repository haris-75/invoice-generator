import { Input } from './input';
import { DeleteIcon } from '@svg';
import { Button } from './button';
import { UseFormikFormReturnType } from '@hooks';
import { getTotalPrice, ItemFormValues } from '@utils';

export type Item = { name: string; quantity: string; price: string; key: string, total: number }; 
export const ItemForm = (
  {
    itemArray,
    setItemArray,
    handleChange,
    errors,
    touched,
    values,
    handleSubmit
  }: UseFormikFormReturnType<ItemFormValues> & { itemArray: Item[]; setItemArray: (array: Item[] | never[])=>void }
) => {
  const removeItemHandler = (key: string) => {
    let tempArray = [...itemArray];
    tempArray=tempArray?.filter(item => item?.key !== key);
    setItemArray(tempArray);
  }

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-dark font-bold text-2xl'>Items List</h1>
      {
        itemArray?.map(( {name,price,quantity,key,total} ) =>
          <div key={key} className='grid grid-cols-12 gap-2'>
            <div className='col-span-5'>
              <Input
                type='text'
                label='Item Name'
                touched={false}
                error=''
                disabled={false}
                value={name}
              />
            </div>
            <div className='col-span-2'>
              <Input
                type='text'
                label='Qty'
                touched={false}
                error=''
                disabled={false}
                value={price}
              />
            </div>
            <div className='col-span-2'>
              <Input
                type='text'
                label='Price'
                touched={false}
                error=''
                disabled={false}
                value={quantity}
              />
            </div>
            <div className='col-span-2'>
              <Input
                type='text'
                label='Total'
                touched={false}
                error=''
                disabled={true}
                value={total?.toString()}
              />
            </div>
            <div
              className='col-span-1 cursor-pointer self-center ml-auto'
              onClick={() => removeItemHandler(key)}
            >
              <label className='invisible'>Delete</label>
              <DeleteIcon/>
            </div>
          </div>
        )
      }
          <div className='grid grid-cols-12 gap-2'>
            <div className='col-span-5'>
              <Input
                type='text'
                label='Item Name'
                touched={touched?.name}
                error={errors?.name}
                disabled={false}
                value={values?.name}
                onChange={handleChange('name')}
              />
            </div>
            <div className='col-span-2'>
              <Input
                type='text'
                label='Qty'
                touched={touched?.quantity}
                error={errors?.quantity}
                disabled={false}
                value={values?.quantity}
                onChange={handleChange('quantity')}
              />
            </div>
            <div className='col-span-2'>
              <Input
                type='text'
                label='Price'
                touched={touched?.price}
                error={errors?.price}
                disabled={false}
                value={values?.price}
                onChange={handleChange('price')}
              />
            </div>
            <div className='col-span-2'>
              <Input
                type='text'
                label='Total'
                touched={false}
                error=''
                disabled={true}
                value={getTotalPrice(values?.price,values?.quantity)}
              />
            </div>
            <div className='col-span-1 cursor-pointer self-center ml-auto opacity-50 pointer-events-none' onClick={ () => removeItemHandler(item) }>
              <label className='invisible'>Delete</label>
              <DeleteIcon/>
            </div>
          </div>
      <Button
        type='button'
        variant='primary'
        size=''
        text='+ Add Item'
        onClick={handleSubmit}
      />
      
     </div>
  )
}
