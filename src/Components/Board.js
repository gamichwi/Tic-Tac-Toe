import React from "react";
import Square from "./Square";

import "./Board.css";

const Board = ({ squares, onClick }) => {
  return (
    <div className="Board">
      {squares.map((square, i) => {
        return <Square key={i} value={square} onClick={() => onClick(i)} />;
      })}
    </div>
  );
};

export default Board;
