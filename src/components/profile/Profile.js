import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  EnvelopeFill,
  TelephoneFill,
  GeoAlt,
  PhoneFill,
  PersonBadgeFill,
} from 'react-bootstrap-icons';
import './Profile.css';
import axios from 'axios';
import Moment from 'react-moment';
import 'moment-timezone';

function Profile() {
  // To be used before the page will be loaded.
  const [isLoading, setIsLoading] = useState(true);

  // To display the error message.
  const [error, setError] = useState(null);

  // To store and update employees data.
  const [employee, setEmployee] = useState([]);

  // To get he url parameters.
  const { id } = useParams();

  useEffect(() => {
    // To call the API for fetching employee data on first render.
    const getEmployeeData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=10&seed=abc');
        console.log(response.data.results);
        setEmployee(response.data.results.filter((data) => data.cell === id)[0]);
      } catch (err) {
        const errorMessage = 'Error: ' + err.message;
        setError(errorMessage);
        console.log(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    getEmployeeData();
  }, [id]);

  // To overcome the empty page until data is fetched from API.
  if (isLoading) return 'Loading...';

  // To display the error.
  if (error) return error;

  return (
    <div>
      <div>
        <div className="container rounded bg-white mt-5 mb-5">
          <h2 className="text-right">Profile</h2>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                src={employee.picture.large}
                className="employee-img img-fluid mb-2"
                alt=""
              ></img>

              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <ul className="  list-unstyled">
                  <ul className="users list-group list-unstyled ms-5">
                    <li>
                      <h4 className="letterSpace fw-bold ml-0 pl-0 ">
                        {' '}
                        {employee.name.title +
                          ' ' +
                          employee.name.first +
                          ' ' +
                          employee.name.last}{' '}
                      </h4>
                    </li>
                    <li className=" text-start flex-column">
                      <p className="employeeID">
                        <small className="font-text">UUID: </small>
                        <small>{employee.login.uuid}</small>
                      </p>
                      <p>
                        <small className="m1-2">
                          <EnvelopeFill></EnvelopeFill>{' '}
                        </small>
                        <small>{employee.email}</small>
                      </p>

                      <p>
                        <small className="me-1">
                          <TelephoneFill></TelephoneFill>
                        </small>
                        <small>{employee.phone}</small>
                      </p>
                      <p>
                        <small className="me-1">
                          <PhoneFill></PhoneFill>
                        </small>
                        <small>{employee.cell}</small>
                      </p>
                      <p>
                        <small className="me-1">
                          <GeoAlt></GeoAlt>{' '}
                        </small>
                        <small>
                          {employee.location.street.name +
                            ' ' +
                            employee.location.street.number +
                            ' ' +
                            employee.location.postcode +
                            ', ' +
                            employee.location.city +
                            ', ' +
                            employee.location.country}
                        </small>
                      </p>
                      <p>
                        <small className="me-1 font-text">DOB:</small>
                        <small>
                          <Moment format="YYYY/MM/DD">{employee.dob.date}</Moment>
                        </small>
                        {' | '}
                        <small className=" font-text me-1">Age:</small>

                        <small>{employee.dob.age}</small>
                      </p>
                      <p>
                        <small className="me-1 font-text">Starting Date:</small>
                        <small>
                          {' '}
                          <Moment format="YYYY/MM/DD">{employee.registered.date}</Moment>
                        </small>
                      </p>
                    </li>
                  </ul>
                </ul>

                <div className="mt-5 text-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
