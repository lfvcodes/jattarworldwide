import React from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";
import Phone from "../components/dashboard/Phone";

export const Dashboard = () => {
  return (
    <div>
      <div className="container-fluid row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10">
          <Navbar />
        </div>
      </div>
      <div className="container-fluid row">
        <div className="offset-2 col-6">
          <div className="row">
            <div className="card col m-2">
              <h5 className="card-header">Incoming</h5>
              <div className="card-body">0</div>
            </div>
            <div className="card col m-2">
              <h5 className="card-header">Answered</h5>
              <div className="card-body">0</div>
            </div>
            <div className="card col m-2">
              <h5 className="card-header">Call Wait</h5>
              <div className="card-body">0</div>
            </div>
          </div>
          <div class="table-responsive">
            <table class="table table-primary">
              <thead>
                <tr>
                  <th scope="col">Column 1</th>
                  <th scope="col">Column 2</th>
                  <th scope="col">Column 3</th>
                </tr>
              </thead>
              <tbody>
                <tr class="">
                  <td scope="row">R1C1</td>
                  <td>R1C2</td>
                  <td>R1C3</td>
                </tr>
                <tr class="">
                  <td scope="row">Item</td>
                  <td>Item</td>
                  <td>Item</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-4 text-center">
          <Phone />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
