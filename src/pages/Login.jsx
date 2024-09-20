import React from "react";
import Logo from "../img/logo_log.png";
import Waves from "../img/WavesVertical.png";
import { Link, useLocation } from "react-router-dom";

export const Login = () => {
  const location = useLocation();
  const { role } = location.state || { role: "" };
  return (
    <div className="container">
      <div className="mt-5 row">
        <div className="col-auto col-lg-2 d-none d-lg-block">
          <img src={Waves} />
        </div>
        <div className="offset-lg-2 col-lg-8 col-md-10 align-center">
          <div className="mt-5 border-0 card">
            <div className="card-header bg-white border-0 text-center">
              <Link to="/Inicio">
                <img src={Logo} width={200} height={84} />
              </Link>
            </div>
            <div className="card-body">
              <p className="text-center">
                Lorem ipsum es el texto que se usa habitualmente en diseño
                gráfico en demostraciones de tipografías o de borradores de
                diseño para
              </p>
              <form className="m-lg-5 p-lg-5 pt-0" action="/Dashboard">
                {role === "client" && (
                  <div className="mb-3">
                    <label for="" className="form-label">
                      Name and LastName
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                )}

                <div className="mb-3">
                  <label for="" className="form-label">
                    Mail
                  </label>
                  <input required type="email" className="form-control" />
                </div>
                <div className="mb-3">
                  <label for="" className="form-label">
                    Password
                  </label>
                  <input required type="password" className="form-control" />
                </div>
                <div className="mb-3">
                  <button type="submit" className="btn btn-primary w-100">
                    Enter
                  </button>
                </div>
                <div className="mb-3 text-center">
                  {role === "client" ? (
                    <span className="text-muted d-block mb-2">
                      Do you already have an account?
                    </span>
                  ) : (
                    <span className="text-muted d-block mb-2">
                      Forgot your password?
                    </span>
                  )}
                  <Link to="/AgentLogin" state={{ role: "agent" }}>
                    <span className="text-primary">Log in again</span>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
