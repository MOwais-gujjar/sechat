"use client";

import ReactSelect from 'react-select'
interface SelectProps {
  disabled?: boolean;
  label: any;
  value?: Record<string, any>[];
  onChange: (value: Record<string, any>) => void;
  option: Record<string, any>[];
}
const Select: React.FC<SelectProps> = ({
  disabled,
  label,
  value,
  onChange,
  option,
}) => {
  return (
    <div className=" z-[100]">
      <label
        className="
            block
            text-sm
            font-medium
            leading-6
            text-light-1
        "
      >
        Members
      </label>
      <div className="mt-2">
        <ReactSelect
            isDisabled={disabled}
            value={value}
            onChange={onChange}
            isMulti
            options={option}
            menuPortalTarget={document.body}
            styles={{
                menuPortal: (base) => ({
                    ...base,
                    zIndex: 9999,
                    color: 'black'
                })
            }}
            classNames={{
                control: () => "text-sm"
            }}
        />
      </div>
    </div>
  );
};

export default Select;
