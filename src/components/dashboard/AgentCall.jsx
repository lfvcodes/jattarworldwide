import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Phone from "./Phone";
import avatar from "../../img/avatar1.png";
import iconEvelope from "../../img/Envelope.png";
import iconPhone from "../../img/dashPhone.png";
import iconOnline from "../../img/timeIndicator.png";
import iconDots from "../../img/Dots.png";
import iconPlay from "../../img/imgPlay.png";
import iconPause from "../../img/phonePause.png";
import iconCaretDown from "../../img/iconCaretDown.png";
import soundWaveCall from "../../img/SoundWaveCall.png";
import iconClockwiseForward from "../../img/iconClockwiseForward.png";
import iconClockwise from "../../img/iconClockwise.png";
import { TableRow } from "./TableCalls";

const AgentCall = () => {
  document.body.style.backgroundColor = "#F4F6FE";

  const [iconSound, setPlay] = useState(iconPlay);

  const controlAudio = () => {
    setPlay((prevIcon) => (prevIcon === iconPlay ? iconPause : iconPlay));
  };

  const agentProfile = (
    <>
      <div className="row card p-1 rounded-8 profile text-dark my-2 me-lg-2">
        <div className="col d-flex">
          <img className="me-1" src={avatar} />
          <span>Carolina Pineda</span>
        </div>

        <div className="col d-flex">
          <small>ID: CAROL_0234</small>
          <img className="p-1" width={20} height={20} src={iconOnline} />
          on call
        </div>

        <div className="card-body p-0">
          <div className="col card-name">
            <img
              width={16}
              height={16}
              className="me-1 bf-filled"
              src={iconEvelope}
            />
            <smal>info@info.com</smal>
          </div>
          <div className="d-flex">
            <img width={16} height={16} className="me-1" src={iconPhone} />
            <smal>ID:CAROL_0264</smal>
          </div>
        </div>
      </div>
    </>
  );

  const infoCall = (
    <>
      <div className="card rounded-8">
        <div className="card-header bg-transparent m-auto p-1 row border-0">
          <span className="col-sm-6 d-flex col-lg-6 text-start">
            <img className="my-auto" src={iconPhone} />
            <div className="d-block border-start border-primary ps-2">
              <div className="input-group">
                <small className="fs-7">Voice Call</small>
                <span className="text-primary fs-6">Agent Name</span>
              </div>
            </div>
          </span>
          <div className="col-sm-11 col-lg-6 text-end">
            <button
              type="button"
              className="btn btn-sm my-1 me-1 btn-outline-primary"
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-sm my-1 me-1 btn-outline-primary"
            >
              Share Call
            </button>
            <button type="button" className="btn btn-sm">
              <img src={iconDots} />
            </button>
          </div>
        </div>
        <div className="card-body p-1">
          <div className="row m-auto p-0">
            <div className="col col-lg-5">
              <small className="d-block fs-8">Call started at</small>
              <small className="fs-7">16/11/2023, 10:26 AM</small>
            </div>
            <div className="col col-lg-5">
              <small className="d-block fs-8">Call duration in seconds</small>
              <small className="fs-7">550 seconds</small>
            </div>
            <div className="col col-lg">
              <small className="d-block fs-8">Call type</small>
              <small className="fs-7">Income</small>
            </div>
          </div>
        </div>
        <div className="card-footer border-0 p-1 pe-3 m-0 text-end bg-transparent">
          <button type="button" className="btn btn-sm p-0">
            <img src={iconCaretDown} className="mb-auto" />
          </button>
        </div>
      </div>
    </>
  );

  const callWave = (
    <>
      <div className="card rounded-8">
        <div className="card-header bg-transparent m-auto p-1 row border-0">
          <div className="col d-flex w-100 text-center">
            <button
              onClick={() => {
                controlAudio();
              }}
              type="button"
              className="btn btn-sm p-0"
            >
              <img width={32} height={32} src={iconSound} />
            </button>
            <img className="mx-1 me-3 w-75" src={soundWaveCall} />
            <small className="my-auto fs-7">02:05</small>
          </div>
        </div>
        <div className="card-body row p-1">
          <div className="col w-100">
            <div class="dropdown">
              <button
                class="btn btn-sm btn-outline-primary ms-2 px-4 rounded-8 dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                1x
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <span class="dropdown-item" href="#">
                    1.5x
                  </span>
                </li>
                <li>
                  <span class="dropdown-item" href="#">
                    2x
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col d-flex text-center">
            <button type="button" className="btn p-0">
              <small>10s</small>{" "}
              <img width={16} height={16} src={iconClockwiseForward} />
            </button>

            <small className="mx-auto my-auto">00:26</small>

            <button type="button" className="btn p-0">
              <img width={16} height={16} src={iconClockwise} />
              <small>10s</small>
            </button>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="container-fluid row">
        <div className="col-auto">
          <Sidebar />
        </div>
        <div className="col-auto w-100 mt-lg-4">
          <Navbar title="Agent Calls" text="Lorem ipsum" />
          <div className="container-fluid row">
            <div className="offset-lg-1 col-lg-11 text-start">
              <div className="row m-0">
                <div className="col-sm-12 col-md-8 col-lg-9">
                  <div className="m-0 row w-100">
                    <div className="col-sm-11 col-lg-4">{agentProfile}</div>

                    <div className="d-block col col-lg">
                      <div
                        id="menu"
                        className="row bg-gradient-primary text-center"
                      >
                        <div className="col-sm border-start border-end border-primary m-1">
                          <h5>Customer Service</h5>
                        </div>
                        <div className="col-sm border-start border-end border-primary m-1">
                          <h5>Technical Support</h5>
                        </div>
                        <div className="col-sm border-start border-end border-primary m-1">
                          <h5>Additional Support</h5>
                        </div>
                      </div>

                      <div className="d-block col col-lg mt-2 mb-2 ">
                        {infoCall}
                      </div>

                      <div className="d-block col col-lg mt-2 mb-2 ">
                        {callWave}
                      </div>

                      <div className="d-block">
                        <div className="table-responsive rounded-8 border-top border-bottom">
                          <table className="table">
                            <thead className="bg-white shadow-md">
                              <tr>
                                <th className="border-0 text-primary">
                                  Call_Id
                                </th>
                                <th className="border-0 text-primary">State</th>
                                <th className="border-0 text-primary">
                                  Agent_ID
                                </th>
                                <th className="border-0 text-primary">Min</th>
                                <th className="border-0 text-primary">Date</th>
                                <th className="border-0 text-primary">Hour</th>
                              </tr>
                            </thead>
                            <tbody className="">
                              <TableRow agent="true" />
                              <TableRow agent="true" />
                              <TableRow agent="true" />
                              <TableRow agent="true" />
                              <TableRow agent="true" />
                              <TableRow agent="true" />
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-2 col-lg-3 text-center">
                  <Phone minify="false" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentCall;
