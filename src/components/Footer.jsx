// Footer.js
import logo from '../img/Logo2.png';
import ondule from '../img/ondule_back.png';
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-primary text-center border-top border-primary mt-4">
      <div className="container-fluid row">
        <div className="col">
          <div>
            <img className='me-2' src={logo} height={33} alt="" />
          </div>
        </div>
        <div className="col text-center text-light">
          <ul className='list-unstyled' >
            <li>lorem impsum</li>
            <li>lorem impsum</li>
            <li>lorem impsum</li>
          </ul>
        </div>
        <div className="col text-end text-light">
          <ul className='list-unstyled' >
            <li><b>Designed by:</b> Carolina Pineda </li>
            <li><b>Layout by</b>: Luis Vasquez</li>
          </ul>
        </div>
      </div>
      <img src={ondule} alt="" />
    </footer >
  );
};

export default Footer;
