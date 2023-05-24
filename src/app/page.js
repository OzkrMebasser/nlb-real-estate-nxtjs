"use client";
import HeroSlider from "./components/Hero/HeroSlides";
import HomeProperties from "./components/Cards/HomeProperties";



export default function Home() {
  return (
    <>
      <div className="bg-[#F3F4F6]">
        <HeroSlider />
        <h2 className="text-center mt-8 text-3xl font-black text-sky-950">
          Nuestras propiedades mas vendidas{" "}
        </h2>
        <HomeProperties />
      </div>
    </>
  );
}
