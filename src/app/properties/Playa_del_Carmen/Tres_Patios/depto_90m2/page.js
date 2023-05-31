"use client";
import { HiBadgeCheck } from "react-icons/hi";

import React, { useRef, useState } from "react";
import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./carrousel.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <>
      <h2 className="text-xl lg:text-2xl text-sky-900 font-black  mt-[120px] text-center ">
          Departamento en villa de 90 m²
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:px-8 ">
        
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
              <SwiperSlide>
                <img src="https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FplanoTresPatios90m2.png?alt=media&token=3d5bb331-c1ef-4676-9cd0-32adbe7a1533&_gl=1*wgsiju*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY4NTUwNTYyOS45LjEuMTY4NTUwNjU4Ny4wLjAuMA.." />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
              </SwiperSlide>
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
              <SwiperSlide>
                <img src="https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FplanoTresPatios90m2.png?alt=media&token=3d5bb331-c1ef-4676-9cd0-32adbe7a1533&_gl=1*wgsiju*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY4NTUwNTYyOS45LjEuMTY4NTUwNjU4Ny4wLjAuMA.." />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
              </SwiperSlide>
            </Swiper>
          </section>
        </div>
        <div>
        <div className="flex items-center justify-center z-50 ">
    
      <div className="text-justify w-[800px] bg-[white] p-4 lg:p-4 lg:mt-10 ">
       
        <p className="text-justify">
          Contamos con 6 Departamentos en villas por cada módulo de 90 m² y/o 110
          m².
        </p>
        <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0 mt-6 lg:mt-12">
          <ul className="space-y-3">
            <li className="flex">
              <span className="mr-1">
    
                <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
              </span>
              3 Recámaras
            </li>
            <li className="flex">
              <span className="mr-1">
                <HiBadgeCheck className="w-5 h-5 text-teal-500" />
              </span>
              Sala
            </li>
            <li className="flex">
              <span className="mr-1">
                <HiBadgeCheck className="w-5 h-5 text-teal-500" />
              </span>
              Comedor
            </li>
            <li className="flex">
              <span className="mr-1">
                <HiBadgeCheck className="w-5 h-5 text-teal-500" />
              </span>
              Closets
            </li>
          </ul>
          <ul className="space-y-3">
            <li className="flex">
              <span className="mr-1">
                <HiBadgeCheck className="w-5 h-5 text-teal-500" />
              </span>
              2 Baños
            </li>
            <li className="flex">
              <span className="mr-1">
                <HiBadgeCheck className="w-5 h-5 text-teal-500" />
              </span>
              Cocina
            </li>
            <li className="flex">
              <span className="mr-1">
                <HiBadgeCheck className="w-5 h-5 text-teal-500" />
              </span>
              Terraza
            </li>
            <li className="flex">
              <span className="mr-1">
                <HiBadgeCheck className="w-5 h-5 text-teal-500" />
              </span>
              Flex
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center mt-8 mb-4 lg:mt-12 ">
          <button
            className=" mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded "
            onClick={goBack}
          >
            Volver
          </button>
        </div>
  
      </div>
    </div>
        </div>
      </div>
    </>
  );
}
