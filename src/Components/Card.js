import React, { useState, useEffect } from 'react'

function Card(props) {
  const [clicked, setClicked] = useState(false)
  const [loading, setLoading] = useState(true)

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

  useEffect(() => {

  })

  const updateCard = (e) => {
    clicked ? props.handleClick(true) : props.handleClick(false)

    setClicked(true)
  }
  
  return(
    <div
      style={{
        backgroundImage: `url(${props.image})`,
        //backgroundImage: `url(${props.image.replace('-400x300', '')})`,
      }}
      id={props.id}
      className='card'
      onClick={updateCard}
    >
      {props.text}
    </div>
  )
}

export default Card
