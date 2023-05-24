import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./swipper.css";

// import required modules
import { EffectCube, Pagination } from "swiper";

export default function PropertyDetailImages() {
  return (
   
    
    <div>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/1824392/pexels-photo-1824392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/3255246/pexels-photo-3255246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/427649/pexels-photo-427649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/9279740/pexels-photo-9279740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/16348514/pexels-photo-16348514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </SwiperSlide>
        
      </Swiper>
     
        </div>
 
  );
}
