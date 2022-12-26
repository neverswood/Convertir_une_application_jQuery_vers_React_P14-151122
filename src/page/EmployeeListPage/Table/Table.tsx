import { Column, useTable } from 'react-table';
import { COLUMNS } from './Columns';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../../Store';
import { employeesList } from '../../../features/EmployeeSlice';

type Employees = Array<{
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  startDate: string;
  state: string;
  street: string;
  city: string;
  zipCode: number;
  department: string;
}>;

export function Table() {
  const employee = useSelector((state: State) => state.employees);
  //const adress = useSelector((state: State) => state.adress);
  console.log('em', employee);

  const columns: Column[] = useMemo(() => COLUMNS, []);
  const data: Employees[] = useMemo(() => employee, [employee]);

  /* const options: TableOptions<data: {Header: string; accessor: string}> = {
    data, columns
  }*/
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });
  return (
    <div>
      <table {...getTableProps}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => (
                <td {...column.getFooterProps()}>{column.render('Footer')}</td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
}
