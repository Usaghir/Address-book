import React, { useContext } from 'react';
import { EmployeeContext } from 'global/EmployeeContext';

function Search() {
  // To subscribe to the employee context API for employee data.
  const { setSearch } = useContext(EmployeeContext);

  // To handle the user's search.
  const handleSearch = (event) => {
    setSearch(event.target.value);
    event.preventDefault();
  };

  return (
    <div className="col ">
      <div className="">
        <input
          type="search"
          id="form1"
          className="form-control"
          placeholder="Please writhe the Employee name to find "
          aria-label="Search"
          onChange={handleSearch}
        ></input>
      </div>
    </div>
  );
}

export default Search;
