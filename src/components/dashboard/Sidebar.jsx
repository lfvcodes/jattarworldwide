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
    setIsOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {!isOpen && (
        <button
          className="btn-sm border-0 text-start bg-transparent d-lg-none"
          onClick={toggleSidebar}
          style={{ margin: "10px" }}
        >
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="60" height="10"></rect>
            <rect y="20" width="60" height="10"></rect>
            <rect y="40" width="60" height="10"></rect>
          </svg>
        </button>
      )}

      <div
        className={`sidebar shadow-lg ${
          !isOpen && window.innerWidth < 992 ? "closed" : "open"
        }`}
        style={{ zIndex: 1060 }}
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
      {isOpen && (
        <div
          className="modal-backdrop bg-primary opacity-25"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1050,
          }}
          onClick={closeSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;
