import React from "react";
import iconIcomePhone from "../../img/dashPhoneIncoming.png";
import iconAccept from "../../img/acceptCall.png";
import iconReject from "../../img/rejectCall.png";

const IncomingCallCard = () => {
  return (
    <div className="card m-2 p-2 rounded-8" style={{ minWidth: "200px" }}>
      <div className="d-flex">
        <img src={iconIcomePhone} width={28} height={28} />
        <h6 className="fw-bold text-primary">Incoming Call</h6>
      </div>
      <p>+1 (829) 123-0456</p>
      <div className="border-top row">
        <div className="col">
          <small className="d-block">Min. Wait:</small>
          <img className="" src={iconReject} alt="Reject Call" />
        </div>
        <div className="col">
          <small className="d-block">0:26</small>
          <img className="" src={iconAccept} alt="Accept Call" />
        </div>
      </div>
    </div>
  );
};

export default IncomingCallCard;
