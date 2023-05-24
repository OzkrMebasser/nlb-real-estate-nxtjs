"use client"
import {useProperties} from "../../../context/PropertiesContext"
import { useRouter } from "next/navigation";
import PropertiesCards from "../../components/Cards/PropertiesCards"

function Properties () {
 
    const {properties} = useProperties();
    // console.log(properties)
   
    const router = useRouter()

//     // ID del objeto a filtrar
// const specificDesarrollo = properties.desarrollo;
// console.log(specificDesarrollo)

// // Filtrar el objeto específico
// const filteredObject = items.find(item => item.desarrollo === specificDesarrollo);

// // Mostrar el valor deseado del objeto
// if (filteredObject) {
//   console.log(filteredObject.value);
// } else {
//   console.log('No se encontró el objeto con el ID especificado.');
// }


    return (
        <>
       
        <section className=" pt-4 pb-4 lg:pt-4 lg:pb-4 ">

            <div className=" px-16 mx-auto pb-8"> 

    
            <div className="mx-auto grid gap-2 lg:grid-cols-3 ">
                {properties.map((items) => (
                    <PropertiesCards items={items} key={items.id}/>
                ))}
            </div>
            </div>
        
            </section>
            </>
    );
}

export default Properties;