"use client";
import { HiBadgeCheck } from "react-icons/hi";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./carrousel.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

const UnitDetailImages = ({ images_A, images_B }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div>
        <section className="mt-4 px-4  ">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className=" "
          >
            {images_A.map((image) => (
              <SwiperSlide key={image}>
                <img src={image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <section className="px-4">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={6}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {images_B.map((image) => (
              <SwiperSlide key={image}>
                <img src={image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </>
  );
};

export default UnitDetailImages;
