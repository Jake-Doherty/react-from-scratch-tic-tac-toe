import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext.js';

export default function StatusBar() {
  const { currentPlayer, gameMessage, setBoard, active, setActive, setCurrentPlayer } =
    useContext(GameContext);

  const handleGameReset = () => {
    setBoard(['', '', '', '', '', '', '', '', '']);
    setActive(true);
    setCurrentPlayer('X');
  };

  if (active)
    return (
      <div className="status-bar">
        <h1>Tic-Tac-Toe</h1>
        <h3>{`${currentPlayer}, it's your turn!`}</h3>
        <div className="status-bar__message">{gameMessage}</div>
      </div>
    );

  if (!active)
    return (
      <div className="status-bar">
        <h1>Tic-Tac-Toe</h1>
        <div className="status-bar__message">{gameMessage}</div>
        <button onClick={handleGameReset}>Reset Game?</button>
      </div>
    );
}
