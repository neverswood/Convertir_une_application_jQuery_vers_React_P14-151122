import { createSlice } from '@reduxjs/toolkit';
import { State } from '../Store';

type InitialStateProps = {
  employees: [];
};
/*
[{
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  startDate: string;
  state: string;
  street: string;
  city: string;
  zipCode: number;
  department: string;
}]*/

const initialState: InitialStateProps = {
  employees: [],
};
/*[
{
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  startDate: '',
  state: '',
  street: '',
  city: '',
  zipCode: 0,
  department: '',
}]*/

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    setProfile: (state, action) => {
      console.log('slice', action.payload);
      state.employees = action.payload;
    },
  },
});

export const { setProfile } = employeeSlice.actions;
export const employeesList = (state: State) => state.employees;
export default employeeSlice.reducer;

/*      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.dateOfBirth = action.payload.dateOfBirth;
      state.startDate = action.payload.startDate;
      state.department = action.payload.department;
      state.state = action.payload.state;
      state.street = action.payload.street;
      state.city = action.payload.city;
      state.zipCode = action.payload.zipCode;
    },*/
