"use client";
import React from "react";
import { TfiNewWindow, TfiRulerPencil } from "react-icons/tfi";
import {PiBathtub} from "react-icons/pi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import {IoBedOutline} from  "react-icons/io5"
import {RxRulerHorizontal} from "react-icons/rx";
import { useProperties } from "../../../context/PropertiesProvider";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useLanguage from "@/context/hooks/useLanguage";
import en from "@/context/languages/en";
import es from "@/context/languages/es";

const HomeProperties = () => {
  const { homeProperties } = useProperties();
  const { language, setLanguage } = useLanguage();

  const router = useRouter();

  const { precio } = homeProperties.map((p) => {
    p.precio;
  });

  function formatearPrecio(precio) {
    return precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <>
      <section className=" pt-4 pb-4 lg:pt-4 lg:pb-4 ">
        <div className=" lg:px-16 mx-auto pb-8">
          {
            <div className="mx-auto grid gap-2 lg:grid-cols-3 ">
              {homeProperties.map((items) => (
                <div
                  className="p-4 mx-auto w-full rounded-lg shadow-md lg:max-w-sm mt-2 hover:scale-95 hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition-transform duration-300 "
                  key={items.id}
                  // onClick={HandleRoute}

                  // onClick={() => router.push(`properties/${items.ubicacion}`)}
                  // onClick={() => router.push(`properties}`)}
                >
                  <h1 className="text-2xl text-sky-900 font-black">
                    {items.desarrollo}
                  </h1>
                  <p className="mb-3">
                    {/* Ubicación  */}
                    {language === es ? es.propiedades : en.propiedades}{" "}
                    <strong className="text-teal-900 uppercase font-black">
                      {items.ubicacion}
                    </strong>
                  </p>
                  <img
                    className="object-cover w-full h-48"
                    src={items.imagenCard}
                    alt="image"
                  />
                  <div className="p-4">
                    <h4 className="text-xl font-semibold text-blue-800">
                      {items.title}
                    </h4>
                    <p className="mb-2 leading-normal">{items.content}</p>
                    <button className="mb-4 w-full px-4 py-2 text-sm text-blue-100 bg-teal-800 rounded">
                      {/* Propiedades desde US  */}
                      {language === es ? es.pricesFromCard : en.pricesFromCard}$
                      {formatearPrecio(items.precio)}
                    </button>
                    <div>
                      {/* Tipo : */}
                      <HiOutlineBuildingOffice2 className="inline font-extrabold text-[1.4rem] " />
                      {/* {language === es ? es.typeCard : en.typeCard} */}

                      {/*Tipo de edificio. Casa, Depto etc*/}
                      <span className="ml-2"></span>
                      <strong >
                        {language === es ? es[items.tipo] : en[items.tipo]}
                      </strong>

                      
                      
                    </div>
                    <p className="">
                    <RxRulerHorizontal className="inline font-extrabold text-[1.1rem] " />
                    <span className="ml-2"></span>
                     <strong>
                       {language === es
                         ? es[items.metrosCuadrados]
                         : en[items.metrosCuadrados]}
                     </strong>
                   </p> 
                    <p>
                      {/* Habitaciones :  */}
                      <IoBedOutline className="inline font-extrabold text-[1.3rem] " />
                    <span className="ml-2"></span>
                      {language === es ? es.bedroomsCard : en.bedroomsCard}
                      <strong>
                        {language === es
                          ? es[items.habitaciones]
                          : en[items.habitaciones]}
                      </strong>
                    </p>
                   
                    <p className="mb-2">
                      {/* Baños :  */}
                      <PiBathtub className="inline font-extrabold text-[1.1rem] " />
                    <span className="ml-2"></span>
                      {language === es ? es.bathroomsCard : en.bathroomsCard}
                      <strong>
                      {language === es
                          ? es[items.baños]
                          : en[items.baños]}
                        </strong>
                    </p>
                   
                    <p className="mb-4 ">
                     
                      <strong>
                        {language === es
                          ? es[items.ymuchomas]
                          : en[items.ymuchomas]}
                      </strong>
                    </p>


                   
                      {/*Ver este proyecto*/}
                      <Link  href={`properties/${items.route2}`}>
                      <button
                      // onClick={() => router.push(`properties/${items.route2}`)}
                      className="w-full mx-auto px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow"
                    >
                        {language === es ? es.verProyecto : en.verProyecto}
                      <TfiNewWindow className="inline ml-5 text-lg mb-2 font-black" />
                      </button>
                      </Link>
                      
                    
                  </div>
                </div>
              ))}
            </div>
          }
        </div>
      </section>
    </>
  );
};

export default HomeProperties;
