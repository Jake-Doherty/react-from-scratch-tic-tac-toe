import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext.js';
import Box from '../Box/Box.js';
import './GameBoard.css';

export default function GameBoard() {
  const { board } = useContext(GameContext);

  // console.log('board log', board);

  return (
    <div className="board">
      {board.map((box, index) => (
        <Box key={index} {...{ box }} index={index} />
      ))}
    </div>
  );
}
