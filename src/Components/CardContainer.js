import React, { useState } from 'react'
import Card from './Card.js'

function CardContainer(props) {
  const [cards, setCards] = useState([
    {
      id: 1,
      text: 'Greg'
    },
    {
      id: 2,
      text: 'Fimmion'
    },
    {
      id: 3,
      text: 'Maureene'
    },
    {
      id: 4,
      text: 'Sandrop'
    },
    {
      id: 5,
      text: 'Michigan'
    },
    {
      id: 6,
      text: 'Jackson'
    },
    {
      id: 7,
      text: 'Meeple'
    },
    {
      id: 8,
      text: 'Soompie'
    },
    {
      id: 9,
      text: 'Jeffe'
    },
    {
      id: 10,
      text: 'Bramble'
    },
    {
      id: 11,
      text: 'Roombie'
    },
    {
      id: 12,
      text: 'Limble'
    },
  ])

  const shuffle = (array) => {
    const result = []
    while (array.length > 0) {
      result.push(array.splice(Math.floor(Math.random() * array.length), 1)[0])
    }
    return result
  }

  const handleClick = (gameOver, addScore) => {
    
  }

  const cardList = () => {
    return shuffle(cards.map(card => {
      <Card id={card.id} text={card.text} handleClick={handleClick}/>
    }))
  }

  return (
    <div className='cards-container'>
      <ul className='card-list'>
        {cardList()}
      </ul>
    </div>
  )
}

export default CardContainer
