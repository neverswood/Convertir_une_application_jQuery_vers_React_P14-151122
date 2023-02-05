import { ChangeEventHandler } from 'react';
import { Input } from '../../component/Input/Input';

/**
 * This is a function searchBar
 * @param {ChangeEventHandler<HTMLInputElement>} change - The props to onChange
 */

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
        inputName="search"
        labelFor="Search"
        labelText="Search: "
        onChange={change}
      ></Input>
    </div>
  );
}
