import hero1 from "../../img/hero1.png";
import hero2 from "../../img/hero2.png";
import usersReg from "../../img/users.png";
import soundWave from "../../img/Waves.png";
import React from "react";

export const Hero = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3 class="text-secondary">Cloud telephony management</h3>
          <h2 class="text-primary fw-bold">
            Discover the best customer service.
          </h2>
          <h3 className="text-dark">Call now and see for yourself!</h3>
          <br />
          <div className="d-flex">
            <button type="button" className="btn btn-lg btn-primary m-2">
              Client Login
            </button>
            <button
              type="button"
              className="btn btn-lg btn-outline-primary m-2"
            >
              Agent Login
            </button>
          </div>
          <br />
          <div className="d-flex">
            <div className="m-2">
              <img src={usersReg} height={60} />
            </div>
            <div className="m-2 pe-4 border-end border-primary">
              <h5 class="text-muted">
                Are<br></br>
                <b>3,921</b>
              </h5>
            </div>
            <div className="m-2 fw-bold text-primary align-middle">
              <h4>Registered Users</h4>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="d-flex">
            <img src={hero1} alt="" />
            <img src={hero2} alt="" />
          </div>
        </div>
      </div>
      <div className="m-4">
        <img className="img-fluid" src={soundWave} />
      </div>
    </div>
  );
};

export default Hero;
