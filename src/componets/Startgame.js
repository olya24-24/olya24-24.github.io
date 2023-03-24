import React from 'react'
import { QuizContext } from '../Context'
import { useContext } from 'react'

export default function Startgame() {

    const {gameState, setGameState} = useContext(QuizContext)

  return (
    <div>
      Startgame

      <button onClick={()=>{setGameState("game")}}>Почати тест</button>
    </div>
  )
}
