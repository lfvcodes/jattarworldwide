import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import brand from "../../img/logo_brand.png";
import microphone from "../../img/Microphone.png";
import gear from "../../img/Gear.png";
import phone from "../../img/Phone.png";
import user from "../../img/User.png";
import appWindow from "../../img/AppWindow.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="btn-sm border-0 text-start bg-transparent d-lg-none"
        onClick={toggleSidebar}
        style={{ margin: "10px" }}
      >
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="60" height="12"></rect>
          <rect y="30" width="60" height="12"></rect>
          <rect y="60" width="60" height="12"></rect>
        </svg>
      </button>

      <div
        className={`sidebar shadow-lg ${
          !isOpen && window.innerWidth < 992 ? "closed" : "open"
        }`}
      >
        <NavLink to="/Dashboard" activeClassName="active">
          <div className="sidebar-item">
            <img src={brand} alt="Brand Logo" />
          </div>
        </NavLink>

        <div className="sidebar-item mt-5 mb-4">
          <NavLink to="/Dashboard" activeClassName="active">
            <img src={appWindow} alt="App Window" />
          </NavLink>
        </div>

        <div className="sidebar-item">
          <NavLink to="/Agents" activeClassName="active">
            <img src={user} alt="User" />
          </NavLink>
        </div>

        <div className="sidebar-item">
          <NavLink to="/Calls" activeClassName="active">
            <img src={phone} alt="Phone" />
          </NavLink>
        </div>

        <div className="sidebar-item mb-5">
          <img src={microphone} alt="Microphone" />
        </div>

        <div className="sidebar-item mt-5">
          <img src={gear} alt="Gear" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
