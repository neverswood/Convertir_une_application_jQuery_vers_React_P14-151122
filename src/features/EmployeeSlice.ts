import { createSlice } from '@reduxjs/toolkit';

type InitialStateProps = {
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

const initialState: InitialStateProps = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  startDate: '',
  state: '',
  street: '',
  city: '',
  zipCode: 0,
  department: '',
};

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    setProfile: (state, action) => {
      console.log('dep', action.payload.department);
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.dateOfBirth = action.payload.dateOfBirth;
      state.startDate = action.payload.startDate;
      state.department = action.payload.department;
    },
    setAdress: (state, action) => {
      console.log('state', action.payload.state);

      state.state = action.payload.state;
      state.street = action.payload.street;
      state.city = action.payload.city;
      state.zipCode = action.payload.zipCode;
    },
  },
});

export const { setProfile, setAdress } = employeeSlice.actions;
export default employeeSlice.reducer;
