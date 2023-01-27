import './App.css';
import GameBoard from './components/GameBoard/GameBoard.js';
import StatusBar from './components/StatusBar/StatusBar.js';

function App() {
  return (
    <div className="App">
      <StatusBar />
      <GameBoard />
    </div>
  );
}

export default App;
