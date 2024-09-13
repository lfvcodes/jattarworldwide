// Nav.js
import logo from '../img/logo.png';
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

  const changeLocation = (_url) => {
    window.location.replace(_url);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center p-2">
      <div className="col text-center">
        <div className="navbar-brand m-2">
          <Link to="/Inicio">
            <img src={logo} width={200} height={33} alt="Logo" />
          </Link>
        </div>
      </div>
      <div className="col">
        <div className="nav-group rounded me-2">
          <button type="button" className="btn text-center pe-2 me-2">
            Hogar
          </button>
          <Link to="/Personas">
            <button type="button" className="btn text-center pe-2 me-2">
              Contactanos
            </button>
          </Link>

          <button type="button" className="btn text-center pe-2 me-2">
            Sobre Nosotros
          </button>
          <button type="button" className="btn p-2 text-center m-1 me-2">
            Servicios
          </button>
        </div>
      </div>
      <div className="col">
        <div className="ms-2 nav-group rounded">
          <button type="button" className="btn btn-primary text-light text-center pe-2 me-2">
            Client Login
          </button>
          <button type="button" className="btn btn-primary text-light p-2 text-center m-1 me-2">
            Agent Login
          </button>
        </div>
      </div>
    </nav >
  );
};

export default Nav;
