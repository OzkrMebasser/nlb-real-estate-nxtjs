// import React from 'react'
import { HiBadgeCheck } from "react-icons/hi";
import useLanguage from "@/context/hooks/useLanguage";
import en from "@/context/languages/en";
import es from "@/context/languages/es";
import { useRouter } from "next/navigation";

const AmenitiesInUnits = (props) => {
  const { language, setLanguage } = useLanguage();
  
  const goBack = () => {
    router.back();
  };

  const {
    unitDesc,
    unitDesc_2,
    unitDesc_3,
    amenidad_1,
    amenidad_2,
    amenidad_3,
    amenidad_4,
    amenidad_5,
    amenidad_6,
    amenidad_7,
    amenidad_8,
  } = props;
  return (
    <>
      <div className="text-justify w-[800px] bg-[white] p-4 lg:p-4 lg:mt-10 ">
        <p className="text-justify">
          {/* Contamos con 6 Departamentos en villas por cada módulo de 90 m²
                y/o 110 m². */}
          {unitDesc}
          {/* 
                ASI ES COMO VA A AQUEDAR PARA LAS TRADUCIONES
                {language === es ? es[amenidad_1] : en[amenidad_1]} */}
        </p>
        <p className="text-justify pt-4 pb-4">
          {/* Contamos con 6 Departamentos en villas por cada módulo de 90 m²
                y/o 110 m². */}
          {unitDesc_2}
          {/* 
                ASI ES COMO VA A AQUEDAR PARA LAS TRADUCIONES
                {language === es ? es[amenidad_1] : en[amenidad_1]} */}
        </p>
        <p className="text-justify">
          {/* Contamos con 6 Departamentos en villas por cada módulo de 90 m²
                y/o 110 m². */}
          {unitDesc_3}
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
              {/* 1 Recámaras */}
              {amenidad_1}
            </li>
            <li className="flex">
              <span className="mr-1">
                <HiBadgeCheck className="w-5 h-5 text-teal-500" />
              </span>
              {/* Sala */}

              {amenidad_2}
            </li>
            <li className="flex">
              <span className="mr-1">
                <HiBadgeCheck className="w-5 h-5 text-teal-500" />
              </span>
              {/* "Comedor" */}
              {amenidad_3}
            </li>
            <li className="flex">
              <span className="mr-1">
                <HiBadgeCheck className="w-5 h-5 text-teal-500" />
              </span>
              {amenidad_4}
            </li>
          </ul>
          <ul className="space-y-3">
            <li className="flex">
              <span className="mr-1">
                <HiBadgeCheck className="w-5 h-5 text-teal-500" />
              </span>
              {amenidad_5}
            </li>
            <li className="flex">
              <span className="mr-1">
                <HiBadgeCheck className="w-5 h-5 text-teal-500" />
              </span>
              {amenidad_6}
            </li>
            <li className="flex">
              <span className="mr-1">
                <HiBadgeCheck className="w-5 h-5 text-teal-500" />
              </span>
              {amenidad_7}
            </li>

            {amenidad_8 ? (
              <li className="flex">
                <span className="mr-1">
                  <HiBadgeCheck className="w-5 h-5 text-teal-500" />
                </span>
                {amenidad_8}
              </li>
            ) : (
              <li className="flex">
                <span className="mr-1">
                  <HiBadgeCheck className="w-5 h-5 text-teal-500" />
                </span>
                {/* Y mucho mas... */}
                {language === es ? es.and_much_more : en.and_much_more}
              </li>
            )}

            {/* <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-teal-500" />
                    </span>
                    {amenidad_8}
                  </li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AmenitiesInUnits;
