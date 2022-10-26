import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const EmployeeContext = createContext();

const EmployeeProvider = (props) => {
  const [employee, setEmployee] = useState([]);
  const [search, setSearch] = useState('');
  const [gender, setGender] = useState('all');

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5&seed=abc')
      .then((results) => results.json())
      .then((data) => {
        console.log(data.results);

        if (gender === 'all' && search === '') {
          setEmployee(data.results);
        } else if (gender === 'all' && search !== '') {
          setEmployee(
            data.results.filter((data) => data.name.title.toLowerCase().includes(search)),
          );
        } else if (gender !== 'all' && search === '') {
          setEmployee(
            data.results.filter((data) => data.gender === gender),
          );
        } else if (gender !== 'all' && search !== '') {

          var filterGender = data.results.filter((data) => data.gender === gender); 
          var filterGenderSearch = filterGender;

          setEmployee(
            filterGender
          );
        }
        /*    setEmployee(data.results);
        gender === 'all'
          ? setEmployee(data.results)
          : setEmployee(data.results.filter((data) => data.gender === gender));
        search === ' ' && gender === 'all'
          ? setEmployee(data.results)
          : setEmployee(
              data.results.filter((data) => data.name.title.toLowerCase().includes(search)),
            ); */
      });
  }, [gender, search]);

  return (
    <EmployeeContext.Provider
      value={{ employee, setEmployee, gender, setGender, search, setSearch }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeProvider;
