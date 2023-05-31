"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import PropertyDetailImages from "../../../components/Cards/PropertyDetailImages";
import { MdOutlineSwipe } from "react-icons/md";
import { HiBadgeCheck } from "react-icons/hi";
import Villa90m2 from "./depto_90m2/x";
import Villa110m2 from "./Villa110m2";

const TresPatios = () => {
  const [isModalOpen90, setIsModalOpen90] = useState(false);
  const [isModalOpen110, setIsModalOpen110] = useState(false);

  const handleOpenModal90 = () => {
    setIsModalOpen90(true);
  };

  const handleCloseModal90 = () => {
    setIsModalOpen90(false);
  };

  const handleOpenModal110 = () => {
    setIsModalOpen110(true);
  };

  const handleCloseModal110 = () => {
    setIsModalOpen110(false);
  };

  const router = useRouter();
  return (
    <>
      <section class="bg-white ">
        <div class="px-6 py-10 mx-auto mt-8">
          <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
            {/* <img class="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"alt=""/> */}

            <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-16 ">
              <h2 className=" max-w-lg mb-6 mt-4 lg:mt-2 tracking-tight text-3xl font-black text-sky-950 sm:text-4xl sm:leading-none">
                Tres Patios
              </h2>
              <p className="text-base text-gray-700 md:text-lg mb-2">
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
                    Casa Club
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                    Cancha de Paddel
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                    Outdoor Gym
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                    Alberca
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                    Pet Park
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                    Canchas Deportivas
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                    Reading Spots
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                    Dynamic Playground
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                    Asadores
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                    Urban Garden
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
                    </span>
                    Neighbor Kiosco & Hammock Garden
                  </li>
                </ul>
              </div>

              {/* {"Villa 90m2 copy"} */}
            </div>
            <div className="object-cover w-[330px] mx-auto lg:w-[430px] justify-center bg-white">
              {/* <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96 bg-red-800"
            src=""
            alt=""
          /> */}

              <PropertyDetailImages />
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
        <div class="px-8 mb-2 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:px-12">
          {/* {"Villa 90m2"} */}

          <button
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
            onClick={() =>
              router.push(`properties/Playa_del_Carmen/Tres_Patios/depto_90m2`)
            }
          >
            Villa 90m2
          </button>

          <Villa90m2 isOpen90={isModalOpen90} onClose90={handleCloseModal90} />

          {/* {"Villa 110m2"} */}
          <button
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
            onClick={handleOpenModal110}
          >
            Villa 110m2
          </button>

          <Villa110m2
            isOpen110={isModalOpen110}
            onClose110={handleCloseModal110}
          />

          <button
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
            onClick={handleOpenModal90}
          >
            Villa 90m2
          </button>
          {/* {"Villa 110m2"} */}
          <button
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
            onClick={handleOpenModal110}
          >
            Villa 110m2
          </button>

          <Villa110m2
            isOpen110={isModalOpen110}
            onClose110={handleCloseModal110}
          />
        </div>
      </section>
      <div className="flex justify-center mt-6">
        <h4 className=" text-center max-w-lg  mt-4 text-xl font-black text-sky-950 ">
          Ubicación
        </h4>
      </div>
      <div class=" inset-0 h-[550px] mt-4 mb-8 px-4 lg:px-12 ">
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
