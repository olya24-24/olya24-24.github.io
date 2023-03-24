import React, { useContext } from 'react'
import { Questions } from '../data';
import { useState } from 'react';
import { QuizContext } from '../Context';

export default function Game() {
  
  const [currentQuest, setCurrentQuest] = useState(0);
  const [userVar, setUserVar] = useState("");

  const {gameState, setGameState, lait, setLait, ryuzaki, setRyuzaki, ruk, setRuk} = useContext(QuizContext);

  const nextQuest = () => {
  if (Questions[currentQuest].answer1 == userVar) {
    setLait(lait + 1);
  } else if (Questions[currentQuest].answer2 == userVar) {
    setRyuzaki(ryuzaki + 1);
  } else if (Questions[currentQuest].answer3 == userVar) {
    setRuk(ruk + 1);
  }
  if (currentQuest + 1 < Questions.length) {
    setCurrentQuest(currentQuest + 1);
  } else {
    setGameState("endgame");
  }
};

const finishQuest = () => {
  if (Questions[currentQuest].answer1 == userVar) {
    setLait(lait + 1);
  } else if (Questions[currentQuest].answer2 == userVar) {
    setRyuzaki(ryuzaki + 1);
  } else if (Questions[currentQuest].answer3 == userVar) {
    setRuk(ruk + 1);
  }
  setGameState("endgame");
};

  return (
    <div>
      <h1> { Questions[currentQuest].quest } </h1>
    
      <div>
        <button onClick={() => setUserVar("var1")}> {Questions[currentQuest].var1} </button>
        <button onClick={() => setUserVar("var2")}> {Questions[currentQuest].var2} </button>
        <button onClick={() => setUserVar("var3")}> {Questions[currentQuest].var3} </button>
      </div>

      <div> 
        {currentQuest == Questions.length - 1 ? (<button onClick={finishQuest}>Завершити</button>) 
        : 
        (<button onClick={nextQuest}>Далі</button>)}
      </div>
    </div>
  )
}
