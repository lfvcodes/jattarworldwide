import React from "react";
import Headset from "../img/Headset_light.png";
import Lock from "../img/Lock_light.png";
import CheckIcon from "../img/CheckFat.png";
import Desktop from "../img/Desktop_light.png";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
export const Contact = () => {
  return (
    <div>
      <Nav />
      <br />
      <br />
      <div className="container">
        <div className="row m-4">
          <div className="text-center container">
            <h2>Contact Us</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus voluptas veniam accusamus quibusdam, porro animi quas
              mollitia dolore, quis perspiciatis alias atque debitis doloribus
              ut dolor! Odio ea qui facilis?
            </p>
          </div>
        </div>
      </div>
      <div className="container row">
        <div className="col text-end">
          <div className="card rounded rounded-lg shadow-lg ms-5 mb-5 p-2">
            <div className="d-flex">
              <img src={Lock} alt="" />
              <h5 className="text-primary ms-2">
                Lorem ipsum es el texto que se usa
              </h5>
            </div>
            <p className="text-start">
              Lorem ipsum es el texto que se usa habitualmente en diseño gráfico
              en demostraciones de tipografías o de borradores
            </p>
          </div>
          <div className="card rounded rounded-lg shadow-lg ms-5 mb-5 p-2">
            <div className="d-flex">
              <img src={CheckIcon} alt="" />
              <h5 className="text-primary ms-2">
                Lorem ipsum es el texto que se usa
              </h5>
            </div>
            <p className="text-start">
              Lorem ipsum es el texto que se usa habitualmente en diseño gráfico
              en demostraciones de tipografías o de borradores
            </p>
          </div>
          <div className="card rounded rounded-lg shadow-lg ms-5 mb-5 p-2">
            <div className="d-flex">
              <img src={Headset} alt="" />
              <h5 className="text-primary ms-2">
                Lorem ipsum es el texto que se usa
              </h5>
            </div>
            <p className="text-start">
              Lorem ipsum es el texto que se usa habitualmente en diseño gráfico
              en demostraciones de tipografías o de borradores
            </p>
          </div>
          <div className="card rounded rounded-lg shadow-lg ms-5 mb-5 p-2">
            <div className="d-flex">
              <img src={Desktop} alt="" />
              <h5 className="text-primary ms-2">
                Lorem ipsum es el texto que se usa
              </h5>
            </div>
            <p className="text-start">
              Lorem ipsum es el texto que se usa habitualmente en diseño gráfico
              en demostraciones de tipografías o de borradores
            </p>
          </div>
        </div>
        <div className="col">
          <form class="d-flex card p-4">
            <h3 className="text-center text-primary">Contact Us</h3>
            <div class="col">
              <div className="row">
                <div class="col m-3">
                  <label for="" class="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    class="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div class="col m-3">
                  <label for="" class="form-label">
                    LastName
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    class="form-control"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div class="m-3">
                <label for="" class="form-label">
                  Mail
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  class="form-control"
                  placeholder="Email Address"
                />
              </div>

              <div className="row">
                <div class="col m-3">
                  <label for="" class="form-label">
                    Team Size
                  </label>
                  <select className="form-select" name="" id="">
                    <option selected value="1">
                      1 - 50 people
                    </option>
                  </select>
                </div>
                <div class="col m-3">
                  <label for="" class="form-label">
                    Location
                  </label>
                  <select className="form-select" name="" id="">
                    <option selected value="">
                      Canadá
                    </option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div class="col m-3">
                  <label for="" class="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    rows={4}
                    name=""
                    id=""
                    placeholder="Leave us a message"
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <button className="col m-3 btn btn-primary" type="button">
                  send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
