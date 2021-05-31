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

  const toggleInfo = (e) => {
    const info = e.target.classList.contains('card') ? 
      e.target.querySelector('.animal-info')
      :
      e.target

    if (info.classList.contains('active')) {
      info.classList.remove('active')
    } else {
      info.classList.add('active')
    }
  }
  
  return(
    <div
      style={{
        backgroundImage: `url(${props.image})`
      }}
      id={props.id}
      className='card'
      onClick={updateCard}
      onMouseEnter={toggleInfo}
      onMouseLeave={toggleInfo}
    >
      <div className='animal-info'>
      {props.text}
      </div>
    </div>
  )
}

export default Card
