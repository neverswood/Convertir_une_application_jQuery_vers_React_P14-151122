import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './features/EmployeeSlice';

export type State = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  startDate: string;
  state: string;
  street: string;
  city: string;
  zipCode: number;
  department: string;
};

export const store = configureStore({
  reducer: {
    employeeReducer,
  },
});
