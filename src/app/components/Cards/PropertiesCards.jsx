import React from "react";

import { useProperties } from "../../../context/PropertiesContext";
import { useRouter } from "next/navigation";

const PropertiesCards = ({ items, ruta }) => {
  const { properties } = useProperties();
  const router = useRouter();


  // const HandleRoute = () => {
  //   let decodedString = items.ubicacion;

  //   if (decodedString === "Playa%20del%20Carmen") {
  //     const encodedString = items.ubicacion;
  //     console.log(encodedString);
  //     const decodedString = decodeURIComponent(encodedString);
  //     console.log(decodedString);
  //     return decodedString;
  //   } else if (decodedString === "Quer%C3%A9taro") {
  //     const encodedString = items.ubicacion;
  //     const decodedString = decodeURIComponent(encodedString);
  //     console.log(decodedString);
  //     return decodedString;
  //   } else {
  //     console.log(decodedString);
  //     decodedString;
  //   }
  //   return router.push(`/properties/${decodedString}`);
  // };

  const { precio } = properties.map((p) => {
    p.precio;
  });

  function formatearPrecio(precio) {
    return precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <>
      <div
        className="p-4 mx-auto w-full rounded-lg shadow-md lg:max-w-sm mt-2"
        key={items.id}
        // onClick={HandleRoute}

        // onClick={() => router.push(`properties/${items.ubicacion}`)}
        onClick={() => router.push(`properties`)}
      >
        <h1 className="text-2xl text-sky-900 font-black">{items.desarrollo}</h1>
        <p> Ubicacion : {items.ubicacion}</p>
        <img
          className="object-cover w-full h-48"
          src={items.imagenCard}
          alt="image"
        />
        <div className="p-4">
          <h4 className="text-xl font-semibold text-blue-600">{items.title}</h4>
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
    </>
  );
};

export default PropertiesCards;
