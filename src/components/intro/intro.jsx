import React from 'react'
import './intro.css'
import Github from '../../assets/logos/github.png'
import  LinkedIn from "../../assets/logos/linkedin.png"
import Instagram from '../../assets/logos/instagram.png'
import Vector1 from '../../assets/logos/Vector1.png'
import Vector2 from '../../assets/logos/Vector2.png'
import boy from '../../assets/logos/boy.png'
import thumbup from '../../assets/logos/thumbup.png'
import glassesimoji from '../../assets/logos/glassesimoji.png'
import Crown from '../../assets/logos/crown.png'
import twitter from '../../assets/logos/twitter.png'
import FloatingDiv from '../Floating/Floating'
import {themeContext} from '../../Context';
import{useContext} from 'react';
import { motion } from 'framer-motion'

const Intro = () => {
    const transition = {duration : 1, type: 'spring' }
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode; 
 return(
     <div className='Intro'>
             <div className = 'i-left'>
             <div className='i-name'>
                 <span style={{color: darkMode? 'white':''}}>Welcome! My name is</span>
                 <span>Ezebuiro Samuel .C.</span>

                 <span>Data analyst with experience using
                     R, Microsoft Power BI and Microsoft Excel. Front-end
                     Developer with experience using ReactJS for
                     web designing and development.
                 </span>
             </div>
             <a href='https://www.linkedin.com/in/samuel-ezebuiro-b36896237/'>
             <button className='button 
             i-button'>Hire Me</button>
             </a>
             
             <div className= 'i-icons'>
                 <a href= 'https://www.linkedin.com/in/samuel-ezebuiro-b36896237/'>
                 <img src = {LinkedIn} alt= "" />
                 </a>
                 <a href= 'https://www.instagram.com/i_am_onlysam/'>
                 <img src = {Instagram} alt= "" />
                 </a>
                 <a href= 'https://github.com/sammy867/'>
                 <img src = {Github} alt= "" />
                 </a>
                 <a href= 'https://twitter.com/Samuel15072174/'>
                     <img src = {twitter} alt = "" />
                 </a>

             </div>

             </div>


             <div className='i-right'>
                 <img src = {Vector1} alt="" />
                 <img src = {Vector2} alt="" />
                 <img src = {boy} alt="" />
                 <motion.img
                 initial={{left:'-36%'}}
                 whileInView={{left: '-18%'}}
                 transition={transition}
                 src = {glassesimoji} alt = "" />

                 <motion.div
                 initial={{top:'-4%', left:'74%'}}
                 whileInView={{left: '65%'}}
                 transition={transition}
                 style={{top: '-4%', left: '60%'}}
                 className='floating-div'>
                    <FloatingDiv image= {Crown} txt1= 'Web' txt2 = 'Developer'/>
                 </motion.div>

                 <motion.div
                 initial={{left:'-9rem', top:'23.65rem'}}
                 whileInView={{left:'1rem'}}
                 transition={transition}
                 style={{top: '23.6rem', left: '2.2rem'}}
                 className='floating-div'>
                     <FloatingDiv image={thumbup} txt1 = 'Best Design' txt2='Idea' /> 
                 </motion.div>
                 {/*blur section*/}
                 <div className='blur' style={{background: "rgb(238 210 255)"}}></div>
                 <div className='blur' style={{
                     background: "#C1F5FF",
                     top: '20rem',
                     width: '21rem',
                     height: '11rem',
                     left: '-9rem'
                 }}
             ></div>
             </div>
         </div> 

 );
}
export default Intro