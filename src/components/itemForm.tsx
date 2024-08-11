import { useState } from 'react';
import { Input } from './input';
import { DeleteIcon } from '@svg';
import { Button } from './button';

export const ItemForm = () => {
  const [itemList, setItemList] = useState([1]);
  const addItemHandler = () => setItemList([...itemList, itemList[itemList?.length-1]+1]);
  const removeItemHandler = (itemToRemove:number) => {
    setItemList(prevItems => prevItems.filter(item => item !== itemToRemove));
  }
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-dark font-bold text-2xl'>Items List</h1>
      {
        itemList?.map(( item ) =>
          <div key={item} className='grid grid-cols-12 gap-2'>
            <div className='col-span-5'>
              <Input
                type='text'
                label='Item Name'
                touched={false}
                error=''
                disabled={false}
              />
            </div>
            <div className='col-span-2'>
              <Input
                type='text'
                label='Qty'
                touched={false}
                error=''
                disabled={false}
              />
            </div>
            <div className='col-span-2'>
              <Input
                type='text'
                label='Price'
                touched={false}
                error=''
                disabled={false}
              />
            </div>
            <div className='col-span-2'>
              <Input
                type='text'
                label='Total'
                touched={false}
                error=''
                disabled={true}
              />
            </div>
            <div className={`col-span-1 cursor-pointer self-center ml-auto ${itemList?.length <= 1 && 'opacity-50 pointer-events-none'}`} onClick={ () => removeItemHandler(item) }>
              <label className='invisible'>Delete</label>
              <DeleteIcon/>
            </div>
          </div>
        )
      }
      <Button
        variant='primary'
        size=''
        text='+ Add Item'
        onClick={addItemHandler}
      />
      
     </div>
  )
}
