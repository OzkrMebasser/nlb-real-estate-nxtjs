"use client";
import { useEffect, useState } from "react";
import { useProperties } from "../../context/PropertiesProvider";
import { useRouter } from "next/navigation";
import Loading from "../components/Loading/Loading";
import {Image} from "next"
// import Properties from "../components/Cards/Properties";
// const propiedades = [
//   {
//     id: 1,
//     desarrollo: "Tres Patios",
//     tipo: "Departamento",
//     ubicacion: "Playa del Carmen",
//     precio: 2500000,
//     //Inside property
//     habitaciones: 3,
//     baños: 2,
//     sala: "Sala",
//     cocina: "Cocina",
//     comedor: "Comedor",
//     closet: "Closets",
//     terraza: "Terraza",
//     metrosCuadrados: 90,
//     description: "Contamos con 6 Departamentos en villas por cada módulo de 90 m2 o 110 m2.",
//     imagenCard:
//       "https://maxproperties.com.mx/wp-content/uploads/2021/09/paam.webp",
//     embededMapSrc:
//       "https://maps.google.com/maps?width=945&amp;height=512&amp;hl=en&amp;q=Tres Patios&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed",
//   },
//   {
//     id: 2,
//     desarrollo: "Yaxchilan",
//     tipo: "Casa",
//     ubicacion: "Cancun",
//     precio: 3500000,
//     habitaciones: 4,
//     baños: 3,
//     metrosCuadrados: 200,
//     imagenCard:
//       "https://maxproperties.com.mx/wp-content/uploads/2022/05/INICIO-1.webp",
//   },
//   {
//     id: 3,
//     desarrollo: "Vidaraa",
//     tipo: "Departamento",
//     ubicacion: "Tulum",
//     precio: 1800000,
//     habitaciones: 2,
//     baños: 1,
//     metrosCuadrados: 90,
//     imagenCard:
//       "https://maxproperties.com.mx/wp-content/uploads/2022/05/lik_orga_inicio.png",
//   },
//   {
//     id: 4,
//     desarrollo: "Chanolandia",
//     tipo: "Casa",
//     ubicacion: "Cancun",
//     precio: 2800000,
//     habitaciones: 3,
//     baños: 2,
//     metrosCuadrados: 150,
//     imagenCard:
//       "https://maxproperties.com.mx/wp-content/uploads/2022/09/vidara_inicio.png",
//   },
//   {
//     id: 5,
//     desarrollo: "Parque Zama",
//     tipo: "Departamento",
//     ubicacion: "Tulum",
//     precio: 1500000,
//     habitaciones: 1,
//     baños: 1,
//     metrosCuadrados: 60,
//     imagenCard:
//       "https://maxproperties.com.mx/wp-content/uploads/2022/07/BECAN_INDES.webp",
//   },
//   {
//     id: 6,
//     desarrollo: "Paam Cheel",
//     tipo: "Departamento",
//     ubicacion: "Cancun",
//     precio: 1500000,
//     habitaciones: 1,
//     baños: 1,
//     metrosCuadrados: 60,
//     imagenCard:
//       "https://maxproperties.com.mx/wp-content/uploads/2023/05/yax.png",
//   },
//   {
//     id: 7,
//     desarrollo: "Fulano 7",
//     tipo: "Departamento",
//     ubicacion: "Cozumel",
//     precio: 900000,
//     habitaciones: 1,
//     baños: 1,
//     metrosCuadrados: 60,
//     imagenCard:
//       "https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     id: 8,
//     desarrollo: "Fulano 8",
//     tipo: "Departamento",
//     ubicacion: "Playa del Carmen",
//     precio: 800000,
//     habitaciones: 1,
//     baños: 1,
//     metrosCuadrados: 60,
//     imagenCard:
//       "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     id: 9,
//     desarrollo: "Fulano 9",
//     tipo: "Departamento",
//     ubicacion: "Merida",
//     precio: 1500000,
//     habitaciones: 1,
//     baños: 1,
//     metrosCuadrados: 60,
//     imagenCard:
//       "https://images.pexels.com/photos/36362/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
// ];





function Allproperties() {
  const {allProperties} = useProperties();
  const router = useRouter()

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
  }, [ubicacion, precio,allProperties]);

  const clearFilters = () => {
    setUbicacion("");
    setPrecio();
  };

  useEffect(() => {
    // Simulating an API call or data loading
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
            className="p-4 mx-auto w-full rounded-lg shadow-md lg:max-w-sm mt-2"
            key={items.id}
            // onClick={HandleRoute}

            // onClick={() => router.push(`properties/${items.ubicacion}`)}
            onClick={() => router.push(`${items.route}`)}
          >
            <h1 className="text-2xl text-sky-900 font-black">
              {items.desarrollo}
            </h1>
            <p> Ubicacion : {items.ubicacion}</p>
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
              <button className=" mx-auto px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                Propiedades desde ${formatearPrecio(items.precio)}
              </button>
              <div>Tipo : {items.tipo}</div>
              <p>Habitaciones : {items.habitaciones}</p>
              <p>M² : {items.metrosCuadrados}</p>
              <p>Baños : {items.baños}</p>
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
