import React from "react";
import imgPhoneContact from "../../img/phonePeople.png";
import imgPhoneMute from "../../img/phoneMute.png";
import imgPhoneOptions from "../../img/phoneOptions.png";
import imgPhonePause from "../../img/phonePause.png";
import imgMakeCall from "../../img/phoneMakeCall.png";

const Phone = () => {
  return (
    <div>
      <div className="card rounded-4">
        <div className="m-2 card border-0 rounded-4">
          <img className="img-fluid" src={imgPhoneContact} />
        </div>
        <div className="row m-2">
          <div className="col">
            <img src={imgPhoneMute} />
          </div>
          <div className="col">
            <img src={imgPhoneOptions} />
          </div>
          <div className="col">
            <img src={imgPhonePause} />
          </div>
        </div>
        <div className="border rounded-4 row mx-auto p-1">
          <div className="col-auto">
            <div className="btn-outline-info text-dark card mb-2 p-1 pb-0">
              <h4>1</h4>
            </div>
            <div className="btn-outline-info text-dark card mb-2 p-1 pb-0">
              <h4>4</h4>
            </div>
            <div className="btn-outline-info text-dark card mb-2 p-1 pb-0">
              <h4>7</h4>
            </div>
            <div className="btn-outline-info text-dark card mb-2 p-1 pb-0">
              <h4>*</h4>
            </div>
          </div>
          <div className="col-auto">
            <div className="btn-outline-info text-dark card mb-2 p-1 pb-0">
              <h4>2</h4>
            </div>
            <div className="btn-outline-info text-dark card mb-2 p-1 pb-0">
              <h4>5</h4>
            </div>
            <div className="btn-outline-info text-dark card mb-2 p-1 pb-0">
              <h4>8</h4>
            </div>
            <div className="btn-outline-info text-dark card mb-2 p-1 pb-0">
              <h4>0</h4>
            </div>
          </div>
          <div className="col-auto">
            <div className="btn-outline-info text-dark card mb-2 p-1 pb-0">
              <h4>3</h4>
            </div>
            <div className="btn-outline-info text-dark card mb-2 p-1 pb-0">
              <h4>6</h4>
            </div>
            <div className="btn-outline-info text-dark card mb-2 p-1 pb-0">
              <h4>9</h4>
            </div>
            <div className="btn-outline-info text-dark card mb-2 p-1 pb-0">
              <h4>#</h4>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="btn">
            <img src={imgMakeCall} width={42} height={42} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Phone;
