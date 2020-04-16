import React, { useState } from "react";
import { calculateWinner } from "../helpers";
import Board from "./Board";

import "./Game.css";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);

  const handleClick = i => {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current];
    // If user click an occupied square or if game is won, return
    if (winner || squares[i]) return;
    // Put an X or an O in the clicked square
    squares[i] = xIsNext ? "X" : "O";
    setHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = step => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to Move #${move}` : "Go to Start";
      return (
        <li className="game__move" key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });

  return (
    <>
      <div className="game">
        <Board squares={history[stepNumber]} onClick={handleClick} />
        <div className="game__details">
          <p className="game__turn">
            {winner
              ? winner + " Wins the Game!"
              : "Next Player: " + (xIsNext ? "X" : "O")}
          </p>
          {renderMoves()}
        </div>
      </div>
    </>
  );
};

export default Game;
