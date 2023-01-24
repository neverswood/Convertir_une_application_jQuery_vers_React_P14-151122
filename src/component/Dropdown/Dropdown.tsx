import {
  useState,
  useEffect,
  MouseEvent,
  MouseEventHandler,
  ReactNode,
} from 'react';
import './Dropdown.scss';

type DropdownProps = {
  placeholder: string;
  options: Array<{ name: string; value: string }>;
  optionsValue?: string;
  option?: string;
  label: string;
  className: string;
  value: any;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLElement>;
};

export function Dropdown({
  placeholder,
  options,
  label,
  className,
  value,
  children,
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
          <div className="dropdown-selected-value">{value}</div>
        )}
        {showMenu && (
          <ul className="dropdown-menu">
            {options.map((option: { name: string; value: string }) => (
              <li
                key={option.name}
                className="dropdown-item"
                onClick={onClick}
                value={option.value}
              >
                {option.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div id="errorMessage">{children}</div>
    </div>
  );
}
