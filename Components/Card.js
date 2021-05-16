import React, { useState } from 'react'

function Card(props) {
  const [clicked, setClicked] = useState(false)

  const resetPicked = () => {
    if (clicked) {
      setClicked(false)
    }
  }

  if (props.reset) {
    resetPicked()
  }

  const updateCard = (e) => {
    clicked ? props.handleClick(true) : props.handleClick(false)

    setClicked(true)
  }
  
  return(
    <div 
      id={props.id}
      className='card'
      onClick={updateCard}
    >
      {props.text}
    </div>
  )
}

export default Card
