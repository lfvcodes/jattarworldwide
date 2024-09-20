import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Phone from "./Phone";
import CardCall from "./IncomingCallCard";
import iconPhone from "../../img/dashPhone.png";
import iconIcomePhone from "../../img/dashPhoneIncoming.png";
import iconAnsweredPhone from "../../img/dashPhoneCall.png";
import iconSlashPhone from "../../img/dashPhoneSlash.png";
import TableCalls from "./TableCalls";

export const CallSection = () => {
  document.body.style.backgroundColor = "#F4F6FE";

  return (
    <div>
      <div className="container-fluid row">
        <div className="col-auto">
          <Sidebar />
        </div>
        <div className="col-auto w-100 mt-lg-4">
          <Navbar title="Call" text="Lorem ipsum" />
          <div className="container-fluid row">
            <div className="offset-1 col-lg-11">
              <div className="row">
                <div className="col-sm-12 col-md-8 col-lg-9">
                  <div className="row">
                    <div className="card col-sm col-lg m-2 p-2 rounded-8">
                      <Link
                        className="text-decoration-none"
                        to="/Calls"
                        state={{ type: "Incoming" }}
                      >
                        <img src={iconIcomePhone} width={28} height={28} />
                        <h5>Incoming</h5>
                        <span>The last 7 days</span>
                        <h5 className="text-secondary">376 Total</h5>
                        <span>Lorem Ipsum</span>
                      </Link>
                    </div>
                    <div className="card col-sm col-lg m-2 p-2 rounded-8">
                      <Link
                        className="text-decoration-none"
                        to="/Calls"
                        state={{ type: "Answered" }}
                      >
                        <img src={iconAnsweredPhone} width={28} height={28} />
                        <h5>Answered</h5>
                        <span>The last 7 days</span>
                        <h5 className="text-secondary">411 Total</h5>
                        <span>Lorem Ipsum</span>
                      </Link>
                    </div>
                    <div className="card col-sm col-lg m-2 p-2 rounded-8">
                      <Link
                        className="text-decoration-none"
                        to="/Calls"
                        state={{ type: "Waiting" }}
                      >
                        <img src={iconPhone} width={28} height={28} />
                        <h5>Call Waiting</h5>
                        <span>The last 7 days</span>
                        <h5 className="text-secondary">111 Total</h5>
                        <span>Lorem Ipsum</span>
                      </Link>
                    </div>
                    <div className="card col-sm col-lg m-2 p-2 rounded-8">
                      <Link
                        className="text-decoration-none"
                        to="/Calls"
                        state={{ type: "Abandoned" }}
                      >
                        <img src={iconSlashPhone} width={28} height={28} />
                        <h5>Abandoned Calls</h5>
                        <span>The last 7 days</span>
                        <h5 className="text-secondary">111 Total</h5>
                        <span>Lorem Ipsum</span>
                      </Link>
                    </div>
                  </div>
                  <TableCalls />
                </div>
                <div className="col-sm-12 col-md-2 col-lg-3 text-center">
                  <Phone minify="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CallSection;
