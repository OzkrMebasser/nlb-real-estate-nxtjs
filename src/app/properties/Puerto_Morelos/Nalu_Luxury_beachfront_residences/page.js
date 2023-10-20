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

const NaluPage = () => {
  const { homeProperties } = useProperties();
  const { language, setLanguage } = useLanguage();

  const { allProperties } = useProperties();

  const images = allProperties[3].imagesCube;

  const router = useRouter();
  return (
    <>
      <section className="bg-white ">
        <div className="px-6 py-10 mx-auto mt-8">
          <div className="mt-8 lg:mx-6 lg:flex lg:items-center lg:space-between">
            <div className="mt-6 lg:mt-0 lg:mx-4 ">
              <h2 className=" uppercase max-w-lg  mt-4 lg:mt-2 tracking-tight text-3xl font-black text-[#9c8966] sm:text-4xl sm:leading-none">
                NÁLU
              </h2>

              <strong>
                <h3 className="mb-6 mt-2 uppercase text-gray-700">
                  {language === es
                    ? es.pom.nalu.subTitleStrong
                    : en.pom.nalu.subTitleStrong}
                </h3>
              </strong>

              <p className="text-base text-gray-700 md:text-lg mb-2">
                {language === es
                  ? es.pom.nalu.paragraph_1
                  : en.pom.nalu.paragraph_1}
              </p>

              <p className="text-base text-gray-700 md:text-lg mb-2">
                {language === es
                  ? es.pom.nalu.paragraph_2
                  : en.pom.nalu.paragraph_2}

                <strong>
                  {language === es
                    ? es.pom.nalu.paragraph_2_pt_2_strong
                    : en.pom.nalu.paragraph_2_pt_2_strong}
                </strong>

                {language === es
                  ? es.pom.nalu.paragraph_2_pt_3
                  : en.pom.nalu.paragraph_2_pt_3}
              </p>
              <p className="text-base text-gray-700 md:text-lg mb-2">
                {language === es
                  ? es.pom.nalu.paragraph_3
                  : en.pom.nalu.paragraph_3}
              </p>

              <h4 className="max-w-lg mb-6 mt-4 text-xl font-black text-sky-950 ">
                {language === es
                  ? es.pom.nalu.amenities_nalu.title
                  : en.pom.nalu.amenities_nalu.title}
              </h4>

              <AmenitiesInProject
                amenidad_1={
                  language === es
                    ? es.pom.nalu.amenities_nalu.private_beach
                    : en.pom.nalu.amenities_nalu.private_beach
                }
                amenidad_2={
                  language === es
                    ? es.pom.nalu.amenities_nalu.bbq_area
                    : en.pom.nalu.amenities_nalu.bbq_area
                }
                amenidad_3={
                  language === es
                    ? es.pom.nalu.amenities_nalu.poolside_bar
                    : en.pom.nalu.amenities_nalu.poolside_bar
                }
                amenidad_4={
                  language === es
                    ? es.pom.nalu.amenities_nalu.bicycle_area
                    : en.pom.nalu.amenities_nalu.bicycle_area
                }
                amenidad_5={
                  language === es
                    ? es.pom.nalu.amenities_nalu.lobby
                    : en.pom.nalu.amenities_nalu.lobby
                }
                amenidad_6={
                  language === es
                    ? es.pom.nalu.amenities_nalu.gym
                    : en.pom.nalu.amenities_nalu.gym
                }
                amenidad_7={
                  language === es
                    ? es.pom.nalu.amenities_nalu.private_parking
                    : en.pom.nalu.amenities_nalu.private_parking
                }
                amenidad_8={
                  language === es
                    ? es.pom.nalu.amenities_nalu.elevator
                    : en.pom.nalu.amenities_nalu.elevator
                }
                amenidad_9={
                  language === es
                    ? es.pom.nalu.amenities_nalu.rooftop_pool
                    : en.pom.nalu.amenities_nalu.rooftop_pool
                }
                amenidad_10={
                  language === es
                    ? es.pom.nalu.amenities_nalu.wellness_room
                    : en.pom.nalu.amenities_nalu.wellness_room
                }
                amenidad_11={
                  language === es
                    ? es.pom.nalu.amenities_nalu.multipurpose_room
                    : en.pom.nalu.amenities_nalu.multipurpose_room
                }
                amenidad_12={
                  language === es
                    ? es.pom.nalu.amenities_nalu.security_24_7
                    : en.pom.nalu.amenities_nalu.security_24_7
                }
              />
            </div>
            <div className="mt-4 object-cover w-[330px] mx-auto lg:w-[435px]  lg: justify-center">
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
            {language === es ? es.more_details : en.more_details}
          </h4>
        </span>
        <div className="px-8 mb-2 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:px-12">
          {/* 1 RECÁMARA */}
          <p className="px-4 py-2 text-center bg-white rounded ">
            {/* BLANK BUTTON */}
          </p>

          {/* 2 RECÁMARAS */}
          <Link
            className="px-4 py-2 text-center bg-blue-500 hover:bg-blue-600 text-white rounded"
            href="/properties/Cancun/Vidaraa/Two_Bedroom"
          >
            {language === es
              ? es.cun.vidaraa.two_bedroom
              : en.cun.vidaraa.two_bedroom}
          </Link>

          <Link
            className="px-4 py-2 text-center bg-blue-500 hover:bg-blue-600 text-white rounded"
            href="/properties/Cancun/Vidaraa/Three_Bedroom"
          >
            {/* 3 RECÁMARAS */}
            {language === es
              ? es.cun.vidaraa.three_bedroom
              : en.cun.vidaraa.three_bedroom}
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
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Nálu&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </>
  );
};

export default NaluPage;
