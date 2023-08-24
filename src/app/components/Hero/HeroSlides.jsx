"use client";

import HeroSlider, { Slide, MenuNav } from "hero-slider";
import useLanguage from "@/context/hooks/useLanguage";
import en from "@/context/languages/en";
import es from "@/context/languages/es";

import "../NavBar/NavBar.css";

//IMAGES SLIDES
const fotoHero1 =
  // Tulum
  "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/heroImages%2Fheroimage1-tulum.jpeg?alt=media&token=ce7fa2f7-2eca-4ef0-8ce7-74000e153cd1";
const fotoHero2 =
  // "Tres Patios";
  "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/heroImages%2Fheroimage2-tresPatios-.jpg?alt=media&token=0ef27096-fa8d-4e6a-9fa4-3e416c2f9b72";
const fotoHero3 =
  // "Madre tierra";
  "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/heroImages%2Fheroimage3-madreTiera.jpg?alt=media&token=c4186920-5027-4037-bc80-1f3790e5970c";
const fotoHero4 =
  // "Vidarah";
  "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/heroImages%2Fheroimage4-vidara.webp?alt=media&token=2be3b69b-bf24-47d6-91eb-78ed133253d3";

const fotoHero5 =
  //Cenote o Cancun
  "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/heroImages%2Fheroimage5-cancun.jpeg?alt=media&token=54ea1d35-7c29-46f8-a2ab-bbfe5c66ee4e";
const fotoHero6 =
  //Atimar
  "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/heroImages%2Fheroimage6-ATHIMAR.jpg?alt=media&token=5b395a3a-b857-4c1d-b510-23a1d3be376f";

function LabelIndex({ labelIndex }) {
  return (
    <>
      <p>{labelIndex}</p>
    </>
  );
}


function SlideLabel({ textLabel }) {
  return <p className="">{textLabel}</p>;
}

function LabelOne() {
  const { language, setLanguage } = useLanguage();
  const indexOne = language === es ? es.labelHero_1 : en.labelHero_1;
  return (
    <>
      <SlideLabel textLabel={<LabelIndex labelIndex={indexOne} />} />
    </>
  );
}

function LabelTwo() {
  const { language, setLanguage } = useLanguage();
  const indexTwo = language === es ? es.labelHero_2 : en.labelHero_2;
  return (
    <>
      <SlideLabel textLabel={<LabelIndex labelIndex={indexTwo} />} />
    </>
  );
}

function LabelThree() {
  const { language, setLanguage } = useLanguage();
  const indexThree = language === es ? es.labelHero_3 : en.labelHero_3;
  return (
    <>
      <SlideLabel textLabel={<LabelIndex labelIndex={indexThree} />} />
    </>
  );
}

function LabelFour() {
  const { language, setLanguage } = useLanguage();
  const indexFour = language === es ? es.labelHero_4 : en.labelHero_4;
  return (
    <>
      <SlideLabel textLabel={<LabelIndex labelIndex={indexFour} />} />
    </>
  );
}

function LabelFive(){
  const {language,setLanguage}=useLanguage();
  const indexFive = language === es ? es.labelHero_5 : en.labelHero_5;
  return (
    <>
      <SlideLabel textLabel={<LabelIndex labelIndex={indexFive} />} />
    </>
  )
}

function LabelSix(){
  const {language,setLanguage}=useLanguage();
  const indexSix = language === es ? es.labelHero_6 : en.labelHero_6;
  return (
    <>
      <SlideLabel textLabel={<LabelIndex labelIndex={indexSix} />} />
    </>
  )
}


export default function BasicSlider() {
  const { language, setLanguage } = useLanguage();

  const slides = [
    {
      id: 1,
      label: language === es ? es.labelHero_1 : en.labelHero_1,
      img: fotoHero1,
    },
    {
      id: 2,
      label: language === es ? es.labelHero_2 : en.labelHero_2,
      img: fotoHero2,
    },
    {
      id: 3,
      label: language === es ? es.labelHero_3 : en.labelHero_3,
      img: fotoHero3,
    },
    {
      id: 4,
      label: language === es ? es.labelHero_4 : en.labelHero_4,
      img: fotoHero4,
    },
    {
      id: 5,
      label: language === es ? es.labelHero_5 : en.labelHero_5,
      img: fotoHero5,
    },
    {
      id: 6,
      label: language === es ? es.labelHero_6 : en.labelHero_6,
      img: fotoHero6,
    },
  ];

  return (
    <div className="mt-0">
      <HeroSlider
        height={"100vh"}
        autoplay
        controller={{
          initialSlide: 1,
          slidingDuration: 300,
          slidingDelay: 50,
          onSliding: (nextSlide) =>
            console.debug("onSliding(nextSlide): ", nextSlide),
          onBeforeSliding: (previousSlide, nextSlide) =>
            console.debug(
              "onBeforeSliding(previousSlide, nextSlide): ",
              previousSlide,
              nextSlide
            ),
          onAfterSliding: (nextSlide) =>
            console.debug("onAfterSliding(nextSlide): ", nextSlide),
        }}
      >
        <span className="flex flex-col flex-wrap justify-center items-center w-full h-full pointer-events-none m-0 p-0 z-40 text-center sm:text-left md:text-center lg:text-right">
          <h1 className="px-4 titleShadow items-center justify-center z-40 mb-4 text-xl lg:text-3xl font-bold text-[white]">
            {/*TITULO HERO */}
            {language === es ? es.heroTitle : en.heroTitle}
          </h1>
          <h3 className="titleShadow items-center justify-center z-40 text-lg lg:text-2xl font-bold text-[white] ">
            {/*SUBTITULO HERO*/}
            {language === es ? es.heroSubTitle : en.heroSubTitle}
          </h3>
        </span>

      

        <Slide
          // shouldRenderMask
          label={<LabelOne />}
          background={{
            backgroundImageSrc: fotoHero1,
          }}
        />

        <Slide
          // shouldRenderMask
          label={<LabelTwo/>}
          background={{
            backgroundImageSrc: fotoHero2,
          }}
        />

        <Slide
          // shouldRenderMask
          label={<LabelThree/>}
          background={{
            backgroundImageSrc: fotoHero3,
          }}
        />

        <Slide
          // shouldRenderMask
          label={<LabelFour/>}
          background={{
            backgroundImageSrc: fotoHero4,
          }}
        />
        <Slide
          // shouldRenderMask
          label={<LabelFive/>}
          background={{
            backgroundImageSrc: fotoHero5,
          }}
        />
        <Slide
          // shouldRenderMask
          label={<LabelSix/>}
          background={{
            backgroundImageSrc: fotoHero6,
          }}
        />

        {/* */}

        <MenuNav />
      </HeroSlider>
    </div>
  );
}

