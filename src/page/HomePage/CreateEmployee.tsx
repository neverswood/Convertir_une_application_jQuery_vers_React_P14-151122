import { Input } from '../../component/Input/Input';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal-emmanuellets';
import React from 'react';
import './CreateEmployee.scss';
import { Dropdown } from '../../component/Dropdown/Dropdown';
import { states } from './StateOptions';
import DatePicker from 'react-date-picker';
import { departments } from './DepartmentOptions';
import { setAdress, setProfile } from '../../features/EmployeeSlice';

export function CreateEmployee() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [department, setDepartment] = useState('');
  const [state, setState] = useState('');
  const [showModal, setShowModal] = useState(false);
  const hideModal = () => showModal && setShowModal(false);
  const dispatch = useDispatch();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(!showModal);
    dispatch(
      setProfile({
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: dateOfBirth,
        startDate: startDate,
        department: department,
      })
    );
    dispatch(
      setAdress({
        street: street,
        city: city,
        zipCode: zipCode,
        state: state,
      })
    );
  };

  return (
    <React.Fragment>
      <form onSubmit={onSubmit}>
        <fieldset className="create-employee__fieldset">
          <legend className="create-employee__legend">Create Employee</legend>
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
            <div className="calendar">
              <label htmlFor="date" className="date">
                Date Of Birth
              </label>
              <DatePicker
                onChange={setDateOfBirth}
                value={dateOfBirth}
                clearIcon={null}
                format=" dd-MM-y "
              />
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
              />
            </div>
          </div>
          <div className="adress">
            <fieldset className="adress__fieldset">
              <legend className="adress__legend">Adress</legend>
              <Dropdown
                value={state}
                className="states"
                label="State"
                placeholder="Alabama"
                options={states.map((state) => state.name)}
                onClick={(e: any) => {
                  setState(e.currentTarget.textContent);
                }}
              ></Dropdown>
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
            </fieldset>
          </div>
          <Dropdown
            value={department}
            className="departments"
            label="Department"
            placeholder="Sales"
            options={departments.map((department) => department.name)}
            onClick={(e: any) => {
              setDepartment(e.currentTarget.textContent);
            }}
          ></Dropdown>
          <button type="submit" className="btn-submit">
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
