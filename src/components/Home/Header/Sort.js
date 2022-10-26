import React, { useContext } from 'react'
import { EmployeeContext } from 'global/EmployeeContext';


function Sort() {

  const { employee, setEmployee, gender, setGender } = useContext(EmployeeContext);

  const handleSort = (event) => {
    setGender(event.target.value);
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    setGender(event.target.value);
    event.preventDefault();
  };
  return (
    <div className="header-container">
      <form onSubmit={handleSubmit}>
        <div className="container p-5">
          <select className= 'form-select' onChange={handleSort}>
            <option value="all">All</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Sort;
