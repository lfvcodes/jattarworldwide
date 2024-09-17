import React from "react";
import fillContent from "../../img/formFillContent.png";
import BlueWave2 from "../../img/bluewave2.png";
export const AboutUs = () => {
  return (
    <div id="about" className="container mt-4">
      <div className="row">
        <div className="col text-center">
          <img src={fillContent} height={232} />
        </div>
        <div className="col">
          <h3>About US</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
            distinctio sint sapiente architecto, omnis incidunt repellat, eaque
            ipsa atque quisquam cumque expedita voluptate? Distinctio nihil
            iusto quisquam commodi voluptate veritatis.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>About US</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
            distinctio sint sapiente architecto, omnis incidunt repellat, eaque
            ipsa atque quisquam cumque expedita voluptate? Distinctio nihil
            iusto quisquam commodi voluptate veritatis.
          </p>
        </div>
        <div className="col text-center">
          <img src={fillContent} height={232} />
        </div>
      </div>
      <div className="row">
        <img className="mt-4 img-fluid" src={BlueWave2} />
      </div>
    </div>
  );
};

export default AboutUs;
