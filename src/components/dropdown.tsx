
import { CarrotIcon } from '@svg';
import { useState } from 'react';

type DropdownProps= {
    label: string;
    placeholder: string;
    selectedValue: string;
    setSelectedValue: (value:string, name:string)=>void;
    dropdownList: string[];
    touched: boolean | undefined;
    error: string | undefined;
    name: string;
}

export const Dropdown = ({ label, touched, error, placeholder, selectedValue, setSelectedValue, dropdownList, name }: DropdownProps) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const textColor = selectedValue ? 'text-dark' : 'text-placeholder';
    const selectValueHandler = (value: string) => { 
        setSelectedValue(name, value)
        setShowDropdown(false);
    }
    return (
      <div className="flex flex-col gap-1.5 relative">
          <label className='text-sm font-medium text-secondary'>{label}</label>
          <div
              className={`relative text-base ${textColor} flex h-10 w-full rounded-lg border border-border bg-light py-[10px] px-[14px] leading-5 cursor-pointer`}
              onClick={() => setShowDropdown(!showDropdown)}
            >
                {selectedValue || placeholder}
                <div className='absolute carrot-icon'>
                    <CarrotIcon/>
                </div>
                
          </div>
          {touched && error ? (
              <p className="text-sm text-redPrimary">{error}</p>
          ) : null}
          {showDropdown &&
              <div
                  className='absolute bg-light border-[1px] border-borderSecondary rounded-xl w-full top-full-10 cursor-pointer shadow-xl'>
                  {dropdownList?.map((ele) =>
                      <div
                          className={`text-darkSecondary text-sm hover:bg-hover px-4 py-2.5 ${selectedValue === ele ? 'font-medium' : 'font-normal'}`}
                          onClick={() => selectValueHandler(ele)} key={ele}>
                        {ele}
                    </div>
                  )}
              </div>
          }
    </div>
  );
}