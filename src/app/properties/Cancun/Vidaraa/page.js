"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useLanguage from "@/context/hooks/useLanguage";
import en from "@/context/languages/en";
import es from "@/context/languages/es";
import PropertyDetailImages from "../../../components/Cards/PropertyDetailImages";
import AmenitiesInProject from "../../../components/Amenities/AmenitiesInProject";
import { useProperties } from "@/context/PropertiesProvider";
import { MdOutlineSwipe } from "react-icons/md";
import { HiBadgeCheck } from "react-icons/hi";

const VidaraaPage = () => {
  const { homeProperties } = useProperties();
  const { language, setLanguage } = useLanguage();

  const { allProperties } = useProperties();

 
  const images = allProperties[1].imagesCube;



  const router = useRouter();
  return (
    <>
      <section className="bg-white ">
        <div className="px-6 py-10 mx-auto mt-8">
          <div className="mt-8 lg:mx-6 lg:flex lg:items-center lg:space-between">
            <div className="mt-6 lg:mt-0 lg:mx-4">
              <h2 className=" uppercase max-w-lg  mt-4 lg:mt-2 tracking-tight text-3xl font-black text-[#9c8966] sm:text-4xl sm:leading-none">
                VIDARAA TOWER
              </h2>
              <h3 className="mb-6">{es.cun.vidaraa.subTitleStrong}</h3>
              <p className="text-base text-gray-700 md:text-lg mb-2">
                {/**/}
                {/* <strong>UN PROYECTO DONDE EL LUJO Y EL CONFORT PREDOMINAN EN CADA RINCÓN</strong> */}
                <strong>
                  {language === es
                    ? es.coz.athimar.subTitleStrong
                    : en.coz.athimar.subTitleStrong}
                </strong>
              </p>

              <p className="text-base text-gray-700 md:text-lg mb-2">
                {language === es
                  ? es.coz.athimar.paragraph_1
                  : en.coz.athimar.paragraph_1}

                {/* Athimar es un desarrollo de lujo con el diseño y la arquitectura
                pensados minuciosamente para brindar ambientes con estilo, lujo
                y confort. La premisa del diseño fue generar vistas inigualables
                desde cada una de sus unidades, regalando una obra de arte en
                tonos turquesa sólo con mirar por tu ventana. */}
              </p>

              <p className="text-base text-gray-700 md:text-lg mb-2">
                {language === es
                  ? es.coz.athimar.paragraph_2
                  : en.coz.athimar.paragraph_2}

                {/* ¡Vivir en Athimar, será hacer un sueño realidad! Tendrás a tu
                alcance todas las comodidades y el confort de la vida ideal que
                siempre imaginaste. */}
              </p>

              {/* <p className="text-base text-gray-700 md:text-lg mb-2">
                Athimar es un 
                <strong>edificio de 6 niveles</strong>. 
                Cuenta con <strong>25 unidades </strong>
                conformadas por 
                <strong>8 tipologías</strong> 
                diferentes entre las que podrás
                encontrar departamentos de 1 a 3 recámaras, con terraza, rooftop
                o jacuzzi e increíbles amenidades.
              </p> */}

              <p className="text-base text-gray-700 md:text-lg mb-2">
                {language === es
                  ? es.coz.athimar.paragraph_3_pt_1
                  : en.coz.athimar.paragraph_3_pt_1}
                <strong>
                  {language === es
                    ? es.coz.athimar.paragraph_3_pt_2_strong
                    : en.coz.athimar.paragraph_3_pt_2_strong}
                </strong>
                {language === es
                  ? es.coz.athimar.paragraph_3_pt_3
                  : en.coz.athimar.paragraph_3_pt_3}
                <strong>
                  {language === es
                    ? es.coz.athimar.paragraph_3_pt_4_strong
                    : en.coz.athimar.paragraph_3_pt_4_strong}
                </strong>
                {language === es
                  ? es.coz.athimar.paragraph_3_pt_5
                  : en.coz.athimar.paragraph_3_pt_5}
                <strong>
                  {language === es
                    ? es.coz.athimar.paragraph_3_pt_6_strong
                    : en.coz.athimar.paragraph_3_pt_6_strong}
                </strong>
                {language === es
                  ? es.coz.athimar.paragraph_3_pt_7
                  : en.coz.athimar.paragraph_3_pt_7}
              </p>


              <h4 className="max-w-lg mb-6 mt-4 text-xl font-black text-sky-950 ">
                {language === es
                  ? es.coz.athimar.amenities_athimar.title
                  : en.coz.athimar.amenities_athimar.title}
              </h4>

              <AmenitiesInProject
                amenidad_1={"Bar"}
                amenidad_2={
                  language === es
                    ? es.coz.athimar.amenities_athimar.bbq_area
                    : en.coz.athimar.amenities_athimar.bbq_area
                }
                amenidad_3={
                  language === es
                    ? es.coz.athimar.amenities_athimar.bikes_parking
                    : en.coz.athimar.amenities_athimar.bikes_parking
                }
                amenidad_4={
                  language === es
                    ? es.coz.athimar.amenities_athimar.boardroom
                    : en.coz.athimar.amenities_athimar.boardroom
                }
                amenidad_5={
                  language === es
                    ? es.coz.athimar.amenities_athimar.bussines_ctr
                    : en.coz.athimar.amenities_athimar.bussines_ctr
                }
                amenidad_6={
                  language === es
                    ? es.coz.athimar.amenities_athimar.gym
                    : en.coz.athimar.amenities_athimar.gym
                }
                amenidad_7={
                  language === es
                    ? es.coz.athimar.amenities_athimar.lobby
                    : en.coz.athimar.amenities_athimar.lobby
                }
                amenidad_8={
                  language === es
                    ? es.coz.athimar.amenities_athimar.parking
                    : en.coz.athimar.amenities_athimar.parking
                }
                amenidad_9={
                  language === es
                    ? es.coz.athimar.amenities_athimar.pool
                    : en.coz.athimar.amenities_athimar.pool
                }
                amenidad_10={
                  language === es
                    ? es.coz.athimar.amenities_athimar.solarium
                    : en.coz.athimar.amenities_athimar.solarium
                }
                amenidad_11={
                  language === es
                    ? es.coz.athimar.amenities_athimar.store
                    : en.coz.athimar.amenities_athimar.store
                }
                amenidad_12={
                  language === es
                    ? es.coz.athimar.amenities_athimar.and_much_more
                    : en.coz.athimar.amenities_athimar.and_much_more
                }
              />
            </div>
            <div className="mt-4 object-cover w-[330px] mx-auto lg:w-[435px]  lg: justify-center bg-white">
              {/*Imagenes Swiper CUBO*/}
              <PropertyDetailImages images={images} />

              <div className="mx-auto items-center text-center relative bg-[white] mt-4">
                <MdOutlineSwipe className=" text-[#058a94] mx-auto z-50 text-4xl text-center" />
              </div>
            </div>
          </div>
        </div>

        <span className="flex justify-center">
          <h4 className=" text-center max-w-lg mb-6 mt-4 text-xl font-black text-sky-950 ">
            {/* Da click para ver mas detalles */}
            {language === es
              ? es.coz.athimar.more_details
              : en.coz.athimar.more_details}
          </h4>
        </span>
        <div className="px-8 mb-2 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:px-12">
          {/* 1 RECÁMARA */}
          <Link
            className="px-4 py-2 text-center bg-blue-500 hover:bg-blue-600 text-white rounded "
            href="/properties/Cozumel/Athimar_Cozumel/One_Bedroom"
          >
            {language === es
              ? es.coz.athimar.one_bedroom
              : en.coz.athimar.one_bedroom}
          </Link>

          {/* 2 RECÁMARAS */}
          <Link
            className="px-4 py-2 text-center bg-blue-500 hover:bg-blue-600 text-white rounded"
            href="/properties/Cozumel/Athimar_Cozumel/Two_Bedroom"
          >
            {/* 2 RECÁMARAS */}
            {language === es
              ? es.coz.athimar.two_bedroom
              : en.coz.athimar.two_bedroom}
          </Link>

          <Link
            className="px-4 py-2 text-center bg-blue-500 hover:bg-blue-600 text-white rounded"
            href="/properties/Cozumel/Athimar_Cozumel/Three_Bedroom"
          >
            {/* 3 RECÁMARAS */}
            {language === es
              ? es.coz.athimar.three_bedroom
              : en.coz.athimar.three_bedroom}
          </Link>

          <Link
            className="px-4 py-2 text-center bg-blue-500 hover:bg-blue-600 text-white rounded"
            href="/properties/Cozumel/Athimar_Cozumel/Penthouse"
          >
            PENTHOUSE
          </Link>
        </div>
      </section>
      <div className="flex justify-center mt-6">
        <h4 className=" text-center max-w-lg  mt-4 text-xl font-black text-sky-950 ">
          {/* Ubicación */}
          {language === es ? es.coz.athimar.location : en.coz.athimar.location}
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
          src="https://maps.google.com/maps?width=945&amp;height=512&amp;hl=en&amp;q=Athimar Cozumel&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embedhttps://maps.google.com/maps?width=945&amp;height=512&amp;hl=en&amp;q=Athimar Cozumel&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </>
  );
};

export default VidaraaPage;
