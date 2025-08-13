import React from 'react'
import './Card.css'

const Card = ({emoji,heading,detail}) => { 
  return (
      <div className='card'>
          <img src = {emoji} alt='' />
          <span>{heading}</span>
          <span>{detail}</span>
          <a href='https://www.linkedin.com/in/samuel-ezebuiro-b36896237/'>
            <a href='https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-omni-studio-developer-credential'>
          <button className = 'c-button'>LEARN MORE</button>
            </a>

          </a>
          </div> 

 
  )
}

export default Card