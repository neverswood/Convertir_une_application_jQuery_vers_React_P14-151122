import { useState, useEffect, MouseEvent, MouseEventHandler } from 'react';
import './Dropdown.scss';

type DropdownProps = {
  placeholder: string;
  options: Array<string>;
  label: string;
  className: string;
  value: string;
  onClick: MouseEventHandler<HTMLElement>;
};

export function Dropdown({
  placeholder,
  options,
  label,
  className,
  value,
  onClick,
}: DropdownProps) {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handler = () => setShowMenu(false);
    window.addEventListener('click', handler);
    return () => {
      window.removeEventListener('click', handler);
    };
  });

  const handleInputClick = (e: MouseEvent) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  return (
    <div className={`dropdown-container dropdown-container__${className}`}>
      <label htmlFor="label">{label}</label>
      <div onClick={handleInputClick} className="dropdown-input">
        {!value ? (
          <div className="dropdown-input__placeholder">{placeholder}</div>
        ) : (
          <div className="dropdown-selected-value" data-value={value}>
            {value}
          </div>
        )}
        {showMenu && (
          <ul className="dropdown-menu">
            {options.map((option) => (
              <li key={option} className="dropdown-item" onClick={onClick}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
