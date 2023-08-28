// import Image from 'next/image';
"use client"
import { HiBadgeCheck } from "react-icons/hi";


import React, { useState } from "react";

// const Dropdown = () => {
//   const [isPlanoOpen, setIsPlanoOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsPlanoOpen(!isPlanoOpen);
//   };

//   return (
//     <>
//       <button
//         className=" mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
//         onClick={toggleDropdown}
//       >
//         {isPlanoOpen ? "Cerrar plano" : "Ver plano"}
//       </button>

//       {isPlanoOpen && (
//         <div className="flex items-center justify-center">
//           <img
//             className="object-cover h-54 w-96 lg:h-64"
//             src="https://trespatios.com/wp-content/themes/trespatios/img/proyecto/90m2.png"
//             alt=""
//           />
//         </div>
//       )}
//     </>
//   );
// };

const depto_90m2 = ({ isOpen90, onClose90 }) => {
  if (!isOpen90) return null;

  return (
    <div className="flex items-center justify-center z-50 ">
      <div className=" bg-gray-900 opacity-50"></div>
      <div className="w-[800px] bg-[white] p-4 rounded shadow-md z-10 lg:mt-14">
        <h2 className="text-xl font-bold mb-4 mt-2">
          Departamentos en villas
        </h2>
        <p>
          Contamos con 6 Departamentos en villas por cada módulo de 90 m2 o 110
          m2.
        </p>
        <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
          <ul className="space-y-3">
            <li className="flex">
              <span className="mr-1">
    
                <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
              </span>
              Casa Club
            </li>
            <li className="flex">
              <span className="mr-1">
                <HiBadgeCheck className="w-5 h-5 text-teal-500" />
              </span>
              Cancha de Paddel
            </li>
            <li className="flex">
              <span className="mr-1">
                <HiBadgeCheck className="w-5 h-5 text-teal-500" />
              </span>
              Outdoor Gym
            </li>
            <li className="flex">
              <span className="mr-1">
                <HiBadgeCheck className="w-5 h-5 text-teal-500" />
              </span>
              Alberca
            </li>
          </ul>
          <ul className="space-y-3">
            <li className="flex">
              <span className="mr-1">
                <HiBadgeCheck className="w-5 h-5 text-teal-500" />
              </span>
              Flipboard curmudgeon
            </li>
            <li className="flex">
              <span className="mr-1">
                <HiBadgeCheck className="w-5 h-5 text-teal-500" />
              </span>
              Storage shed
            </li>
            <li className="flex">
              <span className="mr-1">
                <HiBadgeCheck className="w-5 h-5 text-teal-500" />
              </span>
              Satoshi Nakamoto
            </li>
          </ul>
        </div>

        <div className="items-center justify-center">
          <button
            className=" mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
            onClick={onClose90}
          >
            Volver
          </button>
        </div>
        <div className="items-center justify-center">
        {/* <Dropdown /> */}
        </div>
      </div>
    </div>
  );
};

export default depto_90m2;
