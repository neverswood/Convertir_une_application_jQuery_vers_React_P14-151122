import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './page/HomePage/HomePage';
import { EmployeeListPage } from './page/EmployeeListPage/EmployeeListPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="employee" element={<EmployeeListPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
