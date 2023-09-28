"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"
import useLanguage from "@/context/hooks/useLanguage";
import en from "@/context/languages/en";
import es from "@/context/languages/es";
import PropertyDetailImages from "../../../components/Cards/PropertyDetailImages";
import { useProperties } from "@/context/PropertiesProvider";
import { MdOutlineSwipe } from "react-icons/md";
import { HiBadgeCheck } from "react-icons/hi";
// import Villa90m2 from "./Villa90m2";
// import Villa110m2 from "./Villa110m2";
// import { images } from "../../../../../next.config";

const AthimarPage = () => {
  const { homeProperties } = useProperties();
  const { language, setLanguage } = useLanguage();

  const { allProperties } = useProperties();
 
  // console.log("AllProperties", allProperties);
  const images = allProperties[1].imagesCube;
  
  // console.log("Athimar", images);

 
  const router = useRouter();
  return (
    <>
      <section className="bg-white ">
    
        <div className="px-6 py-10 mx-auto mt-8">
          <div className="mt-8 lg:mx-6 lg:flex lg:items-center lg:space-between">
            <div className="mt-6 lg:mt-0 lg:mx-4">
              <h2 className=" uppercase max-w-lg  mt-4 lg:mt-2 tracking-tight text-3xl font-black text-[#9c8966] sm:text-4xl sm:leading-none">
                ATHIMAR
              </h2>
              <h3 className="mb-6">Cozumel Luxury Living</h3>
              <p className="text-base text-gray-700 md:text-lg mb-2">
                {/**/}
                {/* <strong>UN PROYECTO DONDE EL LUJO Y EL CONFORT PREDOMINAN EN CADA RINCÓN</strong> */}
                <strong>
                {language === es ? es.coz_athimar.subTitleStrong : en.coz_athimar.subTitleStrong}

                </strong>
              </p>

              <p className="text-base text-gray-700 md:text-lg mb-2">
              {language === es ? es.coz_athimar.paragraph_1 : en.coz_athimar.paragraph_1}

                {/* Athimar es un desarrollo de lujo con el diseño y la arquitectura
                pensados minuciosamente para brindar ambientes con estilo, lujo
                y confort. La premisa del diseño fue generar vistas inigualables
                desde cada una de sus unidades, regalando una obra de arte en
                tonos turquesa sólo con mirar por tu ventana. */}
              </p>

              <p className="text-base text-gray-700 md:text-lg mb-2">
              {language === es ? es.coz_athimar.paragraph_2 : en.coz_athimar.paragraph_2}

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
              {language === es ? es.coz_athimar.paragraph_3_pt_1 : en.coz_athimar.paragraph_3_pt_1}
              <strong>{language === es ? es.coz_athimar.paragraph_3_pt_2_strong : en.coz_athimar.paragraph_3_pt_2_strong}</strong>
              {language === es ? es.coz_athimar.paragraph_3_pt_3 : en.coz_athimar.paragraph_3_pt_3}
              <strong>{language === es ? es.coz_athimar.paragraph_3_pt_4_strong : en.coz_athimar.paragraph_3_pt_4_strong}</strong>  
              {language === es ? es.coz_athimar.paragraph_3_pt_5 : en.coz_athimar.paragraph_3_pt_5}
              <strong>{language === es ? es.coz_athimar.paragraph_3_pt_6_strong : en.coz_athimar.paragraph_3_pt_6_strong}</strong>
              {language === es ? es.coz_athimar.paragraph_3_pt_7 : en.coz_athimar.paragraph_3_pt_7}


              
              </p>

              {/* <p className="text-base text-gray-700 md:text-lg mb-2">
                Ofrecemos la mezcla perfecta de <strong>espacios recreativos </strong>para
                locales y turistas, integrando una <strong>Casa Club con +10 amenidades</strong> {" "}
                diseñadas para el entretenimiento y bienestar.
              </p>
              <p className="text-base text-gray-700 md:text-lg mb-2">
                Tres Patios es una innovadora propuesta de usos mixtos compuesta
                por áreas habitables y locales comerciales, generando un entorno
                novedoso de gran calidad de vida.
                <br />
                El conjunto se compone por 32 departamentos en villas con 6
                departamentos cada una, rodeados de áreas verdes y atractivas
                amenidades.
              </p> */}

              <h4 className="max-w-lg mb-6 mt-4 text-xl font-black text-sky-950 ">
              {language === es ? es.coz_athimar.amenities_athimar.title : en.coz_athimar.amenities_athimar.title}

              
              </h4>

              <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                    Bar
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                    {/* Area de Asadores */}
                    {language === es ? es.coz_athimar.amenities_athimar.bbq_area : en.coz_athimar.amenities_athimar.bbq_area}

                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                    {/* Estacionamiento de Bicicletas */}
                    {language === es ? es.coz_athimar.amenities_athimar.bikes_parking : en.coz_athimar.amenities_athimar.bikes_parking}

                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                    {/* Sala de Juntas */}
                    {language === es ? es.coz_athimar.amenities_athimar.boardroom : en.coz_athimar.amenities_athimar.boardroom}

                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                    {/* Centro de Negocios */}
                    {language === es ? es.coz_athimar.amenities_athimar.bussines_ctr : en.coz_athimar.amenities_athimar.bussines_ctr}

                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                    {/* Gimnasio */}
                    {language === es ? es.coz_athimar.amenities_athimar.gym : en.coz_athimar.amenities_athimar.gym}

                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                    {/* Vestíbulo */}
                    {language === es ? es.coz_athimar.amenities_athimar.lobby : en.coz_athimar.amenities_athimar.lobby}

                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                    {/* Estacionamiento */}
                    {language === es ? es.coz_athimar.amenities_athimar.parking : en.coz_athimar.amenities_athimar.parking}

                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                    {/* Alberca */}
                    {language === es ? es.coz_athimar.amenities_athimar.pool : en.coz_athimar.amenities_athimar.pool}

                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                    {/* Asoleadores */}
                    {language === es ? es.coz_athimar.amenities_athimar.solarium : en.coz_athimar.amenities_athimar.solarium}

                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                    {/* Tienda */}
                    {language === es ? es.coz_athimar.amenities_athimar.store : en.coz_athimar.amenities_athimar.store}

                  </li>
                </ul>
              </div>

              {/* {"Villa 90m2 copy"} */}
            </div>
            <div className="mt-4 object-cover w-[330px] mx-auto lg:w-[435px]  lg: justify-center bg-white">
              {/* <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96 bg-red-800"
            src=""
            alt=""
          /> */}

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
            {language === es ? es.coz_athimar.more_details : en.coz_athimar.more_details}

            
          </h4>
        </span>
        <div className="px-8 mb-2 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:px-12">
            {/* 1 RECÁMARA */}
          {/* <button
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
            // onClick={handleOpenModal110}
            // onClick={() => router.push("properties/Playa_del_Carmen/Tres_Patios/Villa_90m2")}
            // onClick={() => router.push(`${allProperties[1].routeUnit_1}`)}
          > */}
           <Link className="px-4 py-2 text-center bg-blue-500 hover:bg-blue-600 text-white rounded " href="/properties/Cozumel/Athimar_Cozumel/One_Bedroom">
            {/* 1 RECÁMARA */}
            
            {language === es ? es.coz_athimar.one_bedroom : en.coz_athimar.one_bedroom}
            </Link>
          {/* </button> */}

          {/* 2 RECÁMARA */}
          {/* <button
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded" */}
            {/* // onClick={handleOpenModal110}
            // onClick={() => router.push("properties/Playa_del_Carmen/Tres_Patios/Villa_90m2")}
            // onClick={() => router.push(`${allProperties[1].routeUnit_1}`)}
          > */}
           <Link  className="px-4 py-2 text-center bg-blue-500 hover:bg-blue-600 text-white rounded" href="/properties/Cozumel/Athimar_Cozumel/Two_Bedroom">
           {/* 2 RECÁMARAS */}
            {language === es ? es.coz_athimar.two_bedroom : en.coz_athimar.two_bedroom}
            </Link>
          {/* </button> */}

          <Link  className="px-4 py-2 text-center bg-blue-500 hover:bg-blue-600 text-white rounded" href="/properties/Cozumel/Athimar_Cozumel/Three_Bedroom">
           {/* 3 RECÁMARAS */}
            {language === es ? es.coz_athimar.three_bedroom : en.coz_athimar.three_bedroom}
            </Link>
         
        </div>
      </section>
      <div className="flex justify-center mt-6">
        <h4 className=" text-center max-w-lg  mt-4 text-xl font-black text-sky-950 ">
          {/* Ubicación */}
          {language === es ? es.coz_athimar.location : en.coz_athimar.location}
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

export default AthimarPage;
