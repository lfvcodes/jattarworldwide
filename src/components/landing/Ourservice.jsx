import React from "react";
import Handshake from "../../img/Handshake.png";
import Call from "../../img/PhoneCall.png";
import LinkIcon from "../../img/LinkSimple.png";
export const Ourservice = () => {
  return (
    <div id="services" className="container mt-4">
      <div className="row text-center">
        <div className="col">
          <h2>Our Services</h2>
          <p className="mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            reiciendis quibusdam quis cum corrupti asperiores odit dolore
            dolores, doloremque architecto magni ut delectus. Ut culpa pariatur
            consectetur. Labore, hic enim?
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col bg-light rounded-lg m-4 p-4">
          <div className="d-flex">
            <img src={Handshake} />
            <h4 className="ms-2 text-primary">Hanshake</h4>
          </div>
          <p align="justify">
            Lorem ipsum is the text commonly used in graphic design in
            demonstrations of typography or drafts
          </p>
        </div>
        <div className="col bg-light rounded-lg m-4 p-4">
          <div className="d-flex">
            <img src={Call} />
            <h4 className="ms-2 text-primary">Call</h4>
          </div>
          <p align="justify">
            Lorem ipsum is the text commonly used in graphic design in
            demonstrations of typography or drafts
          </p>
        </div>
        <div className="col bg-light rounded-lg m-4 p-4">
          <div className="d-flex">
            <img src={LinkIcon} />
            <h4 className="ms-2 text-primary">Link</h4>
          </div>
          <p align="justify">
            Lorem ipsum is the text commonly used in graphic design in
            demonstrations of typography or drafts
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ourservice;
