import { ChangeEvent, useEffect } from 'react';

type InputProps = {
  type: string;
  label: string;
  touched: boolean | undefined;
  error: string | undefined;
  disabled?: boolean;
  value: string | number;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ type, label, touched, error, disabled = false, onChange,value }: InputProps) => {
  useEffect(()=>{},[])
  return (
    <div className="flex flex-col gap-1.5">
      <label className='text-sm font-medium text-secondary'>{label}</label>
      <input
        type={type}
        className="text-base text-dark flex h-10 w-full rounded-lg border border-border bg-light py-[10px] px-[14px] placeholder:text-placeholder focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        disabled={disabled}
        onChange={onChange}
        value={value}
         />
      {touched && error ? (
        <p className="text-sm text-redPrimary">{error}</p>
      ) : null}
    </div>
  );
}