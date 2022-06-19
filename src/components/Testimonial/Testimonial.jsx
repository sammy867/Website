import React from 'react'
import './Testimonial.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import profilePic1 from '../../assets/logos/profile1.jpg'
import profilePic2 from '../../assets/logos/profile2.jpg'
import profilePic3 from '../../assets/logos/profile3.jpg'
import profilePic4 from '../../assets/logos/profile4.jpg'
import {Pagination} from 'swiper';
import'swiper/css/pagination';
import 'swiper/css'
const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
      "I have worked with him for over 5 months and so far I am very satisfied with his work",
    },

    {
      img: profilePic2,
      review:
      "I am very happy that I got to meet this wonderful Developer",
    },

    {
      img: profilePic3,
      review:
      "He truly delivers an exceptional work.I am so glad I got to work with him",
    },

    {
      img: profilePic4,
      review:
      "I love his work ethics.He carries out every project with passion and vigor. He is easy to work with. ",
    },
  ]
  return (
    <div className="t-wrapper" id='Testimonials'>
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional work </span>
        <span>from me...</span>
        <div className="blur t-blur1"  style={{background: "var(--purple)"}}></div>
        <div className="blur t-blur2"  style={{background: "var(--skyblue)"}}></div>
      </div>
      {/* slider */}
      <Swiper

      modules={[Pagination]}
      slidesPerView={1}
      pagination={{clickable:true}}
      
      >
        {clients.map((client,index) =>{
          return(
            <SwiperSlide key={index}>
              <div className="testimonial">
              <img src= {client.img} alt=''/>
              <span>{client.review}</span>
              </div>
              
            </SwiperSlide>
          )
        })}
        
       

      </Swiper>

    </div>
  )
}

export default Testimonial