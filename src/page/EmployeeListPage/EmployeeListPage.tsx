import DataTable from 'react-data-table-component';
import { COLUMNS } from './Columns';
import { useSelector } from 'react-redux';
import { State } from '../../Store';
import './EmployeeList.scss';
import { SearchBar } from './SearchBar';
import { useState, useEffect, ChangeEvent } from 'react';
import { Employee } from '../../features/EmployeeSlice';
import { useNavigate } from 'react-router-dom';

const customStyles = {
  rows: {
    style: {
      minHeight: '30px',
      backgroundColor: 'rgb(245, 245, 245, 1)',
      overflow: 'hidden',
      maxWidth: '1400px',
    },
  },
  headCells: {
    style: {
      paddingLeft: '8px',
      paddingRight: '8px',
      height: '30px',
      maxHeigth: '30px',
    },
  },
  cells: {
    style: {
      paddingLeft: '8px',
      paddingRight: '8px',
      height: '30px',
      display: 'flex',
      maxWidth: '300px',
    },
  },
};

/**
 * Function to display the table with the list of employees and to sort this table with the searchbar.
 */

export function EmployeeListPage() {
  const navigate = useNavigate();
  const data = useSelector((state: State) => state.employees.data);
  const [newData, setNewData] = useState<object[]>([]);

  function ChangePage() {
    navigate('/');
  }

  useEffect(() => {
    setNewData(data);
  }, [data]);

  const filterEmployees = (e: ChangeEvent<HTMLInputElement>) => {
    const dataFiltered = data.filter((employee: Employee) => {
      return (
        employee.first_name
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        employee.last_name
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        employee.start_date
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        employee.department
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        employee.date_of_birth
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        employee.street.toLowerCase().includes(e.target.value.toLowerCase()) ||
        employee.city.toLowerCase().includes(e.target.value.toLowerCase()) ||
        employee.state.toLowerCase().includes(e.target.value.toLowerCase()) ||
        employee.zip_code.toString().includes(e.target.value.toLowerCase())
      );
    });
    setNewData(dataFiltered);
  };

  return (
    <div className="employeeList">
      <h1>Current Employees</h1>
      <button
        className="button"
        onClick={ChangePage}
        aria-label="button navigate"
      >
        Home
      </button>
      <SearchBar
        change={(e: ChangeEvent<HTMLInputElement>) => filterEmployees(e)}
      />
      <DataTable
        columns={COLUMNS}
        data={newData}
        customStyles={customStyles}
        persistTableHead={true}
        pagination={true}
        highlightOnHover={true}
        pointerOnHover={true}
        defaultSortAsc
        paginationDefaultPage={3}
      />
    </div>
  );
}
