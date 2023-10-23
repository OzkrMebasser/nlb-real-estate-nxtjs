"use client";
import { useEffect, useState } from "react";
import { useProperties } from "../../context/PropertiesProvider";
import { useRouter } from "next/navigation";
import { TfiNewWindow, TfiRulerPencil } from "react-icons/tfi";
import { PiBathtub } from "react-icons/pi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoBedOutline } from "react-icons/io5";
import { RxRulerHorizontal } from "react-icons/rx";
import useLanguage from "@/context/hooks/useLanguage";
import en from "@/context/languages/en";
import es from "@/context/languages/es";
import Loading from "../components/Loading/Loading";
import Link from "next/link"

function Allproperties() {
  const { allProperties } = useProperties();
  const { language, setLanguage } = useLanguage();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  // const [filteredEmployees, setFilteredEmployees] = useState(employees);
  const [filteredPropiedades, setfilteredPropiedades] = useState(allProperties);

  // const [department, setDepartment] = useState("");
  const [ubicacion, setUbicacion] = useState("");

  // const [experience, setExperience] = useState();
  const [precio, setPrecio] = useState();

  // Using set to filter unique values
  const ubicaciones = Array.from(
    new Set(allProperties.map((propiedad) => propiedad.ubicacion))
  );

  useEffect(() => {
    setfilteredPropiedades(
      allProperties.filter((propiedad) => {
        return (
          (!ubicacion || ubicacion === propiedad.ubicacion) &&
          (!precio ||
            (precio === "LESS_THAN_1M"
              ? propiedad.precio < 1000000
              : propiedad.precio >= 1000000))
        );
      })
    );
  }, [ubicacion, precio, allProperties]);

  const clearFilters = () => {
    setUbicacion("");
    setPrecio();
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const { price } = allProperties.map((p) => {
    p.precio;
  });

  function formatearPrecio(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <>
      <div className="mt-24 mx-auto justify-center">
        <h2 className="text-center mt-8 text-3xl font-black text-sky-950">
          Nuestro portafolio{" "}
        </h2>

        {/* <Properties /> */}
        <div className="text-center mt-6">
          <select
            className="mt-1 block w-[300px] mx-auto py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            onChange={(e) => setUbicacion(e.target.value)}
            value={ubicacion}
          >
            <option value="" disabled>
              Selecciona una Ubicación
            </option>

            {ubicaciones.map((ubicacion) => {
              return <option key={ubicacion}>{ubicacion}</option>;
            })}
          </select>
          <div className=" mx-auto w-[350px] flex justify-between mt-6">
            <button
              className={` mx-auto px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow ${
                precio === "LESS_THAN_1M" ? "selected bg-slate-600" : ""
              }`}
              onClick={() => setPrecio("LESS_THAN_1M")}
            >
              Menos de $1,000,000
            </button>
            <button
              className={` mx-auto px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow${
                precio === "1M_PLUS" ? "selected" : ""
              }`}
              onClick={() => setPrecio("1M_PLUS")}
            >
              Mas de $1,000,000
            </button>
          </div>
          <button
            className="mx-auto mt-4 px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow"
            onClick={clearFilters}
          >
            Ver todas las ubicaciones
          </button>
          {/* <ul>
        {filteredPropiedades.map((propiedad) => {
          const { ubicacion, precio, desarrollo, id } = propiedad;
          return (
            <li key={id}>
              <div>
                Desarrollo: <strong>{desarrollo}</strong>
              </div>
              <div>Precio: {precio} year(s)</div>
              <div>Ubicacion: {ubicacion}</div>
            </li>
          );
        })}
        {filteredPropiedades.length === 0 && (
          <div>Por el momento no tenemos propedidade de ese precio</div>
        )}
      </ul> */}
        </div>

        <section className=" pt-4 pb-4 lg:pt-4 lg:pb-4 ">
          <div className="lg:px-16 mx-auto pb-8">
            {isLoading ? (
              <Loading />
            ) : (
              <div className="mx-auto grid gap-2 lg:grid-cols-3 ">
                {filteredPropiedades.map((items) => (
                  <div
                  className="p-4 mx-auto w-full rounded-lg shadow-md lg:max-w-sm mt-2 hover:scale-95 hover:shadow-[0_10px_20px_rgba(0,0,0,0.38)] transition-transform duration-300 "
                    key={items.id}
                    // onClick={HandleRoute}

                    // onClick={() => router.push(`properties/${items.ubicacion}`)}
                    onClick={() => router.push(`${items.route}`)}
                  >
                    <h1 className="uppercase text-2xl text-sky-900 font-black">
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
                      <h4 className="text-xl font-semibold text-blue-600">
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
                      <span className=" "><HiOutlineBuildingOffice2 className="inline font-extrabold text-[1.4rem] " /></span>
                      <span className=" ml-2">
                      <strong>
                        {language === es ? es[items.tipo] : en[items.tipo]}
                      </strong></span>
                      {/* {language === es ? es.typeCard : en.typeCard} */}

                      {/*Tipo de edificio. Casa, Depto etc*/}
                      
                    </div>
                    <p className="">
                    <span className="">
                      <RxRulerHorizontal className="inline font-extrabold text-[1.1rem] " />
                      </span>
                      <span className="ml-3">
                      <strong>
                        {language === es
                          ? es[items.metrosCuadrados]
                          : en[items.metrosCuadrados]}
                      </strong>
                      </span>
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
                      <PiBathtub className="inline font-extrabold text-[1.3rem] " />
                      <span className="ml-2"></span>
                      {language === es ? es.bathroomsCard : en.bathroomsCard}
                      <strong>
                        {language === es ? es[items.banios] : en[items.banios]}
                      </strong>
                    </p>

                    <p className="mb-4">
                      <strong>
                        {language === es
                          ? es[items.ymuchomas]
                          : en[items.ymuchomas]}
                      </strong>
                    </p>

                    {/*Ver este proyecto*/}
                    <Link href={`properties/${items.route2}`}>
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
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export default Allproperties;

//https://www.youtube.com/watch?v=jN_s2uKntmc&t=64s
//https://react-filter-object-array.vercel.app/
//https://github.com/collegewap/react-filter-object-array/blob/master/src/App.js
