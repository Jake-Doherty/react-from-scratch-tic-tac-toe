const { createContext, useState } = require('react');

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(['X', 'X', 'X', 'O', '', '', '', '', '']);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameMessage, setGameMessage] = useState('Click a tile to start!');
  const [active, setActive] = useState(true);

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
