import { Input } from '../../component/Input/Input';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal-emmanuellets';
import React from 'react';
import './CreateEmployee.scss';
import { SelectOption } from '../../component/SelectOption/SelectOption';
import { states } from './StateOptions';
import DatePicker from 'react-date-picker';
import { departments } from './DepartmentOptions';
import { setProfile } from '../../features/EmployeeSlice';

export function CreateEmployee() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [department, setDepartment] = useState('');
  const [state, setState] = useState({ name: '', value: '' });
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState<Map<string, string>>(new Map());
  const hideModal = () => showModal && setShowModal(false);
  const dispatch = useDispatch();

  const data = {
    first_name: firstName,
    last_name: lastName,
    date_of_birth: dateOfBirth.toLocaleDateString(),
    start_date: startDate.toLocaleDateString(),
    department: department,
    street: street,
    city: city,
    zip_code: zipCode,
    state: state.value,
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let newError = new Map(error);

    if (firstName.length < 2) {
      newError.set('firstName', 'error first name');
    } else {
      newError.delete('firstName');
    }
    if (lastName.length < 2) {
      newError.set('lastName', 'error last name');
    } else {
      newError.delete('lastName');
    }
    if (new Date().getFullYear() - 18 < dateOfBirth.getFullYear()) {
      newError.set('dateOfBirth', 'error date of birth');
    } else {
      newError.delete('dateOfBirth');
    }
    if (startDate.getDay() === new Date().getDay()) {
      newError.set('startDate', 'error start date');
    } else {
      newError.delete('startDate');
    }
    if (state.name === '') {
      newError.set('state', 'error state');
    } else {
      newError.delete('state');
    }
    if (street.length < 2) {
      newError.set('street', 'error street');
    } else {
      newError.delete('street');
    }
    if (city.length < 2) {
      newError.set('city', 'error city');
    } else {
      newError.delete('city');
    }
    if (zipCode.length < 5) {
      newError.set('zipCode', 'error zip code');
    } else {
      newError.delete('zipCode');
    }
    if (department === '') {
      newError.set('department', 'error department');
    } else {
      newError.delete('department');
    }
    setError(newError);
    if (newError.size === 0) {
      setShowModal(!showModal);
      localStorage.setItem('data', JSON.stringify(data));
      dispatch(setProfile(JSON.parse(localStorage.getItem('data') || '{}')));
    }
  };

  return (
    <React.Fragment>
      <form onSubmit={onSubmit}>
        <fieldset className="create-employee">
          <legend className="create-employee__legend">Create Employee</legend>
          <div className="create-employee__form">
            <div className="information">
              <Input
                inputName="input-wrapper"
                labelFor="firstName"
                labelText="First Name"
                type="text"
                id="firstName"
                placeholder=" Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {error.has('firstName') === true ? (
                <div className="errorMessage">
                  Please enter at least 2 characters
                </div>
              ) : (
                ''
              )}

              <Input
                inputName="input-wrapper"
                labelFor="lastName"
                labelText="Last Name"
                type="text"
                id="lastName"
                placeholder=" Enter your lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {error.has('lastName') ? (
                <div className="errorMessage">
                  Please enter at least 2 characters
                </div>
              ) : (
                ''
              )}

              <div className="calendar">
                <label htmlFor="date" className="date">
                  Date Of Birth
                </label>
                <DatePicker
                  onChange={setDateOfBirth}
                  value={dateOfBirth}
                  clearIcon={null}
                  format="dd-MM-y"
                  className="calendar-popper"
                  required={true}
                  maxDate={
                    new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 6574)
                  }
                />
                {error.has('dateOfBirth') ? (
                  <div className="errorMessage">Please enter a valid date</div>
                ) : (
                  ''
                )}
              </div>
              <div className="calendar">
                <label htmlFor="date" className="date">
                  Start Date
                </label>
                <DatePicker
                  onChange={setStartDate}
                  value={startDate}
                  clearIcon={null}
                  format=" dd-MM-y "
                  maxDate={new Date()}
                />
                {error.has('startDate') ? (
                  <div className="errorMessage">Please enter a valid date</div>
                ) : (
                  ''
                )}
              </div>
              <SelectOption
                value={department}
                className="departments"
                label="Department"
                placeholder="Sales"
                options={departments}
                onClick={(e: any) => {
                  setDepartment(e.value);
                }}
                children={
                  error.has('department') ? (
                    <div className="errorMessage">
                      Please choose a department
                    </div>
                  ) : (
                    ''
                  )
                }
              ></SelectOption>
            </div>
            <div className="adress">
              <fieldset className="adress__fieldset">
                <legend className="adress__legend">Adress</legend>
                <SelectOption
                  value={state.name}
                  className="states"
                  label="State"
                  placeholder="Alabama"
                  options={states}
                  onClick={(e: any) => {
                    setState({
                      name: e.label,
                      value: e.value,
                    });
                  }}
                  children={
                    error.has('state') ? (
                      <div className="errorMessage">Please choose a state</div>
                    ) : (
                      ''
                    )
                  }
                ></SelectOption>
                <Input
                  inputName="input-wrapper"
                  labelFor="street"
                  labelText="Street"
                  type="text"
                  id="street"
                  placeholder=" Enter your street"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
                {error.has('street') ? (
                  <div className="errorMessage">
                    Please enter at least 2 characters
                  </div>
                ) : (
                  ''
                )}
                <Input
                  inputName="input-wrapper"
                  labelFor="city"
                  labelText="City"
                  type="text"
                  id="city"
                  placeholder=" Enter your city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                {error.has('city') ? (
                  <div className="errorMessage">
                    Please enter at least 2 characters
                  </div>
                ) : (
                  ''
                )}
                <Input
                  inputName="input-wrapper"
                  labelFor="zipCode"
                  labelText="Zip Code"
                  type="number"
                  id="zipCode"
                  placeholder=" Enter your zip code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                />
                {error.has('zipCode') ? (
                  <div className="errorMessage">
                    Please enter at least 5 numbers
                  </div>
                ) : (
                  ''
                )}
              </fieldset>
            </div>
          </div>
          <button
            type="submit"
            className="btn-submit button"
            aria-label="button form"
          >
            Save
          </button>
        </fieldset>
      </form>
      <Modal show={showModal} onClickCloseBtn={hideModal}>
        Employee Created!
      </Modal>
    </React.Fragment>
  );
}
