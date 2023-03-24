import logo from './logo.svg';
import './App.css';
import Startgame from './componets/Startgame';
import Game from './componets/Game';
import Endgame from './componets/Endgame';
import { useState } from 'react';
import { QuizContext } from './Context';

function App() {

  const [gameState, setGameState] = useState("startgame");
  const [lait, setLait] = useState(0);
  const [ryuzaki, setRyuzaki] = useState(0);
  const [ruk, setRuk] = useState(0);

  return (
    <div className="App">
      <h1>Тест</h1>
      
      <QuizContext.Provider value={{gameState, setGameState, lait, setLait, ryuzaki, setRyuzaki, ruk, setRuk}}>      
      {gameState === "startgame" && <Startgame/>}
      {gameState === "game" && <Game/>}
      {gameState === "endgame" && <Endgame/>}
      </QuizContext.Provider>

    </div>
  );
}

export default App;
