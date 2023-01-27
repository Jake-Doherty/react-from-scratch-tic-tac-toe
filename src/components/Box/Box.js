import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext.js';

export default function Box({ box, index }) {
  // console.log('box props', { box });
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

  return (
    <div className="board-cell" onClick={handleChoice}>
      {box}
    </div>
  );
}
