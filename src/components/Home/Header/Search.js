import React, { useContext } from 'react'
import { EmployeeContext } from 'global/EmployeeContext';

function Search() {

  const { employee, setEmployee, gender, setGender, search, setSearch } = useContext(EmployeeContext);


  const handleSearch = (event) => {
    setSearch(event.target.value);
    event.preventDefault();
  };

  return (
    <div className="row">
      <div className="app">
        <input type="text" placeholder="Search...." className="search" onChange={handleSearch}></input> 
      </div>
    </div>
  );
}

export default Search;
