import React from "react";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <div className="container">
      <div className="row m-4">
        <div
          style={{ background: "#F6F6F6" }}
          className="text-center container rounded-pill p-5"
        >
          <h2>Contact us</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus voluptas veniam accusamus quibusdam, porro animi quas
            mollitia dolore, quis perspiciatis alias atque debitis doloribus ut
            dolor! Odio ea qui facilis?
          </p>
          <Link to="/Contact">
            <button type="button" className="btn btn-primary">
              CONTACT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Contact;
