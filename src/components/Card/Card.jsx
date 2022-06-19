import React from 'react'
import './Card.css'

const Card = ({emoji,heading,detail}) => { 
  return (
      <div className='card'>
          <img src = {emoji} alt='' />
          <span>{heading}</span>
          <span>{detail}</span>
          <a href='https://www.linkedin.com/in/samuel-ezebuiro-b36896237/'>
            <a href='https://www.react.com'>
          <button className = 'c-button'>LEARN MORE</button>
            </a>

          </a>
          </div> 

 
  )
}

export default Card