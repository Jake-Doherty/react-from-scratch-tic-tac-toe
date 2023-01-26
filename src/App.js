import './App.css';
import GameBoard from './components/GameBoard/GameBoard.js';
import GameController from './components/GameController/GameController.js';
import StatusBar from './components/StatusBar/StatusBar.js';

function App() {
  return (
    <div className="App">
      <StatusBar />
      <GameController />
      <GameBoard />
    </div>
  );
}

export default App;
