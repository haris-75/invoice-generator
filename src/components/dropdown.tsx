import { cn } from '@utils';
import { useState } from 'react';

type DropdownProps= {
    className: string;
    label: string;
    labelClass: string;
    placeholder: string;
    selectedValue: string;
    setSelectedValue: (value:string)=>void;
    dropdownList: string[];
    touched: boolean;
    error: string;
}

export const Dropdown = ({ className, label, labelClass, touched, error, placeholder, selectedValue,setSelectedValue, dropdownList }: DropdownProps) => {
    const [showDropdown, setShowDropdown] = useState(false)
  return (
    <div className="flex flex-col gap-1.5">
      <label className={labelClass}>{label}</label>
          <div
              className={cn("flex h-10 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",
                  className)}
              onClick={()=>setShowDropdown(!showDropdown)}
          >
              {selectedValue??placeholder}
          </div>
      {touched && error ? (
        <p className="text-sm text-redPrimary">{error}</p>
          ) : null}
          <div>
              {
                  dropdownList?.map((ele) => <div onClick={ ()=>setSelectedValue(ele)} key={ele}>{ ele}</div>)
              }
          </div>
    </div>
  );
}