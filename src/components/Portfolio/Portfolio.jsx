import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Almost from "../../assets/almost.png";
import Retention from "../../assets/logos/retention.png";
import Omniscript from "../../assets/logos/Omniscript.png";
import Actions from "../../assets/logos/Actions.png";
import Finall from "../../assets/logos/finall.png";
import "swiper/css";
import { themeContext } from "../../Context";
import { useContext } from "react";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="Portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Almost} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Retention} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Omniscript} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Actions} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://finall-frontend.vercel.app">
            <img src={Finall} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
