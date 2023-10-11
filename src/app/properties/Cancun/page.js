"use client";
import { useEffect, useState } from "react";
import { useProperties } from "../../../context/PropertiesProvider";
import { useRouter } from "next/navigation";
import Loading from "../../components/Loading/Loading";






function CancunProperties() {
  const {allProperties} = useProperties();
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(true);

  

  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    const playaDelCarmenProperties = allProperties.filter(
      p => p.ubicacion === 'Cancun'
    );

    setFilteredProperties(playaDelCarmenProperties);
  }, [allProperties]);
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
          Propiedades en Cancún
        </h2>

        {/* <Properties /> */}
    

        <section className=" pt-4 pb-4 lg:pt-4 lg:pb-4 ">
          <div className="lg:px-16 mx-auto pb-8">

          {isLoading ? (
        <Loading />
      ) : (
        <div className="mx-auto grid gap-2 lg:grid-cols-3 ">
        {filteredProperties.map((items) => (
          <div
            className="p-4 mx-auto w-full rounded-lg shadow-md lg:max-w-sm mt-2"
            key={items.id}
            // onClick={HandleRoute}

            // onClick={() => router.push(`properties/${items.ubicacion}`)}
            onClick={() => router.push(`${items.route2}`)}
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

export default CancunProperties;

