"use client"
import React from 'react'
import {useProperties} from "../../../context/PropertiesContext";
import { useRouter } from "next/navigation";


const HomeProperties = () => {
    const {properties} = useProperties();
    const router = useRouter();
    
    // const homeProperties = properties[1,2,5];
    const objetosFiltrados = properties.filter(objeto => objeto.id > 3 );


    const { precio } = properties.map((p) => {
      p.precio;
    });
  
    function formatearPrecio(precio) {
      return precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


  return (
    <>
       
    <section className=" pt-4 pb-4 lg:pt-4 lg:pb-4 ">

        <div className=" px-16 mx-auto pb-8"> 


        {<div className="mx-auto grid gap-2 lg:grid-cols-3 ">
            {objetosFiltrados.map((items) => (
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
            ))}
        </div> }
        </div>
    
        </section>
        </>
  )
}

export default HomeProperties;