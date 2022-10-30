import React, { useContext } from 'react';
import { EmployeeContext } from 'global/EmployeeContext';
import { Link } from 'react-router-dom';
import { EnvelopeFill, TelephoneFill, GeoAlt } from 'react-bootstrap-icons';
import './Employee.css';
function Employee() {
  // To subscribe to the employee context API for employee data.
  const { employee } = useContext(EmployeeContext);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="  list-unstyled">
              {employee.map((user) => (
                <li
                  key={user.login.uuid}
                  className=" mb-3 mt-3 pt-3 pb-3 list-group-item d-flex justify-content-center align-items-center "
                >
                  <img
                    src={user.picture.large}
                    className="img-fluid employee-image "
                    alt="NotFound"
                  />

                  <ul className="users list-group list-unstyled ms-5">
                    <div>
                      <h4 className="letterSpace fw-bold ml-0 pl-0 ">
                        {' '}
                        {user.name.title + ' ' + user.name.first + ' ' + user.name.last}{' '}
                      </h4>
                      <span class="badge badge-secondary">Primary</span>
                    </div>
                    <li className=" text-start flex-column">
                      <p className="employeeID ">
                        <small className='font-text'>Employee Id: </small>
                        <small>{user.id.value}</small>
                      </p>
                      <p>
                        <small className="m1-2">
                          <EnvelopeFill></EnvelopeFill>{' '}
                        </small>
                        <small>{user.email}</small>
                      </p>

                      <p>
                        <small className="me-1">
                          <TelephoneFill></TelephoneFill>
                        </small>
                        <small>{user.phone}</small>
                      </p>
                      <p>
                        <small className="me-1">
                          <GeoAlt></GeoAlt>{' '}
                        </small>
                        <small>{user.location.country}</small>
                      </p>
                      <p>
                        <small className="me-1">
                          <Link to={user.cell} target="_blank">
                            <button>More Info</button>
                          </Link>
                        </small>
                      </p>
                    </li>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employee;
