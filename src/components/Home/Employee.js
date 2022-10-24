import React, { useContext } from 'react';
import { EmployeeContext } from 'global/EmployeeContext';
import { Link } from 'react-router-dom';


function Employee() {
  const { employee } = useContext(EmployeeContext);

  console.log(employee);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-8 col-lg-5">
          <h6 className="text-muted">Employee with Images</h6>
          <ul className="users list-group">
            {employee.map((user) => (
              <li
                key={user.id.value}
                className="user list-group-item d-flex justify-content-between align-items-center"
              >
                {' '}
                <ul className="users list-group">
                <h4>  {user.name.title+' '+user.name.first +' '+user.name.last} <span className="badge bg-secondary">{user.gender}</span></h4>
                  <li className="flex-column">
                    <p>
                      <small>{user.email}</small>
                    </p>
                    <p>
                      <small>{user.id.value}</small>
                    </p>
                    <p>
                      <small>{user.cell}</small>
                    </p>
                    <p>
                      <small>{user.email}</small>
                    </p>
                    <p>
                      <small ><Link to={user.id.value} target="_blank"><button>More Info</button></Link></small>
                    </p>
                  </li>
                  
                </ul>
                <div className="image-parent">
                  <img src={user.picture.thumbnail} className="img-fluid" alt="quixote" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Employee;
