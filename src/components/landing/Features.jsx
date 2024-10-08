import React from "react";
import Desktop from "../../img/Desktop.png";
import Headset from "../../img/Headset.png";
import UsersFour from "../../img/UsersFour.png";
import UserSwitch from "../../img/UserSwitch.png";
export const Features = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex">
          <img src={Headset} width={54} height={54} />
          <div className="container">
            <h5 className="text-primary">TEXT</h5>
            <p>
              Lorem ipsum is the text commonly used in graphic design in
              demonstrations of typography or drafts
            </p>
          </div>
        </div>
        <div className="col d-flex">
          <img src={UserSwitch} width={54} height={54} />
          <div className="container">
            <h5 className="text-primary">TEXT</h5>
            <p>
              Lorem ipsum is the text commonly used in graphic design in
              demonstrations of typography or drafts
            </p>
          </div>
        </div>
        <div className="col d-flex">
          <img src={UsersFour} width={54} height={54} />
          <div className="container">
            <h5 className="text-primary">TEXT</h5>
            <p>
              Lorem ipsum is the text commonly used in graphic design in
              demonstrations of typography or drafts
            </p>
          </div>
        </div>
        <div className="col d-flex">
          <img src={Desktop} width={54} height={54} />
          <div className="container">
            <h5 className="text-primary">TEXT</h5>
            <p>
              Lorem ipsum is the text commonly used in graphic design in
              demonstrations of typography or drafts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
