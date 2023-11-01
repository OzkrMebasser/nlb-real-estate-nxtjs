"use client";
import { createContext, useContext } from "react";
// import dataProperties from "../backend/dataProperties.json"
import {homeProperties,allProperties} from "../backend/dataProperties"




// const homePropertiesJson = JSON.stringify(homeProperties);
// const allPropertiesJson = JSON.stringify(allProperties);


export const PropertiesContext = createContext();
// const properties = [
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

export const PropertiesProvider = ({ children }) => {

  return (
    <PropertiesContext.Provider value={{ homeProperties, allProperties}}>
      {children}
    </PropertiesContext.Provider>
  );
};

// Make useUserContext Hook to easily use our context throughout the application
export function useProperties() {
  const context = useContext(PropertiesContext);
  if (!context)
    throw new Error(
      `No se encontro el context, necesita usar dentro del provider`
    );

  return context;
}
