"use client";
import HeroSlider from "./components/Hero/HeroSlides";
import HomeProperties from "./components/Cards/HomeProperties";
import useLanguage from "@/context/hooks/useLanguage";
import en from "@/context/languages/en";
import es from "@/context/languages/es";


export default function Home() {
  const { language, setLanguage } = useLanguage();
  return (
    <>
      <div className="bg-[#F3F4F6]">
        <HeroSlider />
        <h2 className="text-center mt-8 text-3xl font-black text-sky-950">
          {/*PROPIEDADES DESTACADAS*/}
        {language === es ? es.featuredProperties : en.featuredProperties}
        </h2>
        <HomeProperties />
      </div>
    </>
  );
}
