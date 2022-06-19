import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Sidebar from '../../assets/logos/sidebar.png'
import Ecommerce from '../../assets/logos/ecommerce.png'
import HOC from '../../assets/logos/hoc.png'
import MusicApp from '../../assets/logos/musicapp.png'
import Finall from '../../assets/logos/finall.png'
import 'swiper/css'
import {themeContext} from '../../Context';
import{useContext} from 'react';
const Portfolio = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id='Portfolio'>

        {/* heading */}
        <span  style={{color:darkMode? "white":""}}>Recent Projects</span>
        <span>Portfolio</span>

        {/* slider */}
        <Swiper
        spaceBetween={30}
        slidesPerView={4}
        grabCursor = {true}
        className= "portfolio-slider">
            <SwiperSlide>
                <img src={Sidebar} alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerce} alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={HOC} alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <a href='https://finall-frontend.vercel.app'>
                <img src={Finall} alt='' />
                </a>
            </SwiperSlide>






        </Swiper>
    </div>
  )
}

export default Portfolio