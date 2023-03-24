import React from 'react'
import { useContext } from 'react'
import { Questions } from '../data';
import { QuizContext } from '../Context';

export default function Endgame() {

  const {gameState, setGameState, lait, setLait, ryuzaki, setRyuzaki, ruk, setRuk} = useContext(QuizContext);

  const restart = () => {
    setLait(0);
    setRyuzaki(0);
    setRuk(0);
    setGameState("game");
  }

  return (
    <div>
     
     {lait > ryuzaki && lait > ruk ? (<div><p>Це ужос. Ти Лайт!</p> <img src="lait.jpg"/></div>) :
ryuzaki > lait && ryuzaki > ruk ? (<div><p> Штош, ти L. Іди візьми печеньку</p><img src="el.jpg" height="400px"/></div>) :
(<div><p> Ти Рюк. Прік</p><img src="ruk.jpg" height="400px"/></div>)}

        <div>
        <button onClick={restart}>Спробувати ще раз</button>
        </div>
    </div>
  )
}
