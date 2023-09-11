"use client";


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
import AmenitiesInUnits from "@/app/components/Amenities/AmenitiesInUnits";

const OneBedroom = () => {
  const { allProperties } = useProperties();
  const { language, setLanguage } = useLanguage();

  console.log("AllProperties", allProperties);

    const headerTitle = allProperties[1].unit_1["unit_1_Title"];
    const unitDesc = allProperties[1].unit_1["unit_1_description"];
    const images_A = allProperties[1].unit_1["unit_1_imagenes_A"];
    const images_B = allProperties[1].unit_1["unit_1_imagenes_B"];

   const amenidad_1 = allProperties[1].unit_1.unit_1_amenidades["amenidad_1"];

   const amenidad_2 = allProperties[1].unit_1.unit_1_amenidades["amenidad_2"];
   const amenidad_3 = allProperties[1].unit_1.unit_1_amenidades["amenidad_3"];
   const amenidad_4 = allProperties[1].unit_1.unit_1_amenidades["amenidad_4"];
   const amenidad_5 = allProperties[1].unit_1.unit_1_amenidades["amenidad_5"];
   const amenidad_6 = allProperties[1].unit_1.unit_1_amenidades["amenidad_6"];
   const amenidad_7 = allProperties[1].unit_1.unit_1_amenidades["amenidad_7"];
   const amenidad_8 = allProperties[1].unit_1.unit_1_amenidades["amenidad_8"];

  


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
           <AmenitiesInUnits
                unitDesc={unitDesc}
                amenidad_1={amenidad_1}
                amenidad_2={amenidad_2}
                amenidad_3={amenidad_3}
                amenidad_4={amenidad_4}
                amenidad_5={amenidad_5}
                amenidad_6={amenidad_6}
                amenidad_7={amenidad_7}
           />
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
    </>
  );
}




export default OneBedroom;
