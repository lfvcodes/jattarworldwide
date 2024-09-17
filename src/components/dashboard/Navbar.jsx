import React from "react";
import searchDash from "../../img/searchDash.png";
import iconEnvelope from "../../img/Envelope.png";
import iconBell from "../../img/Bell.png";
import iconTable from "../../img/Table.png";
import iconUser from "../../img/dashUser.png";
import iconQuestion from "../../img/dashQuestion.png";
import iconGear from "../../img/dashGear.png";
import iconLogout from "../../img/dashSignOut.png";
import userAvatar from "../../img/userAvatar.png";
import iconImage from "../../img/dashWork.png";

const Navbar = () => {
  return (
    <div className="row">
      <div className="col">
        <h2>Hi Hello</h2>
        <p>
          Lorem ipsum es el texto que se usa habitualmente en diseño gráfico
        </p>
      </div>

      <div className="col">
        <div className="bg-white rounded-pill row p-3">
          <div className="col bg-light rounded-start-cell rounded-end-cell d-flex">
            <img
              className="m-auto"
              src={searchDash}
              width={28}
              height={28}
              alt="Search"
            />
            <input
              type="text"
              placeholder=""
              className="form-control border-0 bg-light"
            />
          </div>
          <div className="col text-end border-end">
            <button className="btn btn-sm">
              <img src={iconBell} width={26} height={26} alt="Notifications" />
            </button>
            <button className="btn btn-sm">
              <img src={iconEnvelope} width={26} height={26} alt="Messages" />
            </button>
            <button className="btn btn-sm">
              <img src={iconTable} width={26} height={26} alt="Tables" />
            </button>
          </div>
          <div className="col ms-2 bg-light rounded-start-cell rounded-end-cell d-flex">
            <div className="btn-group w-100" style={{ position: "relative" }}>
              <button
                type="button"
                className="btn text-primary text-center m-auto dropdown-toggle flex-grow-1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  className="me-2"
                  src={userAvatar}
                  width={30}
                  height={30}
                  alt="User Avatar"
                />
                USER
              </button>
              <ul
                className="dropdown-menu mt-4 border-0 shadow-lg rounded-4"
                style={{ width: "100%", minWidth: "auto" }}
              >
                <li>
                  <div className="card rounded-4 m-2 p-0">
                    <div className="m-2 text-center">
                      <img src={iconImage} width={60} height={60} />
                      <h6>Work Name</h6>
                      <small>business sector</small>
                    </div>
                    <div className="card-body text-center p-1">
                      <small>Assigned number:</small>
                      <br></br>
                      <small className="fw-bold"> +1 (829) 123-0456</small>
                    </div>
                  </div>
                </li>
                <li>
                  <a className="dropdown-item d-flex" href="#">
                    <img src={iconUser} />
                    My Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item d-flex" href="#">
                    <img src={iconQuestion} />
                    Support
                  </a>
                </li>
                <li>
                  <a className="dropdown-item d-flex" href="#">
                    <img src={iconGear} />
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item d-flex" href="/Login">
                    <img src={iconLogout} />
                    LogOut
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
