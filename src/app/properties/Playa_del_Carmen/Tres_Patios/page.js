"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import PropertyDetailImages from "../../../components/Cards/PropertyDetailImages";
import { useProperties } from "@/context/PropertiesProvider";
import { MdOutlineSwipe } from "react-icons/md";
import { HiBadgeCheck } from "react-icons/hi";
// import Villa90m2 from "./Villa90m2";
// import Villa110m2 from "./Villa110m2";
// import { images } from "../../../../../next.config";

const TresPatios = () => {
  const { homeProperties } = useProperties();

  const { allProperties } = useProperties();
console.log("AllProperties", allProperties);
  const images = allProperties[0].imagesCube;
  // console.log(images)

  

  const router = useRouter();
  return (
    <>
      <section className="bg-white ">
        <div className="px-6 py-10 mx-auto mt-8">
          <div className="mt-8 lg:mx-6 lg:flex lg:items-center lg:space-between" >

            <div className="mt-6 lg:mt-0 lg:mx-4">
              <h2 className="uppercase max-w-lg mb-6 mt-4 lg:mt-2 tracking-tight text-3xl font-black text-[#9c8966] sm:text-4xl sm:leading-none">
                {/*props.   propertyName={propertyName}*/}              
                Tres Patios
              </h2>
              <p className="text-base text-gray-700 md:text-lg mb-2">
                {/*props.   descParagraphOne={descParagraphOne}*/} 
                {/*props.   strongPhrase={strongPhrase}*/} 
                 {/*props.   descParagraphTwo={descParagraphTwo}*/} 
                 {/*props.   descParagraphThree={descParagraphThree}*/} 
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
              </p>

              <h4 className="max-w-lg mb-6 mt-4 text-xl font-black text-sky-950 ">
                Amenidades
              </h4>

              <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                    {/*props.   amenityOne={amenityOne}*/} 
                    Casa Club
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                     {/*props.   amenityTwo={amenityTwo}*/} 
                    Cancha de Paddel
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                     {/*props.   amenityThree={amenityThree}*/} 
                    Outdoor Gym
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                     {/*props.   amenityFour={amenityFour}*/} 
                    Alberca
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                     {/*props.   amenityFive={amenityFive}*/} 
                    Pet Park
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                      {/*props.   amenitySix={amenitySix}*/} 
                    Canchas Deportivas
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                      {/*props.   amenitySeven={amenitySeven}*/} 
                    Reading Spots
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                    {/*props.   amenityEight={amenityEight}*/} 
                    Dynamic Playground
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                    {/*props.   amenityNine={amenityNine}*/} 
                    Asadores
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                    {/*props.   amenityTen={amenityTen}*/} 
                    Urban Garden
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                    {/*props.   amenityEleven={amenityEleven}*/} 
                    Neighbor Kiosco & Hammock Garden
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

              {/*Imagenes Swiper CUBO
                      props. images={images}              
              */}
              <PropertyDetailImages images={images}/>


              <div className="mx-auto items-center text-center relative bg-[white] mt-4">
                <MdOutlineSwipe className=" text-[#058a94] mx-auto z-50 text-4xl text-center" />
              </div>
            </div>
          </div>
        </div>
        <span className="flex justify-center">
          <h4 className=" text-center max-w-lg mb-6 mt-4 text-xl font-black text-sky-950 ">
            Da click para ver mas detalles
          </h4>
        </span>
        <div className="px-8 mb-2 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:px-12">
          {/* {"Villa 90m2"} */}

          {/* <button
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
            onClick={() =>
              router.push(`properties/Playa_del_Carmen/Tres_Patios/depto_90m2`)
            }
          >
            Villa 90m2
          </button>

          <Villa90m2 isOpen90={isModalOpen90} onClose90={handleCloseModal90} /> */}

          {/* {"Villa 110m2"} */}
          <button
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
            // onClick={handleOpenModal110}
            // onClick={() => router.push("properties/Playa_del_Carmen/Tres_Patios/Villa_90m2")}
            onClick={() =>
              router.push(`${allProperties[0].routeUnit_1}`)
            }
          >
            Villa 110m2
          </button>
{/* 
          <Villa110m2
            isOpen110={isModalOpen110}
            onClose110={handleCloseModal110}
          /> */}

          {/* <button
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
            onClick={handleOpenModal90}
          >
            Villa 90m2
          </button> */}
          {/* {"Villa 110m2"} */}
          {/* <button
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
            onClick={handleOpenModal110}
          >
            Villa 110m2
          </button> */}

          {/* <Villa110m2
            isOpen110={isModalOpen110}
            onClose110={handleCloseModal110}
          /> */}
        </div>
      </section>
      <div className="flex justify-center mt-6">
        <h4 className=" text-center max-w-lg  mt-4 text-xl font-black text-sky-950 ">
          Ubicación
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
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Tres patios playa del carmen&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </>
  );
};

export default TresPatios;
