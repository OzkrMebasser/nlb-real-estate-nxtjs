"use client";

import HeroSlider, { Slide, MenuNav } from "hero-slider";

import "../NavBar/NavBar.css";
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

export default function BasicSlider() {
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
          <h1 className="titleShadow items-center justify-center z-40 mb-4 text-xl lg:text-3xl font-bold text-[white]">
            TODO LO QUE NECESITAS PARA INVERTIR EN LA RIVIERA MAYA
          </h1>
          <h3 className="titleShadow items-center justify-center z-40 text-lg lg:text-2xl font-bold text-[white] ">
            INVIERTE EN TU FUTURO
          </h3>
        </span>
        {/* <Overlay className="z-50">
      
        <Wrapper>
          <Title>INVIERTE EN TU FUTURO</Title>
          <Subtitle>
            Tenemos los mejores proyectos de la Riviera Maya
          </Subtitle>
          
            <h6>Contactanos para darte una atención personalida</h6>
         
        </Wrapper>
   
      </Overlay>   */}

        <Slide
          // shouldRenderMask
          label="PRE VENTAS"
          background={{
            backgroundImageSrc: fotoHero1,
          }}
        />

        <Slide
          // shouldRenderMask
          label="TERRENOS DE INVERSION"
          background={{
            backgroundImageSrc: fotoHero2,
          }}
        />

        <Slide
          // shouldRenderMask
          label="ENTREGA INMEDIATA"
          background={{
            backgroundImageSrc: fotoHero3,
          }}
        />

        <Slide
          // shouldRenderMask
          label="LLAVE EN MANO"
          background={{
            backgroundImageSrc: fotoHero4,
          }}
        />
        <Slide
          // shouldRenderMask
          label="CONDO HOTELERO"
          background={{
            backgroundImageSrc: fotoHero5,
          }}
        />
        <Slide
          // shouldRenderMask
          label="UNIDADES EN PROMOCIÓN"
          background={{
            backgroundImageSrc: fotoHero6,
          }}
        />

        <MenuNav />
      </HeroSlider>
    </div>
  );
}
