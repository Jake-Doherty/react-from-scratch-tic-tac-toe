import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext.js';
import './StatusBar.css';

export default function StatusBar() {
  const {
    currentPlayer,
    gameMessage,
    setGameMessage,
    setBoard,
    active,
    setActive,
    setCurrentPlayer,
  } = useContext(GameContext);

  const handleGameReset = () => {
    setBoard(['', '', '', '', '', '', '', '', '']);
    setActive(true);
    setCurrentPlayer('X');
    setGameMessage('Click a box to start!');
  };

  if (active)
    return (
      <div className="status-bar">
        <h1>Tic-Tac-Toe</h1>
        <h3 className="player-turn">{`${currentPlayer}, it's your turn!`}</h3>
        <div className="status-bar-message">{gameMessage}</div>
      </div>
    );

  if (!active)
    return (
      <div className="status-bar">
        <h1>Tic-Tac-Toe</h1>
        <div className="status-bar-message blink game-result">{gameMessage}</div>
        <button className="reset-button" onClick={handleGameReset}>
          Reset Game?
        </button>
      </div>
    );
}
