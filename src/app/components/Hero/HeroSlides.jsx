"use client";

import HeroSlider, { Slide, MenuNav } from "hero-slider";
import useLanguage from "@/context/hooks/useLanguage";
import en from "@/context/languages/en";
import es from "@/context/languages/es";

import "../NavBar/NavBar.css";

//IMAGES SLIDES
const fotoHero1 =
  // Tulum
  "https://firebasestorage.googleapis.com/v0/b/nlb-res-hero-b1.appspot.com/o/hero-slider-imgs%2Fheroimage1-tulum.jpeg?alt=media&token=cc54972d-9870-47fd-96c6-5c6fe49491f4";
const fotoHero2 =
  // "Tres Patios";
  "https://firebasestorage.googleapis.com/v0/b/nlb-res-hero-b1.appspot.com/o/hero-slider-imgs%2Fheroimage2-tresPatios-.jpg?alt=media&token=f1b25e37-8070-4816-a666-773f779cb12c";
const fotoHero3 =
  // "Madre tierra";
  "https://firebasestorage.googleapis.com/v0/b/nlb-res-hero-b1.appspot.com/o/hero-slider-imgs%2Fheroimage3-madreTiera.jpg?alt=media&token=86f0fc66-5131-4172-8ba0-339d2734aa5f";
const fotoHero4 =
  // "Vidarah";
  "https://firebasestorage.googleapis.com/v0/b/nlb-res-hero-b1.appspot.com/o/hero-slider-imgs%2Fheroimage4-vidara.webp?alt=media&token=2e37eaa0-219a-4a5d-ab36-7d94f9c830dd";

const fotoHero5 =
  //Cenote o Cancun
  "https://firebasestorage.googleapis.com/v0/b/nlb-res-hero-b1.appspot.com/o/hero-slider-imgs%2Fheroimage5-cancun.jpeg?alt=media&token=d9be341a-445d-4cbd-b56c-e0cee2e5d0f6";
const fotoHero6 =
  //Atimar
  "https://firebasestorage.googleapis.com/v0/b/nlb-res-hero-b1.appspot.com/o/hero-slider-imgs%2Fheroimage6-ATHIMAR.jpg?alt=media&token=fa0426ff-a399-4d1c-83b6-e5e3d2088a85";

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
  const indexOne = language === es ? es.hero.labelHero_1 : en.hero.labelHero_1;
  return (
    <>
      <SlideLabel textLabel={<LabelIndex labelIndex={indexOne} />} />
    </>
  );
}

function LabelTwo() {
  const { language, setLanguage } = useLanguage();
  const indexTwo = language === es ? es.hero.labelHero_2 : en.hero.labelHero_2;
  return (
    <>
      <SlideLabel textLabel={<LabelIndex labelIndex={indexTwo} />} />
    </>
  );
}

function LabelThree() {
  const { language, setLanguage } = useLanguage();
  const indexThree = language === es ? es.hero.labelHero_3 : en.hero.labelHero_3;
  return (
    <>
      <SlideLabel textLabel={<LabelIndex labelIndex={indexThree} />} />
    </>
  );
}

function LabelFour() {
  const { language, setLanguage } = useLanguage();
  const indexFour = language === es ? es.hero.labelHero_4 : en.hero.labelHero_4;
  return (
    <>
      <SlideLabel textLabel={<LabelIndex labelIndex={indexFour} />} />
    </>
  );
}

function LabelFive(){
  const {language,setLanguage}=useLanguage();
  const indexFive = language === es ? es.hero.labelHero_5 : en.hero.labelHero_5;
  return (
    <>
      <SlideLabel textLabel={<LabelIndex labelIndex={indexFive} />} />
    </>
  )
}

function LabelSix(){
  const {language,setLanguage}=useLanguage();
  const indexSix = language === es ? es.hero.labelHero_6 : en.hero.labelHero_6;
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
      label: language === es ? es.hero.labelHero_1 : en.hero.labelHero_1,
      img: fotoHero1,
    },
    {
      id: 2,
      label: language === es ? es.hero.labelHero_2 : en.hero.labelHero_2,
      img: fotoHero2,
    },
    {
      id: 3,
      label: language === es ? es.hero.labelHero_3 : en.hero.labelHero_3,
      img: fotoHero3,
    },
    {
      id: 4,
      label: language === es ? es.hero.labelHero_4 : en.hero.labelHero_4,
      img: fotoHero4,
    },
    {
      id: 5,
      label: language === es ? es.hero.labelHero_5 : en.hero.labelHero_5,
      img: fotoHero5,
    },
    {
      id: 6,
      label: language === es ? es.hero.labelHero_6 : en.hero.labelHero_6,
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
            {language === es ? es.hero.heroTitle : en.hero.heroTitle}
          </h1>
          <h3 className="titleShadow items-center justify-center z-40 text-lg lg:text-2xl font-bold text-[white] ">
            {/*SUBTITULO HERO*/}
            {language === es ? es.hero.heroSubTitle : en.hero.heroSubTitle}
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

