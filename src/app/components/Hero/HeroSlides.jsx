"use client";

import HeroSlider, { Slide, MenuNav } from "hero-slider";

import "../NavBar/NavBar.css";
const bogliasco =
  // "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/Cancun.jpg?alt=media&token=20d1767c-77ce-43a9-bcd7-94befb6a75a9"
  "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPRUEBAS%2Fnlb-hero%20(2).jpg?alt=media&token=c6ef7280-4aa9-42af-97eb-55c91c4a9780";

const countyClare =
  // "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/pexels-mati-mango-11291049.jpg?alt=media&token=0ccbeb43-6f25-4d06-9ba3-52d3f749103b";
  "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPRUEBAS%2Fnlb-hero%20(1).png?alt=media&token=8d1197aa-1cc7-49f2-a19a-c54d3dbb414f";
const craterRock =
  // "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/Cancun.jpg?alt=media&token=20d1767c-77ce-43a9-bcd7-94befb6a75a9";
  "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPRUEBAS%2Fnlb-hero%20(3).jpg?alt=media&token=94c1eb6f-aaf6-4486-9ea4-822873c6db55";
const giauPass =
  // "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/pexels-tellez-erik-15100236.jpg?alt=media&token=4da4c5bd-a65d-42db-9228-7c2751c6f27a";
  "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPRUEBAS%2Fnlb-hero%20(4).jpg?alt=media&token=207766d6-d481-44c1-9404-4b0946a096ae";

const foto5 = "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPRUEBAS%2Fnlb-hero%20(5).jpg?alt=media&token=d25a7101-5847-4a0d-a2d2-7fef82e4f26b"
  export default function BasicSlider() {
  return (
    <div className="top-0">
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
          shouldRenderMask
          label="PRE VENTAS"
          background={{
            backgroundImageSrc: giauPass,
          }}
        />

        <Slide
          shouldRenderMask
          label="TERRENOS DE INVERSION"
          background={{
            backgroundImageSrc: bogliasco,
          }}
        />

        <Slide
          shouldRenderMask
          label="ENTREGA INMEDIATA"
          background={{
            backgroundImageSrc: countyClare,
          }}
        />

        <Slide
          shouldRenderMask
          label="LLAVE EN MANO"
          background={{
            backgroundImageSrc: craterRock,
          }}
        />
        <Slide
          shouldRenderMask
          label="CONDO HOTELERO"
          background={{
            backgroundImageSrc: foto5,
          }}
        />
        {/* <Slide
            shouldRenderMask
            label="Aqua - Playa del Carmen"
            background={{
              backgroundImageSrc: bogliasco,
            }}
          /> */}

        <MenuNav />
      </HeroSlider>
    </div>
  );
}
