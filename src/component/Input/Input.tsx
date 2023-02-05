import React, { ChangeEventHandler, MouseEventHandler } from 'react';

/**
 * This is a Input function
 * @param {string} inputName - The className of the div that surrounds the label and the input
 * @param {string} labelFor - The htmlFor in the label
 * @param {string} labelText - The text of the label
 * @param {string} type - The type of the input
 * @param {string} id - The id of the input
 * @param {string} placeholder - the placeholder of the input
 * @param {string} value - The value of the input
 * @param {ChangeEventHandler<HTMLInputElement>} onChange - The onChane of the input
 * @param {MouseEventHandler<HTMLElement>} click - The onClick of the input
 */

type InputProps = {
  inputName: string;
  labelFor: string;
  labelText: string;
  type: string;
  id: string;
  placeholder: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  click?: MouseEventHandler<HTMLElement>;
};

export function Input({
  inputName,
  labelFor,
  labelText,
  type,
  id,
  placeholder,
  value,
  onChange,
  click,
}: InputProps) {
  return (
    <React.Fragment>
      <div className={inputName}>
        <label htmlFor={labelFor}>{labelText}</label>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onClick={click}
        ></input>
      </div>
    </React.Fragment>
  );
}
