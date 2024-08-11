import { Button } from './button'

type HeaderProps = {
  submitHandler: () => void;
  resetHandler: () => void;
}

export const Header=({submitHandler, resetHandler}:HeaderProps)=> {
  return (
    <div className='py-7 w-full flex justify-between'>
      <div>
        <h1 className="text-dark font-medium text-3xl">New Invoice</h1>
        <p className="text-placeholder font-normal text-base">Create new invoice for your customers</p>
      </div>
      <div className='flex gap-[12px]'>
        <div>
          <Button
            type='submit'
            variant='secondary'
            size='sm'
            text='Reset'
            onClick={resetHandler}
          />
        </div>
        <div>
          <Button
            type='submit'
            variant='primary'
            size='sm'
            text='Save'
            onClick={submitHandler}
          />
        </div>
      
      </div>
    </div>
  )
}
