"use client";
import { createContext, useContext } from "react";

export const PropertiesContext = createContext();

export const PropertiesProvider = ({ children }) => {
  const properties = [
    {
      id: 1,
      desarrollo: "Becán",
      tipo: "Departamento",
      ubicacion: "Playa del Carmen",
      precio: 2000000,
      habitaciones: 3,
      baños: 2,
      metrosCuadrados: 120,
      imagenCard:
        "https://maxproperties.com.mx/wp-content/uploads/2021/09/paam.webp",
    },
    {
      id: 2,
      tipo: "Casa",
      desarrollo: "Yaxchilan",
      ubicacion: "Cancun",
      precio: 3500000,
      habitaciones: 4,
      baños: 3,
      metrosCuadrados: 200,
      imagenCard:
        "https://maxproperties.com.mx/wp-content/uploads/2022/05/INICIO-1.webp",
    },
    {
      id: 3,
      desarrollo: "Vidaraa",
      tipo: "Departamento",
      ubicacion: "Tulum",
      precio: 1800000,
      habitaciones: 2,
      baños: 1,
      metrosCuadrados: 90,
      imagenCard:
        "https://maxproperties.com.mx/wp-content/uploads/2022/05/lik_orga_inicio.png",
    },
    {
      id: 4,
      desarrollo: "Chanolandia",
      tipo: "Casa",
      ubicacion: "Querétaro",
      precio: 2800000,
      habitaciones: 3,
      baños: 2,
      metrosCuadrados: 150,
      imagenCard:
        "https://maxproperties.com.mx/wp-content/uploads/2022/09/vidara_inicio.png",
    },
    {
      id: 5,
      desarrollo: "Parque Zama",
      tipo: "Departamento",
      ubicacion: "Puebla",
      precio: 1500000,
      habitaciones: 1,
      baños: 1,
      metrosCuadrados: 60,
      imagenCard:
        "https://maxproperties.com.mx/wp-content/uploads/2022/07/BECAN_INDES.webp",
    },
    {
      id: 6,
      desarrollo: "Paam Cheel",
      tipo: "Departamento",
      ubicacion: "Puebla",
      precio: 1500000,
      habitaciones: 1,
      baños: 1,
      metrosCuadrados: 60,
      imagenCard:
        "https://maxproperties.com.mx/wp-content/uploads/2023/05/yax.png",
    },
  ];

  
  return (
    <PropertiesContext.Provider value={{ properties }}>
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
