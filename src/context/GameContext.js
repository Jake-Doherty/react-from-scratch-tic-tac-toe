const { createContext, useState } = require('react');

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(['X', 'X', 'X', 'O', '', '', '', '', '']);

  return <GameContext.Provider value={{ board, setBoard }}>{children}</GameContext.Provider>;
};

export { GameContext, GameProvider };
