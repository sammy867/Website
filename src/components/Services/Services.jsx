import React from 'react'
import './Services.css'
import HeartEmoji from '../../assets/logos/heartemoji.png'
import Glasses from '../../assets/logos/glasses.png'
import Humble from '../../assets/logos/humble.png'
import Card from '../Card/Card'
import Resume from './Samuel_Ezebuiro_Resume.PDF'
import {themeContext} from '../../Context';
import{useContext} from 'react';
import {motion} from 'framer-motion';

const Services = () => {

  const transition = {duration : 1, type: 'spring' }

  const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode; 
  return (
    <div className='services' id='Services'>

        {/* left side */}
        {/* always remember to break sentences */}
        <div className='awesome'>
            <span style={{color:darkMode? "white":""}}>My Awesome</span>
            <span>Services</span>
            <span>I build responsive,user-friendly websites within the shortest possible time. Also,as
                a data analyst, I carry out various operations in data analytics such as data wrangling,
                data visualization, data modelling amongst others.
                <br />
                I am also proficient in using tools like the 
                R programming language, Microsoft Excel and Microsoft Power BI to carry out data analytics and React
                JS for efficient web development.
                 </span>
                 <a href = {Resume} download>
                   
                 <button className='button s-button'>Download CV</button>
                 </a>
                 <div className='blur s-blurl'  style={{background: "#ABF1FF94"}}></div>
        </div>

        {/* right side*/}

        <div className='cards'>


          <motion.div
          initial={{left:'25%'}}
          whileInView={{left:'12rem'}}
          transition={transition}
          style = {{left: '8rem'}}>
            <Card
            emoji = {HeartEmoji}
            heading = {'Design'}
            detail = {"Figma, Spline, Sketch, Paint3D, Adobe Illustrator, Adobe xd"}
            />
            </motion.div>


            <motion.div
            initial={{left:'25%'}}
            whileInView={{left:'-10rem'}}
            transition={transition}
            
            
            style = {{top:'11rem' , left: '-9rem'}}>
              <Card
              emoji = {Glasses}
              heading = {'Front-End Developer'}
              detail = {'HTML, CSS, JavaScript, ReactJS,React Native,NodeJs,SCSS,Bootstrap 5'}
              />
              </motion.div>

              
            <motion.div
            initial={{left:'100%'}}
            whileInView={{left:'10rem'}}
            transition={transition}
            style = {{top:'20rem' , left: '8rem'}}>
              <Card
              emoji = {Humble}
              heading = {'Data Analyst'}
              detail = {'R, Microsoft Power BI, Microsoft Excel,Shiny,ggplot2,tableau,Python'}
              />
              
            </motion.div>
            <div className="blur s-blur2" style = {{background: "var(--purple)"}}>

            </div>
            
            


          </div>
        
        </div>



    
  )
}

export default Services