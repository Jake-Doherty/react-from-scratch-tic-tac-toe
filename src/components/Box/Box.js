import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext.js';
import './Box.css';

export default function Box({ box, index }) {
  const { active, board, setBoard, currentPlayer, setCurrentPlayer, setGameMessage } =
    useContext(GameContext);

  function handleChoice() {
    if (!active) return;
    if (box !== '') {
      setGameMessage('This box is already taken!');
      return;
    }
    setGameMessage('Who will win?');
    board[index] = currentPlayer;
    setBoard([...board]);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  }

  const playerMarkerStyle = {
    color: box === 'X' ? 'red' : 'green',
  };

  return (
    <div className="board-cell" onClick={handleChoice}>
      <span style={playerMarkerStyle} className="player-marker">
        {box}
      </span>
    </div>
  );
}
