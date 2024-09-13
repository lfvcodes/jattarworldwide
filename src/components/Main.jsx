// Main.js
import React from 'react';

const Main = (props) => {
  return (
    <div className="container-fluid mt-2">
      {props.children}
    </div>
  );
};

export default Main;
