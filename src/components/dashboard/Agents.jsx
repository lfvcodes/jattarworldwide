import TableAgents from "./TableAgents";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Phone from "./Phone";

const Agents = () => {
  document.body.style.backgroundColor = "#F4F6FE";
  return (
    <div>
      <div className="container-fluid row">
        <div className="col-auto">
          <Sidebar />
        </div>
        <div className="col-auto mt-lg-4">
          <Navbar
            title="Agents"
            text="You can register and assign tasks and give a username to agents."
          />
          <div className="container-fluid row">
            <div className="offset-1 col-lg-11">
              <div className="row">
                <div className="col-sm-12 col-md-8 col-lg-9">
                  <TableAgents />
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

export default Agents;
