import { React, useState } from "react";
import imgPhoneContact from "../../img/phonePeople.png";
import imgPhoneMute from "../../img/phoneMute.png";
import imgPhoneOptions from "../../img/phoneOptions.png";
import imgPhonePause from "../../img/phonePause.png";
import imgCloseCall from "../../img/rejectCall.png";
import imgMakeCall from "../../img/phoneMakeCall.png";
import iconBackspace from "../../img/iconBackspace.png";
import timeIndicator from "../../img/timeIndicator.png";

const Phone = ({ minify }) => {
  const [number, setNumber] = useState("");

  const addNumber = (num) => {
    setNumber((prev) => prev + num);
  };

  const removeLastNumber = () => {
    setNumber((prev) => prev.slice(0, -1));
  };

  const imgCall = minify == "true" ? imgCloseCall : imgMakeCall;

  const keynumber =
    minify == "true" ? (
      ""
    ) : (
      <>
        <div className="container row p-2 text-center">
          <div className="col text-center">
            <h5 className="ms-2">{number}</h5>
          </div>
          <div className="col text-end">
            {number && ( // Solo muestra el botón si hay números
              <button onClick={removeLastNumber} className="btn ms-3 p-0">
                <img
                  width={32}
                  height={32}
                  className="img-fluid"
                  src={iconBackspace}
                />
              </button>
            )}
          </div>
        </div>
      </>
    );

  const keypad =
    minify == "true" ? (
      ""
    ) : (
      <div className="border rounded-4 row mx-auto p-1 mb-3">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "*", "#"].map(
          (num, index) => (
            <div className="col-4" key={index}>
              <div
                className="btn-outline-info text-dark card mb-2 p-1 pb-0"
                onClick={() => addNumber(num)}
                style={{ cursor: "pointer" }}
              >
                <h4>{num}</h4>
              </div>
            </div>
          )
        )}
      </div>
    );

  return (
    <div>
      <div className="card rounded-4">
        <div className="m-2 card border-0 rounded-4 position-relative">
          <img
            className="img-fluid"
            src={imgPhoneContact}
            alt="Descripción de la imagen"
          />

          <div className="caption position-absolute bottom-0 start-0 end-0 text-white p-1">
            <div className="container row m-0 p-0 ms-2">
              <div className="col-auto text-start rounded-4 bg-dark bg-opacity-25 me-3">
                <span className="d-block">Customer</span>
                <span className="d-block">Camila Paradas</span>
              </div>
              <div className="col-auto text-end mt-auto mb-auto bg-dark bg-opacity-25 rounded-8">
                <span className="d-block">
                  <img className="me-2" src={timeIndicator} />
                  0:18
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex m-2">
          <div className="col p-auto">
            <button type="button" className="btn">
              <img src={imgPhoneMute} />
            </button>
          </div>
          <div className="col p-auto">
            {minify == "true" ? (
              <button type="button" className="btn">
                <img src={imgCall} />
              </button>
            ) : (
              <img src={imgPhoneOptions} />
            )}
          </div>

          <div className="col p-auto">
            <button type="button" className="btn">
              <img src={imgPhonePause} />
            </button>
          </div>
        </div>
        {keynumber}
        {keypad}

        <div hidden={minify == "true" ? "hidden" : ""} className="text-center">
          <button className="btn">
            <img src={imgCall} width={42} height={42} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Phone;
