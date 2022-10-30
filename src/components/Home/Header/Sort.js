import React, { useContext } from 'react';
import { EmployeeContext } from 'global/EmployeeContext';

function Sort() {

  // To subscribe to the employee context API for employee data. 
  const {setGender } = useContext(EmployeeContext);


  // To handle the user's gender select option 
  const handleSort = (event) => {
    setGender(event.target.value);
    event.preventDefault();
  };

  return (
    <div className="col">
      <form>
        <div className="">
          <select className="form-select" onChange={handleSort}>
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
