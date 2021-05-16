import React, {useState, useEffect} from 'react'
import Header from './Components/Header.js'
import CardContainer from './Components/CardContainer.js'
import Footer from './Components/Footer.js'

function App() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

  const addScore = () => {
    console.log("adding score.")
    setScore(score + 1)
  }

  const gameOver = () => {
    console.log('game over')
    setScore(0)
  }

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score)
    }
  },[score, highScore])

  return (
    <div className="main-container">
      <Header score={score} highScore={highScore}/>
      <CardContainer addScore={addScore} gameOver={gameOver}/>
      <Footer/>
    </div>
  )
}

export default App
