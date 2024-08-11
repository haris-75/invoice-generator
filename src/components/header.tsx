import { Button } from './button'

export const Header=()=> {
  return (
    <div className='py-7 w-full flex justify-between'>
      <div>
        <h1 className="text-dark font-medium text-3xl">New Invoice</h1>
        <p className="text-placeholder font-normal text-base">Create new invoice for your customers</p>
      </div>
      <div className='flex gap-[12px]'>
        <div>
          <Button
            variant='secondary'
            size='sm'
            text='Reset'
            onClick={() => null}
          />
        </div>
        <div>
          <Button
            variant='primary'
            size='sm'
            text='Save'
            onClick={() => null}
          />
        </div>
      
      </div>
    </div>
  )
}
