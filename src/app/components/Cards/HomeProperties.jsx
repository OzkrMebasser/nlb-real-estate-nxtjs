"use client";
import React from "react";
import { TfiNewWindow } from "react-icons/tfi";
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
                  className="p-4 mx-auto w-full rounded-lg shadow-md lg:max-w-sm mt-2"
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
                      {language === es ? es.typeCard : en.typeCard}

                      {/*Tipo de edificio. Casa, Depto etc*/}
                      <strong>
                        {language === es ? es[items.tipo] : en[items.tipo]}
                      </strong>
                    </div>
                    <p className="">
                     
                     <strong>
                       {language === es
                         ? es[items.metrosCuadrados]
                         : en[items.metrosCuadrados]}
                     </strong>
                   </p> 
                    <p>
                      {/* Habitaciones :  */}
                      {language === es ? es.bedroomsCard : en.bedroomsCard}
                      <strong>
                        {language === es
                          ? es[items.habitaciones]
                          : en[items.habitaciones]}
                      </strong>
                    </p>
                   
                    <p className="mb-2">
                      {/* Baños :  */}
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
