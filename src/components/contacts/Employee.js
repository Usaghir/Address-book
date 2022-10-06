
import React, { useContext } from 'react';
import { EmployeeContext } from 'global/EmployeeContext';

function Employee() {

  const { employee } = useContext(EmployeeContext);

  console.log(employee);
  return (
    <ul className="users">
      {employee.map((user) => (
        <li  key={user.email} className="user">{user.email}</li>
      ))}
    </ul>
  )
}

export default Employee