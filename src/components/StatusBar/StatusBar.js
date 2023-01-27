import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext.js';

export default function StatusBar() {
  const { gameMessage } = useContext(GameContext);
  return (
    <div className="status-bar">
      <h1>Tic-Tac-Toe</h1>
      <div className="status-bar__message">{gameMessage}</div>
    </div>
  );
}
