// import { useCheckResults } from '../hooks/useCheckResults.js';

const { createContext, useState } = require('react');

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameMessage, setGameMessage] = useState('Click a tile to start!');
  const [active, setActive] = useState(true);

  // const { checkWinner, isTie } = useCheckResults();

  const checkWinner = () => {
    if (board[0] === board[1] && board[0] === board[2] && board[0] !== '') return board[0];
    if (board[3] === board[4] && board[3] === board[5] && board[3] !== '') return board[3];
    if (board[6] === board[7] && board[6] === board[8] && board[6] !== '') return board[6];
    if (board[0] === board[3] && board[0] === board[6] && board[0] !== '') return board[0];
    if (board[1] === board[4] && board[1] === board[7] && board[1] !== '') return board[1];
    if (board[2] === board[5] && board[2] === board[8] && board[2] !== '') return board[2];
    if (board[0] === board[4] && board[0] === board[8] && board[0] !== '') return board[0];
    if (board[2] === board[4] && board[2] === board[6] && board[2] !== '') return board[2];
  };

  const isTie = () => {
    if (board.every((box) => box !== '')) return true;
  };

  const checkGameStatus = () => {
    if (!active) return;
    const winner = checkWinner();
    if (winner) {
      setGameMessage(`${winner} has won!`);
      setActive(false);
    } else if (isTie()) {
      setGameMessage('It is a tie!');
      setActive(false);
    }
  };

  checkGameStatus();

  return (
    <GameContext.Provider
      value={{
        board,
        setBoard,
        currentPlayer,
        setCurrentPlayer,
        gameMessage,
        setGameMessage,
        active,
        setActive,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
