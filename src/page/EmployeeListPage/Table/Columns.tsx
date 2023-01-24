import '../Table.scss';

export const COLUMNS = [
  {
    name: 'First Name',
    selector: (row: any) => row.first_name,
    id: 'first_name',
    width: '155px',
    sortable: true,
  },
  {
    name: 'Last Name',
    selector: (row: any) => row.last_name,
    id: 'last_name',
    width: '155px',
    sortable: true,
  },
  {
    name: 'Start Date',
    selector: (row: any) => row.start_date,
    width: '100px',
    sortable: true,
  },

  {
    name: 'Department',
    selector: (row: any) => row.department,
    id: 'department',
    width: '150px',
    sortable: true,
  },
  {
    name: 'Date of Birth',
    selector: (row: any) => row.date_of_birth,
    width: '115px',
    sortable: true,
  },
  {
    name: 'Street',
    selector: (row: any) => row.street,
    id: 'street',
    width: '196px',
    sortable: true,
  },
  {
    name: 'City',
    selector: (row: any) => row.city,
    width: '200px',
    sortable: true,
  },
  {
    name: 'State',
    selector: (row: any) => row.state,
    id: 'state',
    width: '196px',
    sortable: true,
  },
  {
    name: 'Zip Code',
    selector: (row: any) => row.zip_code,
    id: 'zip_code',
    width: '86px',
    sortable: true,
  },
];
