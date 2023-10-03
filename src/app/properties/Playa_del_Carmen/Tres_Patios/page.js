"use client";

import { useRouter } from "next/navigation";
import AmenitiesInProject from "../../../components/Amenities/AmenitiesInProject";
import Link from "next/link";
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

const TresPatios = () => {
  const { homeProperties } = useProperties();
  const { language, setLanguage } = useLanguage();

  const { allProperties } = useProperties();
  
// console.log("AllProperties", allProperties);
  const images = allProperties[0].imagesCube;
  console.log("Imagenes3Patios", images)

  

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
              {language === es ? es.pdc_tres_patios.paragraph_1 : en.pdc_tres_patios.paragraph_1}
              <strong>{language === es ? es.pdc_tres_patios.paragraph_1_pt_2_strong : en.pdc_tres_patios.paragraph_1_pt_2_strong}</strong>
              {language === es ? es.pdc_tres_patios.paragraph_1_pt_3 : en.pdc_tres_patios.paragraph_1_pt_3}
              <strong>{language === es ? es.pdc_tres_patios.paragraph_1_pt_4_strong : en.pdc_tres_patios.paragraph_1_pt_4_strong}</strong>
              {language === es ? es.pdc_tres_patios.paragraph_1_pt_5 : en.pdc_tres_patios.paragraph_1_pt_5}

               
                {/* 
                Ofrecemos la mezcla perfecta de 
                <strong>espacios recreativos </strong>
                para locales y turistas, integrando una 
                <strong> Casa Club con +10 amenidades </strong> {" "}
                diseñadas para el entretenimiento y bienestar. */}
              </p>
              <p className="text-base text-gray-700 md:text-lg mb-2">
                {/* Tres Patios es una innovadora propuesta de usos mixtos compuesta
                por áreas habitables y locales comerciales, generando un entorno
                novedoso de gran calidad de vida. */}
                {language === es ? es.pdc_tres_patios.paragraph_2 : en.pdc_tres_patios.paragraph_2}
                </p>

  
                <p className="text-base text-gray-700 md:text-lg mb-2">

                {language === es ? es.pdc_tres_patios.paragraph_3_pt_1 : en.pdc_tres_patios.paragraph_3_pt_1}
                <strong>{language === es ? es.pdc_tres_patios.paragraph_3_pt_2_strong : en.pdc_tres_patios.paragraph_3_pt_2_strong}</strong>
                {language === es ? es.pdc_tres_patios.paragraph_3_pt_3 : en.pdc_tres_patios.paragraph_3_pt_3}
                <strong>{language === es ? es.pdc_tres_patios.paragraph_3_pt_4_strong : en.pdc_tres_patios.paragraph_3_pt_4_strong}</strong>
                {language === es ? es.pdc_tres_patios.paragraph_3_pt_5 : en.pdc_tres_patios.paragraph_3_pt_5}
                {/* El conjunto se compone por 
                <strong> 32 departamentos en villas </strong>
                con 
                <strong> 6 departamentos cada una, </strong>
                rodeados de áreas verdes y atractivas
                amenidades. */}
              </p>

              <h4 className="max-w-lg mb-6 mt-4 text-xl font-black text-sky-950 ">
                {/* Amenidades */}
                {language === es ? es.pdc_tres_patios.amenities_tres_patios.title : en.pdc_tres_patios.amenities_tres_patios.title}
              </h4>

              <AmenitiesInProject
                  amenidad_1={language === es ? es.pdc_tres_patios.amenities_tres_patios.club_house : en.pdc_tres_patios.amenities_tres_patios.club_house}
                  amenidad_2={language === es ? es.pdc_tres_patios.amenities_tres_patios.paddel_court : en.pdc_tres_patios.amenities_tres_patios.paddel_court}
                  amenidad_3={language === es ? es.pdc_tres_patios.amenities_tres_patios.outdoor_gym : en.pdc_tres_patios.amenities_tres_patios.outdoor_gym}
                  amenidad_4={language === es ? es.pdc_tres_patios.amenities_tres_patios.pool : en.pdc_tres_patios.amenities_tres_patios.pool}
                  amenidad_5={language === es ? es.pdc_tres_patios.amenities_tres_patios.pet_park : en.pdc_tres_patios.amenities_tres_patios.pet_park}
                  amenidad_6={language === es ? es.pdc_tres_patios.amenities_tres_patios.sports_fields : en.pdc_tres_patios.amenities_tres_patios.sports_fields}
                  amenidad_7={language === es ? es.pdc_tres_patios.amenities_tres_patios.reading_spots : en.pdc_tres_patios.amenities_tres_patios.reading_spots}
                  amenidad_8={language === es ? es.pdc_tres_patios.amenities_tres_patios.dynamic_playground : en.pdc_tres_patios.amenities_tres_patios.dynamic_playground}
                  amenidad_9={language === es ? es.pdc_tres_patios.amenities_tres_patios.steakhouses : en.pdc_tres_patios.amenities_tres_patios.steakhouses}
                  amenidad_10={language === es ? es.pdc_tres_patios.amenities_tres_patios.urban_garden : en.pdc_tres_patios.amenities_tres_patios.urban_garden}
                  amenidad_11={language === es ? es.pdc_tres_patios.amenities_tres_patios.kiosco_and_garden : en.pdc_tres_patios.amenities_tres_patios.kiosco_and_garden}
                  amenidad_12={language === es ? es.pdc_tres_patios.amenities_tres_patios.and_much_more : en.pdc_tres_patios.amenities_tres_patios.and_much_more}
              />
          

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
            {/* Da click para ver mas detalles */}
            {language === es ? es.pdc_tres_patios.more_details : en.pdc_tres_patios.more_details}

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
          {/* <button
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
            // onClick={handleOpenModal110}
            // onClick={() => router.push("properties/Playa_del_Carmen/Tres_Patios/Villa_90m2")}
            onClick={() =>
              router.push(`${allProperties[0].routeUnit_1}`)
            }
          >
            Villa 110m2
          </button> */}
            <Link className="px-4 py-2 text-center bg-blue-500 hover:bg-blue-600 text-white rounded " href="/properties/Playa_del_Carmen/Tres_Patios/Villa_90m2">
            {/* 1 RECÁMARA */}
            
            {/* {language === es ? es.coz_athimar.one_bedroom : en.coz_athimar.one_bedroom} */}
            Villa 90m2
            </Link>

        </div>
      </section>
      <div className="flex justify-center mt-6">
        <h4 className=" text-center max-w-lg  mt-4 text-xl font-black text-sky-950 ">
          {/* Ubicación */}
          {language === es ? es.pdc_tres_patios.location : en.pdc_tres_patios.location}
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
