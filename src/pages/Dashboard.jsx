import React from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";
import Phone from "../components/dashboard/Phone";
import CardCall from "../components/dashboard/IncomingCallCard";
import iconPhone from "../img/dashPhone.png";
import iconIcomePhone from "../img/dashPhoneIncoming.png";
import iconAnsweredPhone from "../img/dashPhoneCall.png";
import iconSlashPhone from "../img/dashPhoneSlash.png";
import TableCalls from "../components/dashboard/TableCalls";

export const Dashboard = () => {
  // Cambiar el color de fondo al montarse el componente
  document.body.style.backgroundColor = "#F4F6FE"; // Cambia este color por tu preferido

  return (
    <div>
      <div className="container-fluid row">
        <div className="col-1">
          <Sidebar />
        </div>
        <div className="col-10 mt-4">
          <Navbar />
        </div>
      </div>
      <div className="container-fluid row">
        <div className="offset-1 col-8">
          <div className="row">
            <div className="card col m-2 p-2 rounded-8">
              <img src={iconIcomePhone} width={28} height={28} />
              <h5>Incoming</h5>
              <p>Lorem ipsum es el texto</p>
            </div>
            <div className="card col m-2 p-2 rounded-8">
              <img src={iconAnsweredPhone} width={28} height={28} />
              <h5>Answered</h5>
              <p>Lorem ipsum es el texto</p>
            </div>
            <div className="card col m-2 p-2 rounded-8">
              <img src={iconPhone} width={28} height={28} />
              <h5>Call Waiting</h5>
              <p>Lorem ipsum es el texto</p>
            </div>
            <div className="card col m-2 p-2 rounded-8">
              <img src={iconSlashPhone} width={28} height={28} />
              <h5>Abandoned Calls</h5>
              <p>Lorem ipsum es el texto</p>
            </div>
          </div>
          <div className="overflow-auto">
            <div className="d-flex flex-row">
              <CardCall />
              <CardCall />
              <CardCall />
              <CardCall />
              <CardCall />
              <CardCall />
            </div>
          </div>
          <TableCalls />
        </div>
        <div className="col-2 text-center">
          <Phone />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
