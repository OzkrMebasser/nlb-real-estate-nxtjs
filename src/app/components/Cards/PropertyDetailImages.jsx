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
    <>
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
          className="bg-gradient-to-r from-blue-900  via-sky-900  to-teal-500"
        >
          <SwiperSlide className="">
            <img src="https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTresRiosCubo.jpg?alt=media&token=7cb9a5a8-6b19-4f44-ab18-e7c17d96bb79&_gl=1*5cigs0*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY4NTUwNTYyOS45LjEuMTY4NTUwNTkxNC4wLjAuMA.." />
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

   
    </>
  );
}
