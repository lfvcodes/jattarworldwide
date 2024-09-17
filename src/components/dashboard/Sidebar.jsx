import React from "react";
import { Link } from "react-router-dom";
import brand from "../../img/logo_brand.png";
import microphone from "../../img/Microphone.png";
import gear from "../../img/Gear.png";
import phone from "../../img/Phone.png";
import user from "../../img/User.png";
import appWindow from "../../img/AppWindow.png";

const Sidebar = () => {
  return (
    <div className="sidebar shadow-lg">
      <Link to="/Dashboard">
        <div className="sidebar-item">
          <img src={brand} />
        </div>
      </Link>
      <div className="sidebar-item mt-5 mb-4">
        <img src={appWindow} />
      </div>
      <div className="sidebar-item">
        <img src={user} />
      </div>
      <div className="sidebar-item">
        <img src={phone} />
      </div>
      <div className="sidebar-item mb-5">
        <img src={microphone} />
      </div>
      <div className="sidebar-item mt-5">
        <img src={gear} />
      </div>
    </div>
  );
};

export default Sidebar;
