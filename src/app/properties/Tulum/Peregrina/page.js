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

const PeregrinaPage = () => {
  const { language, setLanguage } = useLanguage();

  const { allProperties } = useProperties();

  const images = allProperties[4].imagesCube;
  const desarrollo = allProperties[4].desarrollo;


  const router = useRouter();
  return (
    <>
      <section className="bg-white ">
        <div className="px-6 py-10 mx-auto mt-8 ">
          <div className="mt-8 lg:mx-6 lg:flex lg:items-center lg:space-between">
            <div className="mt-6 lg:mt-0 lg:mx-4 ">
              <h2 className=" uppercase max-w-lg  mt-4 lg:mt-2 tracking-tight text-3xl font-black text-[#9c8966] sm:text-4xl sm:leading-none">
                PEREGRINA
              </h2>

              <strong>
                <h3 className="mb-6 mt-2 uppercase text-gray-700">
                  {language === es
                    ? es.tul.peregrina.subTitleStrong
                    : en.tul.peregrina.subTitleStrong}
                </h3>
              </strong>

              <p className="text-base text-gray-700 md:text-lg mb-2">
                {language === es
                  ? es.tul.peregrina.paragraph_1
                  : en.tul.peregrina.paragraph_1}

                <strong>
                  {language === es
                    ? es.tul.peregrina.paragraph_1_pt_2_strong
                    : en.tul.peregrina.paragraph_1_pt_2_strong}
                </strong>

                {language === es
                  ? es.tul.peregrina.paragraph_1_pt_3
                  : en.tul.peregrina.paragraph_1_pt_3}
              </p>

              <h4 className="max-w-lg mb-6 mt-4 text-xl font-black text-sky-950 ">
                {language === es
                  ? es.tul.peregrina.amenities_peregrina.title
                  : en.tul.peregrina.amenities_peregrina.title}
              </h4>

              <AmenitiesInProject
                amenidad_1={
                  language === es
                    ? es.tul.peregrina.amenities_peregrina.restaurant
                    : en.tul.peregrina.amenities_peregrina.restaurant
                }
                amenidad_2={
                  language === es
                    ? es.tul.peregrina.amenities_peregrina.pool
                    : en.tul.peregrina.amenities_peregrina.pool
                }
                amenidad_3={
                  language === es
                    ? es.tul.peregrina.amenities_peregrina.gym
                    : en.tul.peregrina.amenities_peregrina.gym
                }
                amenidad_4={
                  language === es
                    ? es.tul.peregrina.amenities_peregrina.yoga_area
                    : en.tul.peregrina.amenities_peregrina.yoga_area
                }
                amenidad_5={
                  language === es
                    ? es.tul.peregrina.amenities_peregrina.spa
                    : en.tul.peregrina.amenities_peregrina.spa
                }
                amenidad_6={
                  language === es
                    ? es.tul.peregrina.amenities_peregrina.coworking
                    : en.tul.peregrina.amenities_peregrina.coworking
                }
                amenidad_7={
                  language === es
                    ? es.tul.peregrina.amenities_peregrina.fire_pit
                    : en.tul.peregrina.amenities_peregrina.fire_pit
                }
                amenidad_8={
                  language === es
                    ? es.tul.peregrina.amenities_peregrina.star_viewp
                    : en.tul.peregrina.amenities_peregrina.star_viewp
                }
                amenidad_9={
                  language === es
                    ? es.tul.peregrina.amenities_peregrina.elevator
                    : en.tul.peregrina.amenities_peregrina.elevator
                }
                amenidad_10={
                  language === es
                    ? es.tul.peregrina.amenities_peregrina.laundry_room
                    : en.tul.peregrina.amenities_peregrina.laundry_room
                }
                amenidad_11={
                  language === es
                    ? es.tul.peregrina.amenities_peregrina.security_24_7
                    : en.tul.peregrina.amenities_peregrina.security_24_7
                }
                amenidad_12={
                  language === es
                    ? es.tul.peregrina.amenities_peregrina.snack_bar
                    : en.tul.peregrina.amenities_peregrina.snack_bar
                }
              />
            </div>
            <div className="mt-4 object-cover w-[330px] mx-auto lg:w-[435px]  lg: justify-center">
              {/*Imagenes Swiper CUBO*/}
              <PropertyDetailImages 
              altImgs={`${desarrollo}-Images-not-available`}
              images={images}
               />

              <div className="mx-auto items-center text-center relative bg-[white] mt-4">
                <MdOutlineSwipe className=" text-[#058a94] mx-auto z-50 text-4xl text-center" />
              </div>
            </div>
          </div>
        </div>

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
            href="/properties/Tulum/Peregrina/Studio"
          >
            {language === es
              ? es.tul.peregrina.studio
              : en.tul.peregrina.studio}
          </Link>

          {/* 2 RECÁMARAS */}
          <Link
            className="px-4 py-2 text-center bg-blue-500 hover:bg-blue-600 text-white rounded"
            href="/properties/Tulum/Peregrina/Two-Bedroom"
          >
            {language === es
              ? es.tul.peregrina.two_bedroom
              : en.tul.peregrina.two_bedroom}
          </Link>

          <Link
            className="px-4 py-2 text-center bg-blue-500 hover:bg-blue-600 text-white rounded"
            href="/properties/Tulum/Peregrina/Kaybe"
          >
            {/* KAYBE */}
            {language === es ? es.tul.peregrina.kaybe : en.tul.peregrina.kaybe}
          </Link>

          {/* <Link
            className="px-4 py-2 text-center bg-blue-500 hover:bg-blue-600 text-white rounded"
            href="/properties/Cozumel/Athimar_Cozumel/Penthouse"
          >
            PENTHOUSE
          </Link> */}
        </div>
      </section>
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
          src="https://maps.google.com/maps?width=600&height=400&hl=en&q=PEREGRINA KAY BE&t=&z=14&ie=UTF8&iwloc=B&output=embed"
        ></iframe>
      </div>
    </>
  );
};

export default PeregrinaPage;
