import { createSlice } from '@reduxjs/toolkit';

type InitialStateProps = {
  data: Array<object>;
};

export type Employee = {
  first_name: string;
  last_name: string;
  date_of_birth: string;
  start_date: string;
  state: string;
  street: string;
  city: string;
  zip_code: number;
  department: string;
};

const initialState: InitialStateProps = {
  data: [],
};

export const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.data = [...state.data, action.payload];
    },
  },
});

export const { setProfile } = employeeSlice.actions;
export default employeeSlice.reducer;
