import { MouseEventHandler, ReactNode } from 'react';
import Select from 'react-select';
import './SelectOption.scss';

type SelectOptionProps = {
  placeholder: string;
  options: Array<{ label: string; value: string }>;
  optionsValue?: string;
  option?: string;
  label: string;
  className: string;
  value: any;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLElement>;
};

export function SelectOption({
  placeholder,
  options,
  label,
  className,
  value,
  children,
  onClick,
}: SelectOptionProps) {
  return (
    <div className={`options-container options-container__${className}`}>
      <label htmlFor="label" aria-label="select-option">
        {label}
      </label>
      <Select
        options={options}
        value={value}
        placeholder={!value ? placeholder : value}
        onChange={onClick}
      />
      <div id="errorMessage">{children}</div>
    </div>
  );
}
