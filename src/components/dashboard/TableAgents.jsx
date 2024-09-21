import React, { useState, useEffect } from "react";
import iconPhone from "../../img/dashPhone.png";
import iconIcomePhone from "../../img/dashPhoneIncoming.png";
import iconAnsweredPhone from "../../img/dashPhoneCall.png";
import iconSlashPhone from "../../img/dashPhoneSlash.png";
import iconClock from "../../img/iconClock.png";
import timeIndicator from "../../img/timeIndicator.png";
import { Link } from "react-router-dom";
import avatar1 from "../../img/avatar1.png";
import avatar2 from "../../img/avatar2.png";
import avatar3 from "../../img/avatar3.png";
import avatar4 from "../../img/avatar4.png";
import avatar5 from "../../img/avatar5.png";
import avatar6 from "../../img/avatar6.png";
import avatar7 from "../../img/avatar7.png";

import { generateRandomDurationWithSeconds } from "../../utils/randomGenerators";

const TableRow = () => {
  const [randomAvatar, setRandomAvatar] = useState("");
  const [randomTime, setRandomTime] = useState("");

  const avatarArray = [
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * avatarArray.length);
    setRandomAvatar(avatarArray[randomIndex]);
    setRandomTime(generateRandomDurationWithSeconds());
  }, []);

  return (
    <>
      <tr className="spacer border-white" aria-hidden="true">
        <td className="border-0" colSpan="8"></td>
      </tr>
      <tr className="bg-white">
        <td class="rounded-start-cell"> </td>
        <td className="align-middle text-start">
          <div className="d-flex">
            <img className="m-2" width={34} height={34} src={randomAvatar} />
            <span className="m-2 d-block">
              <Link className="text-decoration-none" to="/Agents/Calls">
                <span>Carolina Pineda</span>
              </Link>
              <span className="d-block">
                {" "}
                <img src={timeIndicator} /> online
              </span>
            </span>
          </div>
        </td>
        <td className="bg-col-striped align-middle">
          <small className="rounded-4 border p-2 bg-white text-dark m-2">
            <img src={iconAnsweredPhone} width={16} height={16} alt="" />
            86
          </small>
          <span className="text-dark d-block mt-2">
            <img src={iconClock} alt="" />
            {randomTime}
          </span>
        </td>
        <td className="align-middle">
          <span className="rounded-4 border p-2 bg-white text-dark m-2">
            <img src={iconIcomePhone} width={16} height={16} alt="" />
            160
          </span>
        </td>
        <td className="bg-col-striped align-middle">
          <span className="rounded-4 border p-2 bg-white text-dark m-2">
            <img src={iconPhone} width={16} height={16} alt="" />
            50
          </span>
        </td>
        <td className="align-middle">
          <span className="rounded-4 border p-2 bg-white text-dark m-2">
            <img src={iconSlashPhone} width={16} height={16} alt="" />
            20
          </span>
        </td>
        <td className="rounded-end-cell"> </td>
      </tr>
    </>
  );
};

export const TableAgents = () => {
  return (
    <div>
      <div className="table-responsive rounded-8">
        <table className="table table-borderless text-center">
          <thead className="bg-transparent">
            <tr>
              <td></td>
              <td className="border-0">Agent</td>
              <td className="border-0">Answered Calls</td>
              <td className="border-0">ID Incoming calls</td>
              <td className="border-0">Call waiting</td>
              <td className="border-0">Abandoned calls</td>
              <td></td>
            </tr>
          </thead>
          <tbody className="">
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableAgents;
