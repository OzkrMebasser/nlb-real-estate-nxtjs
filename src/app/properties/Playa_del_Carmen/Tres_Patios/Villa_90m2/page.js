"use client";
import { HiBadgeCheck } from "react-icons/hi";

import React, { useRef, useState } from "react";
import { useRouter } from 'next/navigation';
import { useProperties } from "@/context/PropertiesProvider";
import useLanguage from "@/context/hooks/useLanguage";
import en from "@/context/languages/en";
import es from "@/context/languages/es";
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../../../../carrousel.css";

// import required modules
// import { FreeMode, Navigation, Thumbs } from "swiper";
import UnitDetailImages from "@/app/components/Cards/UnitDetailImages";

const Villa90m2 = () => {
  const { allProperties } = useProperties();
  const { language, setLanguage } = useLanguage();

  console.log("AllProperties", allProperties);

    const headerTitle = allProperties[0].unit_1["unit_1_Title"];
    const unitDesc = allProperties[0].unit_1["unit_1_description"];
    const images_A = allProperties[0].unit_1["unit_1_imagenes_A"];
    const images_B = allProperties[0].unit_1["unit_1_imagenes_B"];

   const amenidad_1 = allProperties[0].unit_1.unit_1_amenidades["amenidad_1"];

   const amenidad_2 = allProperties[0].unit_1.unit_1_amenidades["amenidad_2"];
   const amenidad_3 = allProperties[0].unit_1.unit_1_amenidades["amenidad_3"];
   const amenidad_4 = allProperties[0].unit_1.unit_1_amenidades["amenidad_4"];
   const amenidad_5 = allProperties[0].unit_1.unit_1_amenidades["amenidad_5"];
   const amenidad_6 = allProperties[0].unit_1.unit_1_amenidades["amenidad_6"];
   const amenidad_7 = allProperties[0].unit_1.unit_1_amenidades["amenidad_7"];
   const amenidad_8 = allProperties[0].unit_1.unit_1_amenidades["amenidad_8"];

  


  // const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <>
      <h2 className="text-xl lg:text-2xl text-sky-900 font-black  mt-[120px] text-center ">
        {headerTitle}
        
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:px-8 ">
        <div>
          <section className="px-4">
          <UnitDetailImages
           images_A={images_A}
           images_B={images_B}
          />
          </section>
          
        </div>
        <div>
          <div className="flex items-center justify-center z-50 ">
            <div className="text-justify w-[800px] bg-[white] p-4 lg:p-4 lg:mt-10 ">
              <p className="text-justify">
                {/* Contamos con 6 Departamentos en villas por cada módulo de 90 m²
                y/o 110 m². */}
                {unitDesc}
                {/* 
                ASI ES COMO VA A AQUEDAR PARA LAS TRADUCIONES
                {language === es ? es[amenidad_1] : en[amenidad_1]} */}

              </p>
              <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0 mt-6 lg:mt-12">
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                    {/* 3 Recámaras */}
                    {amenidad_1}
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




export default Villa90m2;
