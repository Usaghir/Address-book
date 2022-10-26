import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Employee from 'components/Home/Employee';
import Header from './Home/Header';
import { EmployeeContext } from 'global/EmployeeContext';

function Home() {

 


  return (
    <div>
      <Header  ></Header>
      <Employee></Employee>
      <Link to="/Profile">
        <button className="btn font-bebas" style={{ background: '#318fb5' }}>
          Profile
        </button>
      </Link>
    </div>
  );
}

export default Home;
