import { ChangeEventHandler } from 'react';
import { Input } from '../../component/Input/Input';

export function SearchBar({
  change,
}: {
  change: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <div>
      <Input
        type="search"
        id="search-bar"
        placeholder=""
        inputName="Search"
        labelFor="Search"
        labelText="Search"
        onChange={change}
      ></Input>
      <button type="button" id="btnSearch" title="btnSearch">
        <span>
          <i className="fas fa-search"></i>
        </span>
      </button>
    </div>
  );
}
