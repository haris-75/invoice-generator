import { Item } from './itemForm';

export function PreviewItems({ itemArray }: { itemArray: Item[] }) {
    const subTotal = itemArray?.map(({ total }) =>
        (total))?.reduce((accumulator, currentValue) =>
        { return accumulator + currentValue }, 0);
    const grandTotal = subTotal + (subTotal * 0.1);
    return (
        <div>
            <div className='py-4 border-b-[1px] border-border'>
                <div className='grid grid-cols-4'>
                    <div className='col-span-1 py-2 bg-lightSecondary rounded-l'>
                        <span className='text-base font-normal text-gray py-2 ml-4 '>Item</span>
                    </div>
                    <div className='col-span-1 py-2 bg-lightSecondary'>
                        <span className='text-base font-normal text-gray py-2'>Qty.</span>
                    </div>
                    <div className='col-span-1 py-2 bg-lightSecondary'>
                        <span className='text-base font-normal text-gray py-2'>Price</span>
                    </div>
                    <div className='col-span-1 py-2 bg-lightSecondary rounded-r'>
                        <span className='text-base font-normal text-gray py-2'>Total Amount</span>
                    </div>
                </div>
            {
                itemArray?.map(({name,price,quantity,key,total}) =>
                    <div key={key} className='grid grid-cols-4'>
                        <div className='col-span-1 py-2 rounded-l'>
                            <span className='text-base font-medium text-dark py-2 ml-4 '>{name}</span>
                        </div>
                        <div className='col-span-1 py-2'>
                            <span className='text-base font-medium text-dark py-2'>{ quantity }</span>
                        </div>
                        <div className='col-span-1 py-2'>
                            <span className='text-base font-medium text-dark py-2'>{`$ ${price}`}</span>
                        </div>
                        <div className='col-span-1 py-2 rounded-r'>
                            <span className='text-base font-medium text-dark py-2'>{`$ ${total}`}</span>
                        </div>
                    </div>
                )
            }
            </div>
            <div className='py-4 grid grid-cols-2 gap-4 items-end'>
              <div className='col-span-1'/>           
              <div className='col-span-1 flex justify-between'>
                  <span className='text-base font-bold text-dark'>Subtotal</span>
                  <span className='text-base font-bold text-dark'>{`$ ${subTotal}`}</span>
              </div>
              <div className='col-span-1'/>   
              <div className='col-span-1 flex justify-between'>
                  <span className='text-base font-bold text-dark'>Tax</span>
                  <span className='text-base font-bold text-dark'>10%</span>
              </div>
              <div className='col-span-1'/>   
              <div className='col-span-1 flex justify-between'>
                  <span className='text-xl font-bold text-dark'>Total</span>
                  <span className='text-xl font-bold text-dark'>{`$ ${grandTotal}`}</span>
                </div>
            </div>    
      </div>
  )
}
