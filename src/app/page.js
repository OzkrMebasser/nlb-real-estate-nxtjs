"use client";
import HeroSlider from "@/components/Hero/HeroSlides";
import Properties from "@/components/Cards/Properties";
// import {usePropertiesContext} from "./context/PropertiesContext"

// const { propiedades} = usePropertiesContext();
export default function Home() {
  return (
    <>
      <div className="bg-[#F3F4F6]">
        <HeroSlider />
        <h2 className="text-center mt-8 text-3xl font-black text-sky-950">
          Nuestras propiedades mas vendidas{" "}
        </h2>
        <Properties />
      </div>
    </>
  );
}
