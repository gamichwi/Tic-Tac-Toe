import React from "react";

import './Square.css';

const Square = ({ value, onClick }) => {
  return (
    <div className="square">
      <button onClick={onClick}>{value}</button>
    </div>
  );
};

export default Square;
