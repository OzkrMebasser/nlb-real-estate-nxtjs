"use client";
import { useParams } from "next/navigation";
// import { useRouter } from "next/router";

import Properties from "@/components/Cards/Properties";

// const router = useRouter();

// const { encodedString } = router.query;

const Page = ({items}) => {
  const params = useParams();

  const { location } = params;

  // let decodedString = location;

  // if (decodedString === "Playa%20del%20Carmen") {
  //   // Realiza una acción específica para 'valor1'
  //   const encodedString = location;
  //   console.log(encodedString);
  //   const decodedString = decodeURIComponent(encodedString);
  //   console.log(decodedString);
  //   return decodedString;
  // } else if (decodedString === "Quer%C3%A9taro") {
  //   // Realiza una acción específica para 'valor2'
  //   const encodedString = location;
  //   const decodedString = decodeURIComponent(encodedString);
  //   console.log(decodedString);
  //   return decodedString;
  // } else {
  //   console.log(decodedString);
  //   decodedString;
  // }

  let pdc = "Playa%20del%20Carmen";
  let qro = "Quer%C3%A9taro";

  const routes = location === pdc ? "Playa del Carmen" : location === qro ? "Querétaro" : location;
  // let decodedRoute = location;
  // if(decodedRoute === "Playa%20del%20Carmen"){
  //   console.log("Playa del Carmen")
  // }else if(decodedRoute === "Quer%C3%A9taro" ){
  //   return "Querétaro"
  // }else{
  //   decodedRoute
  // }

  return (
    <div className="mt-24 mx-auto">
      <h1 className="text text-center">
        Nuestras propiedades en {routes}{" "}
      </h1>
      <Properties />
    </div>
  );
};

export default Page;
