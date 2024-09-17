import React from "react";
import Logo from "../img/logo_log.png";
import Waves from "../img/WavesVertical.png";
import { useLocation } from "react-router-dom";

export const Login = () => {
  const location = useLocation();
  const { role } = location.state || { role: "" };
  return (
    <div className="container">
      <div className="mt-5 row">
        <div className="col-2">
          <img src={Waves} />
        </div>
        <div className="offset-2 col-8 align-center">
          <div className="mt-5 border-0 card">
            <div className="card-header bg-white border-0 text-center">
              <img src={Logo} width={200} height={84} />
            </div>
            <div className="card-body">
              <p className="text-center">
                Lorem ipsum es el texto que se usa habitualmente en diseño
                gráfico en demostraciones de tipografías o de borradores de
                diseño para
              </p>
              <form className="m-5 p-5 pt-0" action="/dashboard/">
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
                  <span className="text-primary">Log in again</span>
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
