import React, { ChangeEventHandler, MouseEventHandler } from 'react';

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
