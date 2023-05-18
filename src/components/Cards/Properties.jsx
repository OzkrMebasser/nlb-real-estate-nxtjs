"use client"
import {useProperties} from "../../context/PropertiesContext"
import { useRouter } from "next/navigation";

function Properties () {
 
    const {properties} = useProperties();
   
    const router = useRouter()

      const {precio} = properties.map(p => {p.precio});

  function formatearPrecio(precio) {
      return precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


    return (
        <>
       
        <section className="bg-[#F3F4F6] pt-10 pb-10 lg:pt-[120px] lg:pb-20 ">

            <div className="container mx-auto"> 

    

            <div className="mx-auto grid gap-2 lg:grid-cols-3 ">
                {properties.map((items, key) => (
                    <div className="mx-auto w-full rounded-lg shadow-md lg:max-w-sm mt-4" key={key}
                    onClick={()=> 
                    router.push(`properties/${items.ubicacion}`)
                    }
                    >
                        <h1 className="text-2xl text-sky-900 font-black">{items.desarrollo}</h1>
                        <p > Ubicacion : { items.ubicacion}</p>
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

export default Properties;