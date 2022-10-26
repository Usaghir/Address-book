import React, { useContext } from 'react';
import { EmployeeContext } from 'global/EmployeeContext';
import { useParams } from 'react-router-dom';
import './Profile.css';

function Profile() {
  const { id } = useParams();
  const { employee } = useContext(EmployeeContext);

  console.log(id);
  console.log(employee);
  return (
    <ul>
      {employee.map((user) =>
        user.id.value === { id } ? (
          <li key={user.login.uuid} className="page-content page-container" id="page-content">
            <div className="padding">
              <div className="row container d-flex justify-content-center">
                <div className="col-xl-6 col-md-12">
                  <div className="card user-card-full">
                    <div className="row m-l-0 m-r-0">
                      <div className="col-sm-4 bg-c-lite-green user-profile">
                        <div className="card-block text-center text-white">
                          <div className="m-b-25">
                            <img src="" className="img-fluid" alt="quixote" />
                          </div>
                          <h6 className="f-w-600">{user.name.first}</h6>
                          <p>{user.name.first}</p>
                          <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                        </div>
                      </div>
                      <div className="col-sm-8">
                        <div className="card-block">
                          <h6 className="m-b-20 p-b-5 b-b-default f-w-600">{user.name.first}</h6>
                          <div className="row">
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">{user.name.first}</p>
                              <h6 className="text-muted f-w-400">{user.name.first}</h6>
                            </div>
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">Phone</p>
                              <h6 className="text-muted f-w-400">98979989898</h6>
                            </div>
                          </div>
                          <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</h6>
                          <div className="row">
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">Recent</p>
                              <h6 className="text-muted f-w-400">Sam Disuja</h6>
                            </div>
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">Most Viewed</p>
                              <h6 className="text-muted f-w-400">Dinoter husainm</h6>
                            </div>
                          </div>
                          <ul className="social-link list-unstyled m-t-40 m-b-10">
                            <li>
                              <a
                                href="#!"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title=""
                                data-original-title="facebook"
                                data-abc="true"
                              >
                                <i
                                  className="mdi mdi-facebook feather icon-facebook facebook"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#!"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title=""
                                data-original-title="twitter"
                                data-abc="true"
                              >
                                <i
                                  className="mdi mdi-twitter feather icon-twitter twitter"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#!"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title=""
                                data-original-title="instagram"
                                data-abc="true"
                              >
                                <i
                                  className="mdi mdi-instagram feather icon-instagram instagram"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ) : (
          ' '
        ),
      )}
    </ul>
  );
}

export default Profile;
