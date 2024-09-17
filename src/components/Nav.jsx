// Nav.js
import logo from "../img/logo.png";
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/Inicio" className="navbar-brand">
          <img src={logo} width={200} height={33} alt="Logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto me-auto">
            <Link to="/Inicio" className="nav-link">
              Home
            </Link>
            <Link to="/Contact" className="nav-link">
              Contact us
            </Link>
            <a href="/Inicio#about" className="nav-link">
              About us
            </a>
            <Link to="/Inicio#services" className="nav-link">
              Services
            </Link>
          </div>
          <div className="navbar-nav">
            <Link to="/Login" state={{ role: "client" }} className="nav-link">
              <button className="btn btn-primary text-light">
                Client Login
              </button>
            </Link>
            <Link
              to="/AgentLogin"
              state={{ role: "agent" }}
              className="nav-link"
            >
              <button className="btn btn-primary text-light">
                Agent Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
