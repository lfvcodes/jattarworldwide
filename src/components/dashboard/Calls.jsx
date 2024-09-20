import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Phone from "./Phone";

import timeIndicator from "../../img/timeIndicator.png";
import shopping from "../../img/ShoppingCart.png";
import iconClock from "../../img/iconClock.png";
import idBadge from "../../img/idBadge.png";
import avatar from "../../img/avatar1.png";
import iconInfo from "../../img/Info.png";

const CallsRow = () => {
  return (
    <>
      <tr className="spacer border-white" aria-hidden="true">
        <td className="border-0" colSpan="8"></td>
      </tr>
      <tr className="bg-white">
        <td className="rounded-start-cell"></td>
        <td className="align-middle text-start">
          <div className="d-flex">
            <img className="m-2" width={32} height={32} src={avatar} />
            <span className="m-2 d-block">
              <span>Carolina Pineda</span>
              <span className="d-block">
                {" "}
                <img src={timeIndicator} /> online
              </span>
            </span>
          </div>
        </td>
        <td className="bg-col-striped align-middle">Lorem ipsum, dolor</td>
        <td className="align-middle">Lorem ipsum, dolor</td>
        <td className="bg-col-striped align-middle">AGENT - 006</td>
        <td className="align-middle">
          <span className="d-flex">
            <img src={iconClock} />
            03:54:11
          </span>
        </td>
        <td className="bg-col-striped align-middle">2024-09-20</td>
        <td className="rounded-end-cell"></td>
      </tr>
    </>
  );
};

export const CallCounter = () => {
  return (
    <div className="row mt-4 mb-4">
      <div className="col-auto">
        <div className="card rounded-8 p-2">
          <div className="row">
            <div className="col-2 m-auto">
              <img src={idBadge} />
            </div>
            <div className="col-10">
              <h5 className="text-secondary">Customer Service</h5>
              <span>The last 7 days</span>
              <h5 className="text-secondary">376 Total</h5>
              <span>Lorem Ipsum</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-auto">
        <div className="card rounded-8 p-2">
          <div className="row">
            <div className="col-2 m-auto">
              <img src={iconInfo} />
            </div>
            <div className="col-10">
              <h5 className="text-secondary">Technical Support</h5>
              <span>The last 7 days</span>
              <h5 className="text-secondary">411 Total</h5>
              <span>Lorem Ipsum</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-auto">
        <div className="card rounded-8 p-2">
          <div className="row">
            <div className="col-2 m-auto">
              <img src={shopping} />
            </div>
            <div className="col-10">
              <h5 className="text-secondary">Additional Products</h5>
              <span>The last 7 days</span>
              <h5 className="text-secondary">377 Total</h5>
              <span>Lorem Ipsum</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Calls = () => {
  const state = useLocation().state || {};
  document.body.style.backgroundColor = "#F4F6FE";

  return (
    <div>
      <div className="container-fluid row">
        <div className="col-auto">
          <Sidebar />
        </div>
        <div className="col-auto mt-lg-4">
          <Navbar
            title={"Calls " + state.type}
            text="Lorem ipsum, dolor amet consectetur adipisicing elit."
          />
          <div className="container-fluid row">
            <div className="offset-1 col-lg-11">
              <CallCounter />
              <div className="row">
                <div className="col-sm-12 col-md-8 col-lg-9">
                  <table className="table table-borderless text-center">
                    <thead className="text-primary">
                      <tr className="bg-white shadow-lg">
                        <td className="rounded-start-cell"></td>
                        <td>Agent</td>
                        <td>Customer Service</td>
                        <td>Technical Support</td>
                        <td>Additional Products</td>
                        <td>Min</td>
                        <td>Fecha</td>
                        <td className="rounded-end-cell"></td>
                      </tr>
                    </thead>
                    <tbody>
                      <CallsRow />
                      <CallsRow />
                      <CallsRow />
                      <CallsRow />
                      <CallsRow />
                      <CallsRow />
                    </tbody>
                  </table>
                </div>
                <div className="col-sm-12 col-md-2 col-lg-3 text-center">
                  <Phone />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calls;
