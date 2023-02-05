import { ReactNode } from 'react';
import Select, { ActionMeta } from 'react-select';
import './SelectOption.scss';

/**
 * This is a function searchBar
 * @param {string} placeholder - The placeholder of the select
 * @param {Array<{ label: string; value: string }>} options - The options for the select
 * @param {string} label - The htmlFor in the label
 * @param {string} className - The className of the div that surrounds the label and the select
 * @param {any} value - The value of the select
 * @param {ReactNode} children - The children of the select
 * @param {((newValue: any, actionMeta: ActionMeta<any>) => void) | undefined} onClick - The onChange of the select
 */

type SelectOptionProps = {
  placeholder: string;
  options: { label: string; value: string }[];
  label: string;
  className: string;
  value: any;
  children: ReactNode;
  onClick?: ((newValue: any, actionMeta: ActionMeta<any>) => void) | undefined;
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
