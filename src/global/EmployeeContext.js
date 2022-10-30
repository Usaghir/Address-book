import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const EmployeeContext = createContext();

const EmployeeProvider = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [employee, setEmployee] = useState([]);
  const [search, setSearch] = useState('');
  const [gender, setGender] = useState('all');

  useEffect(() => {
    const getAllEmployeeData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=10&seed=abc');

        const employeeData = response.data.results;
      

        if (gender === 'all' && search === '') {
          setEmployee(employeeData);
        } else if (gender === 'all' && search !== '') {
          setEmployee(
            employeeData.filter(
              (data) =>
                data.name.first.toLowerCase().includes(search) ||
                data.name.last.toLowerCase().includes(search),
            ),
          );
        } else if (gender !== 'all' && search === '') {
          setEmployee(employeeData.filter((data) => data.gender === gender));
        } else if (gender !== 'all' && search !== '') {
          var filterGender = employeeData.filter((data) => data.gender === gender);
          var filterGenderSearch = filterGender.filter((data) =>
            data.name.first.toLowerCase().includes(search)||
            data.name.last.toLowerCase().includes(search),
          );

          setEmployee(filterGenderSearch);
        }
      } catch (err) {
        const errorMessage = 'Error: ' + err.message;
        setError(errorMessage);
        console.log(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    getAllEmployeeData();
  }, [gender, search]);

  if (isLoading) return 'Loading...';
  if (error) return error;

  return (
    <EmployeeContext.Provider
      value={{ employee, setEmployee, gender, setGender, search, setSearch }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeProvider;
