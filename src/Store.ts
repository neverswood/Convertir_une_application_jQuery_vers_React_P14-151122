import { configureStore } from '@reduxjs/toolkit';
import employeeReducer, { Employee } from './features/EmployeeSlice';

export type State = {
  employees: {
    data: Employee[];
  };
};

export const store = configureStore({
  reducer: {
    employees: employeeReducer,
  },
});
