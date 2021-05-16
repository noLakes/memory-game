import React, { useState, useEffect } from 'react'

function Card(props) {
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    const resetPicked = () => {
      if (clicked) {
        setClicked(false)
      }
    }

    if (props.reset) {
      resetPicked()
    }
  },[props.reset, clicked])

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
