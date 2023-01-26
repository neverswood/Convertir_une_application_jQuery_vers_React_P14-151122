import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateEmployee } from './CreateEmployee';
import './HomePage.scss';

export function HomePage() {
  const navigate = useNavigate();

  function ChangePage() {
    navigate('/employee');
  }
  return (
    <div className="homePage">
      <div className="homePage__view">
        <h1>HRnet</h1>
        <button
          className="button"
          onClick={ChangePage}
          aria-label="button navigate"
        >
          View Current Employees
        </button>
      </div>
      <div className="homePage__form">
        <CreateEmployee />
      </div>
    </div>
  );
}
