import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './features/EmployeeSlice';

export type State = {
  employees: [];
};

export const store = configureStore({
  reducer: {
    employeeReducer,
  },
});
