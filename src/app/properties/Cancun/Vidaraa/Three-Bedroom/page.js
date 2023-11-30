"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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

const ThreeBedroom = () => {
  const { allProperties } = useProperties();
  const { language, setLanguage } = useLanguage();

  const images_A = allProperties[2].unit_2["unit_2_imagenes_A"];
  const images_B = allProperties[2].unit_2["unit_2_imagenes_B"];

  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  return (
    <>
      <h2 className="text-xl lg:text-2xl text-sky-900 font-black  mt-[120px] text-center ">
        {/* {headerTitle VIDARAA THREE BEDROOMS} */}
        {language === es
          ? es.cun.vidaraa.unit_2.unit_2_Title
          : en.cun.vidaraa.unit_2.unit_2_Title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:px-8 ">
        <div>
          <section className="px-4">
            <UnitDetailImages images_A={images_A} images_B={images_B} />
          </section>
        </div>
        <div>
          <div className="flex items-center justify-center z-50 ">
            <AmenitiesInUnits
               unitDesc={
                language === es
                  ? es.cun.vidaraa.unit_2.unit_2_description
                  : en.cun.vidaraa.unit_2.unit_2_description
              }
              unitDesc_2={
                language === es
                  ? es.cun.vidaraa.unit_2.unit_2_description_p_2
                  : en.cun.vidaraa.unit_2.unit_2_description_p_2
              }
              unitDesc_3={
                language === es
                  ? es.cun.vidaraa.unit_2.unit_2_description_p_3
                  : en.cun.vidaraa.unit_2.unit_2_description_p_3
              }
              amenidad_1={
                language === es
                  ? es.cun.vidaraa.unit_2.unit_2_amenidades.amenidad_1
                  : en.cun.vidaraa.unit_2.unit_2_amenidades.amenidad_1
              }
              amenidad_2={
                language === es
                  ? es.cun.vidaraa.unit_2.unit_2_amenidades.amenidad_2
                  : en.cun.vidaraa.unit_2.unit_2_amenidades.amenidad_2
              }
              amenidad_3={
                language === es
                  ? es.cun.vidaraa.unit_2.unit_2_amenidades.amenidad_3
                  : en.cun.vidaraa.unit_2.unit_2_amenidades.amenidad_3
              }
              amenidad_4={
                language === es
                  ? es.cun.vidaraa.unit_2.unit_2_amenidades.amenidad_4
                  : en.cun.vidaraa.unit_2.unit_2_amenidades.amenidad_4
              }
              amenidad_5={
                language === es
                  ? es.cun.vidaraa.unit_2.unit_2_amenidades.amenidad_5
                  : en.cun.vidaraa.unit_2.unit_2_amenidades.amenidad_5
              }
              amenidad_6={
                language === es
                  ? es.cun.vidaraa.unit_2.unit_2_amenidades.amenidad_6
                  : en.cun.vidaraa.unit_2.unit_2_amenidades.amenidad_6
              }
              amenidad_7={
                language === es
                  ? es.cun.vidaraa.unit_2.unit_2_amenidades.amenidad_7
                  : en.cun.vidaraa.unit_2.unit_2_amenidades.amenidad_7
              }
              amenidad_8={
                language === es
                  ? es.cun.vidaraa.unit_2.unit_2_amenidades.amenidad_8
                  : en.cun.vidaraa.unit_2.unit_2_amenidades.amenidad_8
              }
            />
          </div>
          <div className="flex items-center justify-center mt-8 mb-4 lg:mt-12 ">
            <button
              className=" mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded "
              onClick={goBack}
            >
              {/* Volver */}
              {language === es ? es.go_back : en.go_back}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreeBedroom;
