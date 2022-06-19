import React from 'react'
import './Footer.css'
import Wave from '../../assets/logos/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'
const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt= '' style={{width: "100%"}} />
        <div className="f-content">
          <span>samuelezebuiro@gmail.com</span>
          <div className="f-icons">
            <a href='https://www.instagram.com/i_am_onlysam/'>
            <Insta color='white'  size='3rem' />
            </a>
            <a href='https://www.linkedin.com/in/samuel-ezebuiro-b36896237/'>
            <Linkedin color='white'  size='3rem' />
            </a>
            <a href='https://github.com/sammy867/'>
            <Github color='white'  size='3rem' />
            </a>
            <a href='https://twitter.com/Samuel15072174'>
              <Twitter color='white' size='3rem' />
            </a>
          </div>
        
        </div>
    </div>
  
  )
}

export default Footer