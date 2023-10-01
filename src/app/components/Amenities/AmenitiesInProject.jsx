"use client"
import { HiBadgeCheck } from "react-icons/hi";
import useLanguage from "@/context/hooks/useLanguage";
import en from "@/context/languages/en";
import es from "@/context/languages/es";


const AmenitiesInProject = (props) => {
    const { language, setLanguage } = useLanguage();

    const {
     
      amenidad_1,
      amenidad_2,
      amenidad_3,
      amenidad_4,
      amenidad_5,
      amenidad_6,
      amenidad_7,
      amenidad_8,
      amenidad_9,
      amenidad_10,
      amenidad_11, 
      amenidad_12

    } = props;
  return (
    <>
          <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                    {/* Casa Club */}
                    {amenidad_1}
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                     {/*props.   amenityTwo={amenityTwo}*/} 
                    {/* Cancha de Paddel */}
                    {amenidad_2}
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                     {/*props.   amenityThree={amenityThree}*/} 
                    {/* Outdoor Gym */}
                    {amenidad_3}
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                     {/*props.   amenityFour={amenityFour}*/} 
                    {/* Alberca */}
                    {amenidad_4}
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                     {/*props.   amenityFive={amenityFive}*/} 
                    {/* Pet Park */}
                    {amenidad_5}
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                      {/*props.   amenitySix={amenitySix}*/} 
                    {/* Canchas Deportivas */}
                    {amenidad_6}
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                      {/*props.   amenitySeven={amenitySeven}*/} 
                    {/* Reading Spots */}
                    {amenidad_7}
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                    {/*props.   amenityEight={amenityEight}*/} 
                    {/* Dynamic Playground */}
                    {amenidad_8}
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                    {/*props.   amenityNine={amenityNine}*/} 
                    {/* Asadores */}
                    {amenidad_9}
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                    {/*props.   amenityTen={amenityTen}*/} 
                    {/* Urban Garden */}
                    {amenidad_10}
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                    {/*props.   amenityEleven={amenityEleven}*/} 
                    {/* Neighbor Kiosco & Hammock Garden */}
                    {amenidad_11}
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                    {/*props.   amenityEleven={amenityEleven}*/} 
                    {/* Neighbor Kiosco & Hammock Garden */}
                    {amenidad_12}
                  </li>
                </ul>
              </div>
    </>
  )
}

export default AmenitiesInProject

// {/* <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
// <ul className="space-y-3">
//   <li className="flex">
//     <span className="mr-1">
//       <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
//     </span>
//     {/*props.   amenityOne={amenityOne}*/} 
//     Casa Club
//   </li>
//   <li className="flex">
//     <span className="mr-1">
//       <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
//     </span>
//      {/*props.   amenityTwo={amenityTwo}*/} 
//     Cancha de Paddel
//   </li>
//   <li className="flex">
//     <span className="mr-1">
//       <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
//     </span>
//      {/*props.   amenityThree={amenityThree}*/} 
//     Outdoor Gym
//   </li>
//   <li className="flex">
//     <span className="mr-1">
//       <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
//     </span>
//      {/*props.   amenityFour={amenityFour}*/} 
//     Alberca
//   </li>
//   <li className="flex">
//     <span className="mr-1">
//       <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
//     </span>
//      {/*props.   amenityFive={amenityFive}*/} 
//     Pet Park
//   </li>
//   <li className="flex">
//     <span className="mr-1">
//       <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
//     </span>
//       {/*props.   amenitySix={amenitySix}*/} 
//     Canchas Deportivas
//   </li>
// </ul>
// <ul className="space-y-3">
//   <li className="flex">
//     <span className="mr-1">
//       <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
//     </span>
//       {/*props.   amenitySeven={amenitySeven}*/} 
//     Reading Spots
//   </li>
//   <li className="flex">
//     <span className="mr-1">
//       <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
//     </span>
//     {/*props.   amenityEight={amenityEight}*/} 
//     Dynamic Playground
//   </li>
//   <li className="flex">
//     <span className="mr-1">
//       <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
//     </span>
//     {/*props.   amenityNine={amenityNine}*/} 
//     Asadores
//   </li>
//   <li className="flex">
//     <span className="mr-1">
//       <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
//     </span>
//     {/*props.   amenityTen={amenityTen}*/} 
//     Urban Garden
//   </li>
//   <li className="flex">
//     <span className="mr-1">
//       <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
//     </span>
//     {/*props.   amenityEleven={amenityEleven}*/} 
//     Neighbor Kiosco & Hammock Garden
//   </li>
// </ul>
// </div> */}