import React from "react";
import Handshake from "../../img/Handshake.png";
import Call from "../../img/PhoneCall.png";
import LinkIcon from "../../img/LinkSimple.png";
export const Ourservice = () => {
  return (
    <div className="container mt-4">
      <div className="row text-center">
        <div className="offset-4 col-4">
          <h2>Nuestro Servicios</h2>
          <p>
            Lorem ipsum es el texto que se usa habitualmente en diseño gráfico
            en demostraciones de tipografías o de borradores de diseño para
            probar el diseño visual antes de insertar el texto final
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
            Lorem ipsum es el texto que se usa habitualmente en diseño gráfico
            en demostraciones de tipografías o de borradores
          </p>
        </div>
        <div className="col bg-light rounded-lg m-4 p-4">
          <div className="d-flex">
            <img src={Call} />
            <h4 className="ms-2 text-primary">Call</h4>
          </div>
          <p align="justify">
            Lorem ipsum es el texto que se usa habitualmente en diseño gráfico
            en demostraciones de tipografías o de borradores
          </p>
        </div>
        <div className="col bg-light rounded-lg m-4 p-4">
          <div className="d-flex">
            <img src={LinkIcon} />
            <h4 className="ms-2 text-primary">Link</h4>
          </div>
          <p align="justify">
            Lorem ipsum es el texto que se usa habitualmente en diseño gráfico
            en demostraciones de tipografías o de borradores
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ourservice;
