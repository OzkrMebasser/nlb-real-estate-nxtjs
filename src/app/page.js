"use client";
import HeroSlider from "@/components/Hero/HeroSlides";
import Properties from "@/components/Cards/Properties";
// import {usePropertiesContext} from "./context/PropertiesContext"

// const { propiedades} = usePropertiesContext();
export default function Home() {
  return (
    <>
      <div className="bg-[#F3F4F6] pt-10 pb-10 lg:pt-[120px] lg:pb-20  ">
        <HeroSlider />
        <h2 className="text-center bg-[red] mt-6 text-3xl font-black text-sky-950">
          Nuestras propiedades mas vendidas{" "}
        </h2>
        <Properties />
      </div>
    </>
  );
}
