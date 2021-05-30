import React, { useState, useEffect } from 'react'
import Card from './Card.js'
import { animalList } from '/Users/shan/code/js_projects/memory-game/src/Animals/animals.js'

function CardContainer(props) {
  const [cards, setCards] = useState(animalList(12))

  const [reset, setReset] = useState(false)

  const shuffle = (array) => {
    const result = []
    while (array.length > 0) {
      result.push(array.splice(Math.floor(Math.random() * array.length), 1)[0])
    }
    return result
  }

  useEffect(() => {
    setCards(animalList(props.cardCount))
  }, [props.cardCount])

  const handleClick = (clickStatus) => {
    setReset(false)
    const newCardList = shuffle(cards)
    if (clickStatus) {
      setCards(newCardList)
      setReset(true)
      props.gameOver()
    } else {
      props.addScore()
      setCards(newCardList)
    }
  }

  return (
    <div className='cards-container'>
      {cards.map(card => {
      return <Card key={card.index} reset={reset} id={card.index} image={card.image} text={card.name} handleClick={handleClick}/>
    })}
    </div>
  )
  //.slice(0, 3)
}

export default CardContainer
