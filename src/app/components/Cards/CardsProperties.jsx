import React from "react";

const CardsProperties = function() {
    const propiedades = [
        {
          id: 1,
          desarrollo: "Becán",
          tipo: 'Departamento',
          ubicacion: 'Playa del Carmen',
          precio: 2000000,
          habitaciones: 3,
          baños: 2,
          metrosCuadrados: 120,
          imagenCard: "https://maxproperties.com.mx/wp-content/uploads/2021/09/paam.webp"
        },
        {
          id: 2,
          tipo: 'Casa',
          desarrollo: "Yaxchilan",
          ubicacion: 'Cancun',
          precio: 3500000,
          habitaciones: 4,
          baños: 3,
          metrosCuadrados: 200,
          imagenCard: "https://maxproperties.com.mx/wp-content/uploads/2022/05/INICIO-1.webp"
        },
        {
          id: 3,
          desarrollo: "Vidaraa",
          tipo: 'Departamento',
          ubicacion: 'Tulum',
          precio: 1800000,
          habitaciones: 2,
          baños: 1,
          metrosCuadrados: 90,
          imagenCard: "https://maxproperties.com.mx/wp-content/uploads/2022/05/lik_orga_inicio.png"
        },
        {
          id: 4,
          desarrollo: "Chanolandia",
          tipo: 'Casa',
          ubicacion: 'Querétaro',
          precio: 2800000,
          habitaciones: 3,
          baños: 2,
          metrosCuadrados: 150,
          imagenCard: "https://maxproperties.com.mx/wp-content/uploads/2022/09/vidara_inicio.png"
        },
        {
          id: 5,
          desarrollo: "Parque Zama",
          tipo: 'Departamento',
          ubicacion: 'Puebla',
          precio: 1500000,
          habitaciones: 1,
          baños: 1,
          metrosCuadrados: 60,
          imagenCard: "https://maxproperties.com.mx/wp-content/uploads/2022/07/BECAN_INDES.webp"
        },
        {
          id: 6,
          desarrollo: "Paam Cheel",
          tipo: 'Departamento',
          ubicacion: 'Puebla',
          precio: 1500000,
          habitaciones: 1,
          baños: 1,
          metrosCuadrados: 60,
          imagenCard: "https://maxproperties.com.mx/wp-content/uploads/2023/05/yax.png"
        }
      ];

    const {precio} = propiedades.map(p => {p.precio});

        function formatearPrecio(precio) {
            return precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }

    return (
        <>
       
        <section class="bg-[#F3F4F6] pt-20 pb-10 lg:pt-[120px] lg:pb-20 ">
        <h2 className="text-center text-3xl font-black text-sky-950 mb-6">Nuestras propiedades mas vendidas</h2>
            <div className="container mx-auto"> 

    

            <div className="mx-auto grid gap-2 lg:grid-cols-3 ">
                {propiedades.map((items, key) => (
                    <div className="mx-auto w-full rounded-lg shadow-md lg:max-w-sm mt-4" key={key}>
                        <h1 className="text-2xl text-sky-900 font-black">{items.desarrollo}</h1>
                        <p>Ubicacion : {items.ubicacion}</p>
                        <img
                            className="object-cover w-full h-48"
                            src={items.imagenCard}
                            alt="image"
                        />
                        <div className="p-4">
                            <h4 className="text-xl font-semibold text-blue-600">
                                
                                {items.title}
                            </h4>
                            <p className="mb-2 leading-normal">
                            {items.content}
                            </p>
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
            </div>
            </section>
            </>
    );
}

export default CardsProperties;