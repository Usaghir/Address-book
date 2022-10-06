import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const EmployeeContext = createContext();

const EmployeeProvider = (props) => {
  const [employee, setEmployee] = useState([]);
  const [loading, setLoading] = useState([]);


  
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then(results => results.json())
      .then(data => {
        console.log(data.results)
        setEmployee(data.results);
       
      });
  }, []); 

  return (
    <EmployeeContext.Provider value={!employee ? 'Loading': { employee: [ ...employee ] }}>
      {props.children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeProvider;
