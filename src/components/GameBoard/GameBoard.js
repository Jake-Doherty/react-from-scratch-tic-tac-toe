import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext.js';
import './GameBoard.css';

export default function GameBoard() {
  const { board, setBoard } = useContext(GameContext);
  return (
    <div className="board">
      {board.map((cell, index) => (
        <div key={index} className="board-cell">
          {cell}
        </div>
      ))}
    </div>
  );
}

{
  /* <div className="board-cell"></div> */
}
