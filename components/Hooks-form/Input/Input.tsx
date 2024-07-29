"use client"

import {
    FieldValues, 
    FieldErrors,
    UseFormRegister
} from 'react-hook-form';
import { cn } from '@/lib/utils';

interface InputProps {
    label: string,
    placeHolder: string,
    id: string,
    type?: string,
    required?: boolean,
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors,
    Disabled?: boolean
}
const Input: React.FC<InputProps> = (
    {
        label,
        id,
        placeHolder,
        type,
        required,
        register,
        errors,
        Disabled
    }
) => {
  return (
    <div>
      <label 
      className=' block text-sm text-light-1 font-medium leading-6'
      htmlFor={id}>
        {label}
      </label>
      <div className=" mt-2">
        <input 
        id={id} 
        type={type} 
        autoComplete={id} 
        disabled={Disabled} 
        placeholder={placeHolder}
        {...register(id, {required})}
        className={cn(`
        block
        w-full
        rounded-md
        border-0
        pl-4
        py-1.5
        text-gray-900
        shadow-sm
        ring-1
        ring-inset
        ring-gray-300
        placeholder:text-gray-400
        focus:ring-2
        focus:ring-inset
        sm:text-sm
        sm:leading-6`, 
        errors[id] && "focus:ring-rose-500",
        Disabled && " opacity-50 cursor-default"
        )}
        />
      </div>
    </div>
  )
}

export default Input