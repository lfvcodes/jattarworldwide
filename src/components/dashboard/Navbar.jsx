import React from "react";

const Navbar = () => {
  return (
    <div className="row">
      <div className="col">
        <h2>HI Hello</h2>
        <p>
          Lorem ipsum es el texto que se usa habitualmente en diseño gráfico
        </p>
      </div>
      <div className="col">
        <div className="d-flex">
          <div className="rounded-ellipsis p-2 me-2">
            <input
              type="text"
              placeholder="Buscar"
              className="form-control rounded-ellipsis"
            />
          </div>
          <button className="btn btn-sm rounded-ellipsis btn-secondary m-1">
            A
          </button>
          <button className="btn btn-sm rounded-ellipsis btn-secondary m-1">
            E
          </button>
          <button className="btn btn-sm rounded-ellipsis btn-secondary m-1">
            O
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
