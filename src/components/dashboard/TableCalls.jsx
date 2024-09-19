import React, { useState, useEffect } from "react";
import iconSearch from "../../img/MagnifyingGlass.png";
import iconFilter from "../../img/Faders.png";
import iconClock from "../../img/Clock.png";
import iconDots from "../../img/Dots.png";
import iconPhone from "../../img/dashPhone.png";
import iconIcomePhone from "../../img/dashPhoneIncoming.png";
import iconAnsweredPhone from "../../img/dashPhoneCall.png";
import iconSlashPhone from "../../img/dashPhoneSlash.png";
import {
  generateRandomDate,
  generateRandomDuration,
  generateRandomHour,
} from "../../utils/randomGenerators";

const TableRow = () => {
  const [randomIcon, setRandomIcon] = useState("");
  const [randomDate, setRandomDate] = useState("");
  const [randomTime, setRandomTime] = useState("");
  const [randomHour, setRandomHour] = useState("");

  const iconArray = [
    iconPhone,
    iconIcomePhone,
    iconAnsweredPhone,
    iconSlashPhone,
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * iconArray.length);
    setRandomIcon(iconArray[randomIndex]);

    setRandomDate(generateRandomDate());
    setRandomTime(generateRandomDuration());
    setRandomHour(generateRandomHour());
  }, []);

  return (
    <>
      <tr className="spacer border-white" aria-hidden="true">
        <td className="border-0" colSpan="8"></td>
      </tr>
      <tr className="bg-white">
        <td className="rounded-start-cell">
          {randomIcon && <img src={randomIcon} />}
        </td>
        <td>CALL_ID</td>
        <td>CALL_TYPE</td>
        <td>AGENT - 006</td>
        <td>{randomTime}</td>
        <td>{randomDate}</td>
        <td>{randomHour}</td>
        <td className="rounded-end-cell">
          <img src={iconDots} />
        </td>
      </tr>
    </>
  );
};

export const TableCalls = () => {
  return (
    <div>
      <div className="row">
        <div className="card card col-auto col-lg m-2 p-2 rounded-8">
          <div className="d-flex">
            <img src={iconSearch} width={26} height={26} />
            <span>Search</span>
          </div>
        </div>
        <div className="card card col-auto col-lg m-2 p-2 rounded-8">
          <div className="d-flex">
            <img src={iconFilter} width={26} height={26} />
            <span>Filter</span>
          </div>
        </div>
        <div className="card card col-auto col-lg m-2 p-2 rounded-8">
          <div className="d-flex">
            <img src={iconClock} width={26} height={26} />
            <span>Min / Fecha</span>
          </div>
        </div>
      </div>
      <div className="table-responsive rounded-8 border-top border-bottom">
        <table className="table">
          <thead className="bg-white shadow-md">
            <tr>
              <th className="border-0 text-primary"> </th>
              <th className="border-0 text-primary">Call_Id</th>
              <th className="border-0 text-primary">State</th>
              <th className="border-0 text-primary">Agent - ID</th>
              <th className="border-0 text-primary">Min</th>
              <th className="border-0 text-primary">Date</th>
              <th className="border-0 text-primary">Hour</th>
              <th className="border-0 text-primary"> </th>
            </tr>
          </thead>
          <tbody className="">
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

export default TableCalls;
