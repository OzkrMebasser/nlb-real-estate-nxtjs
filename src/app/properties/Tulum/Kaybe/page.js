"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useProperties } from "@/context/PropertiesProvider";
import useLanguage from "@/context/hooks/useLanguage";
import en from "@/context/languages/en";
import es from "@/context/languages/es";
import Link from "next/link";
import { MdOutlineSwipe } from "react-icons/md";
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../../../carrousel.css";

// import required modules
// import { FreeMode, Navigation, Thumbs } from "swiper";
// import UnitDetailImages from "@/app/components/Cards/UnitDetailImages";
// import AmenitiesInUnits from "@/app/components/Amenities/AmenitiesInUnits";
import PropertyDetailImages from "@/app/components/Cards/PropertyDetailImages";
import AmenitiesInProject from "@/app/components/Amenities/AmenitiesInProject";

const Kaybe = () => {
  const { allProperties } = useProperties();
  const { language, setLanguage } = useLanguage();


  const images = allProperties[5].imagesCube;
  const desarrollo = allProperties[5].desarrollo;

  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  return (
    <>
      <section className="bg-white ">
        <div className="px-6 py-10 mx-auto mt-8 ">
          <div className="mt-8 lg:mx-6 lg:flex lg:items-center lg:space-between">
            <div className="mt-6 lg:mt-0 lg:mx-4 ">
              <h2 className=" uppercase max-w-lg  mt-4 lg:mt-2 tracking-tight text-3xl font-black text-[#9c8966] sm:text-4xl sm:leading-none">
                KAYBÉ
              </h2>

              <p className="text-base text-gray-700 md:text-lg mb-2">
                {language === es
                  ? es.tul.peregrina.kaybe_paragraph_1
                  : en.tul.peregrina.kaybe_paragraph_1}
              </p>
              <p className="text-base text-gray-700 md:text-lg mb-2">
                {language === es
                  ? es.tul.peregrina.kaybe_paragraph_2
                  : en.tul.peregrina.kaybe_paragraph_2}
              </p>

              <h4 className="max-w-lg mb-6 mt-4 text-xl font-black text-sky-950 ">
                {language === es
                  ? es.tul.peregrina.amenities_peregrina.title
                  : en.tul.peregrina.amenities_peregrina.title}
              </h4>

              <AmenitiesInProject
                amenidad_1={
                  language === es
                    ? es.tul.peregrina.kaybe_amenidades.security
                    : en.tul.peregrina.kaybe_amenidades.security
                }
                amenidad_2={
                  language === es
                    ? es.tul.peregrina.kaybe_amenidades.gymYogaSpa
                    : en.tul.peregrina.kaybe_amenidades.gymYogaSpa
                }
                amenidad_3={
                  language === es
                    ? es.tul.peregrina.kaybe_amenidades.swimmingPool
                    : en.tul.peregrina.kaybe_amenidades.swimmingPool
                }
                amenidad_4={
                  language === es
                    ? es.tul.peregrina.kaybe_amenidades.motorCarLobby
                    : en.tul.peregrina.kaybe_amenidades.motorCarLobby
                }
                amenidad_5={
                  language === es
                    ? es.tul.peregrina.kaybe_amenidades.eventsHall
                    : en.tul.peregrina.kaybe_amenidades.eventsHall
                }
                amenidad_6={
                  language === es
                    ? es.tul.peregrina.kaybe_amenidades.playgroundSnackBar
                    : en.tul.peregrina.kaybe_amenidades.playgroundSnackBar
                }
                amenidad_7={
                  language === es
                    ? es.tul.peregrina.kaybe_amenidades.threePaddleCourts
                    : en.tul.peregrina.kaybe_amenidades.threePaddleCourts
                }
                amenidad_8={
                  language === es
                    ? es.tul.peregrina.kaybe_amenidades.iconicAccess
                    : en.tul.peregrina.kaybe_amenidades.iconicAccess
                }
                amenidad_9={
                  language === es
                    ? es.tul.peregrina.kaybe_amenidades.yogaDomePalapa
                    : en.tul.peregrina.kaybe_amenidades.yogaDomePalapa
                }
                amenidad_10={
                  language === es
                    ? es.tul.peregrina.kaybe_amenidades.viewpoint
                    : en.tul.peregrina.kaybe_amenidades.viewpoint
                }
                amenidad_11={
                  language === es
                    ? es.tul.peregrina.kaybe_amenidades.terrace
                    : en.tul.peregrina.kaybe_amenidades.terrace
                }
                amenidad_12={
                  language === es
                    ? es.tul.peregrina.kaybe_amenidades.sculptures
                    : en.tul.peregrina.kaybe_amenidades.sculptures
                }
              />
            </div>
            <div className="mt-4 object-cover w-[330px] mx-auto lg:w-[435px]  lg: justify-center">
              {" "}
              {/*Imagenes Swiper CUBO*/}
              <PropertyDetailImages images={images} altImgs={`${desarrollo}-Images-not-available`}/>
              <div className="mx-auto items-center text-center relative bg-[white] mt-4">
                <MdOutlineSwipe className=" text-[#058a94] mx-auto z-50 text-4xl text-center" />
              </div>
              <span className="flex justify-center">
                <div className="flex items-center justify-center mb-4  ">
                  <button
                    className=" mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded "
                    onClick={goBack}
                  >
                    {/* Volver */}
                    {language === es ? es.go_back : en.go_back}
                  </button>
                </div>
              </span>
            </div>
          </div>
        </div>
      </section> 
      <section>
        
    
        <h4 className=" px-6  text-center mb-2 mt-4 text-xl font-black text-[#9c8966] ">
            {/* Slogan Kaybe */}
          
            {language === es ? es.tul.kaybe.slogan : en.tul.kaybe.slogan}             
          </h4>

          <span className="flex justify-center">
          <h4 className=" text-center max-w-lg mb-6 mt-4 text-xl font-black text-sky-950 ">
            {/* Da click para ver mas detalles */}
            {language === es ? es.more_details : en.more_details}
          </h4>
         
        </span>
        <div className="px-8 mb-2 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:px-12">
          {/* 1 ESTUDIO */}
          <Link
            className="px-4 py-2 text-center bg-blue-500 hover:bg-blue-600 text-white rounded"
            href="/properties/Tulum/Kaybe/Single-Family"
          >
            {language === es
              ? es.tul.kaybe.singleLots
              : en.tul.kaybe.singleLots}
          </Link>

          {/* 2 RECÁMARAS */}
          <Link
            className="px-4 py-2 text-center bg-blue-500 hover:bg-blue-600 text-white rounded"
            href="/properties/Tulum/Kaybe/Macrolots"
          >
           {language === es
              ? es.tul.kaybe.macroLots
              : en.tul.kaybe.macroLots}
          </Link>

          <Link
            className="px-4 py-2 text-center bg-blue-500 hover:bg-blue-600 text-white rounded"
            href="/properties/Tulum/Kaybe/Premium-Macrolots"
          >
            {/* KAYBE */}
            {language === es
              ? es.tul.kaybe.macroLotsPrm
              : en.tul.kaybe.macroLotsPrm}
          </Link>

          {/* <Link
            className="px-4 py-2 text-center bg-blue-500 hover:bg-blue-600 text-white rounded"
            href="/properties/Cozumel/Athimar_Cozumel/Penthouse"
          >
            PENTHOUSE
          </Link> */}
        </div>
        <div className="flex justify-center mt-6 ">
        <h4 className=" text-center max-w-lg  mt-4 text-xl font-black text-sky-950 ">
          {/* Ubicación */}
          {language === es ? es.location : en.location}
        </h4>
      </div>
      <div className=" inset-0 h-[550px] mt-4 mb-8 px-4 lg:px-12 ">
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="map"
          scroll="yes"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=KAYBÉ&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
      </section>
    </>
  );
};

export default Kaybe;

