import es from "../context/languages/es";
import en from "../context/languages/en";

//Esto es para enviar la info de "tipo"
// const es = {
//   departamento: "Departamento",
//   casa: "Casa",
//   terreno: "Terreno",
//   sala: "Sala"

// };

// const en = {
//   departamento: "Apartment",
//   casa: "House",
//   terreno: "Lot",
//   sala: "Living Room"

// };


export const homeProperties = [
  // ATHIMAR
  {
    id: 1,
    desarrollo: "ATHIMAR",
    tipo: "departamento",
    ubicacion: "Cozumel",
    route: "properties/Cozumel/Athimar-Cozumel",
    route2: "Cozumel/Athimar-Cozumel",
    precio: 169999,
    habitaciones: "unoAtresRooms",
    banios: "unoAtresBanios",
    metrosCuadrados: "m2Athimar",
    ymuchomas: "ymuchomas",
    imagenCard:
      "https://firebasestorage.googleapis.com/v0/b/nlb-res-home-cards-b2.appspot.com/o/home-cards%2F1_ATHIMAR_home.jpg?alt=media&token=7c02ce23-18c2-4a84-840f-fcc451731a61",
  },
  // TRES PATIOS
  {
    id: 2,
    desarrollo: "TRES PATIOS",
    tipo: "villa",
    ubicacion: "Playa del Carmen",
    route: "properties/Playa-del-Carmen/Tres-Patios",
    route2: "Playa-del-Carmen/Tres-Patios",
    precio: 140000,
    habitaciones: "tres_habs",
    banios: "dos_banios",
    metrosCuadrados: "m2TresPatios",
    ymuchomas: "ymuchomas",
    imagenCard:
      "https://firebasestorage.googleapis.com/v0/b/nlb-res-home-cards-b2.appspot.com/o/home-cards%2F2_TRES_PATIOS_home.jpg?alt=media&token=13c9827d-8978-48f5-914e-e40e73f68f0b",
  },
  // VIDARAA
  {
    id: 3,
    desarrollo: "VIDARAA",
    tipo: "condo",
    ubicacion: "Cancún",
    route: "properties/Cancun/Vidaraa",
    route2: "Cancun/Vidaraa",
    precio: 340859,
    habitaciones: "dosTres",
    banios: "dosTres",
    metrosCuadrados: "m2vidaraa",
    ymuchomas: "ymuchomas",
    imagenCard:
      "https://firebasestorage.googleapis.com/v0/b/nlb-res-home-cards-b2.appspot.com/o/home-cards%2F3_VIDARAA_CANCUN_home.jpg?alt=media&token=2033d5d6-550f-433a-b16d-83756e95bbb5",
    embededMapSrc:
      "https://maps.google.com/maps?width=945&amp;height=512&amp;hl=en&amp;q=Tres Patios&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed",
  },
  //PEREGRINA
  {
    
    id: 4,
    desarrollo: "PEREGRINA",
    tipo: "departamento",
    ubicacion: "Tulum",
    route: "properties/Tulum/Peregrina",
    route2: "Tulum/Peregrina",
    precio: 2500000,
    habitaciones: 3,
    banios: 2,
    metrosCuadrados: 90,
    // description:
    //   "Contamos con 6 Departamentos en villas por cada módulo de 90 m2 o 110 m2.",
    imagenCard:
      "https://firebasestorage.googleapis.com/v0/b/nlb-res-home-cards-b2.appspot.com/o/home-cards%2F4_PEREGRINA_home.png?alt=media&token=f38e5ecd-5551-4279-9be6-489041a422ec",
    embededMapSrc:
      "https://maps.google.com/maps?width=945&amp;height=512&amp;hl=en&amp;q=Tres Patios&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed",
  },
  // NÁLU LUXURY BEACHFRONT
  {
    id: 5,
    desarrollo: "NÁLU LUXURY BEACHFRONT",
    tipo: "departamento",
    ubicacion: "Puerto Morelos",
    route: "properties/Puerto-Morelos/Nalu-Luxury-beachfront-residences",
    route2: "Puerto-Morelos/Nalu-Luxury-beachfront-residences",
    precio: 699000,
    habitaciones: "dosTres",
    banios: "tres_banios",
    metrosCuadrados: "m2Nalu",
    imagenCard:
      "https://firebasestorage.googleapis.com/v0/b/nlb-res-home-cards-b2.appspot.com/o/home-cards%2F5_NALU_home.jpg?alt=media&token=a7583f0f-61f6-4722-866d-f3b444d81f8e",
    embededMapSrc:
      "https://maps.google.com/maps?width=945&amp;height=512&amp;hl=en&amp;q=Tres Patios&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed",
  },
  // TERRENO DE INVERSION
  {
    id: 6,
    desarrollo: "TERRENO DE INVERSION",
    tipo: "terreno",
    ubicacion: "Puerto Morelos",
    route: "properties/Playa-del-Carmen/Tres-Patios",
    route2: "Playa-del-Carmen/Tres-Patios",
    precio: 2500000,
    habitaciones: 3,
    banios: 2,
    sala: "Sala",
    cocina: "Cocina",
    comedor: "Comedor",
    closet: "Closets",
    terraza: "Terraza",
    metrosCuadrados: 90,
    description:
      "Contamos con 6 Departamentos en villas por cada módulo de 90 m2 o 110 m2.",
    imagenCard:
      "https://firebasestorage.googleapis.com/v0/b/nlb-res-home-cards-b2.appspot.com/o/home-cards%2F6_TERRENO_hom.jpg?alt=media&token=087fb54e-bf69-4ffe-9ebe-d9614180fe4f",
    embededMapSrc:
      "https://maps.google.com/maps?width=945&amp;height=512&amp;hl=en&amp;q=Tres Patios&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed",
  },
];

export const allProperties = [
  // "TRES PATIOS - Playa del Carmen"
  {
    id: 1,
    desarrollo: "Tres Patios",
    tipo: "villa",
    ubicacion: "Playa del Carmen",
    route: "properties/Playa-del-Carmen/Tres-Patios",
    route2: "Playa-del-Carmen/Tres-Patios",
    routeUnit_1: "Tres-Patios/Villa-90m2",
    routeUnit_2: "Tres-Patios/Villa-110m2",
    precio: 2500000,
    habitaciones: "tres_habs",
    banios: "dos_banios",
    metrosCuadrados: "m2TresPatios",
    ymuchomas: "ymuchomas",
    description:
      "Contamos con 6 Departamentos en villas por cada módulo de 90 m2 o 110 m2.",
    imagenCard:
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRES_PATIOS_card.jpg?alt=media&token=3580db23-d142-4df2-9fc6-ad3360802261",
    embededMapSrc:
      "https://maps.google.com/maps?width=945&amp;height=512&amp;hl=en&amp;q=Tres Patios&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed",

    imagesCube: [
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(1).jpg?alt=media&token=287c7669-d129-47d1-96e0-1f714dfa5047",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(2).jpg?alt=media&token=4b211425-4e1a-4157-a49e-a904589bfbfa",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(3).jpg?alt=media&token=b75ef34d-332f-4aa4-bf01-c69e0c8ac28b",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(4).jpg?alt=media&token=12c0d8ca-73c0-49b8-b922-1e8dc544f8f7",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(5).jpg?alt=media&token=833f91d7-55af-4dea-bd0a-1a288b7900e1",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(6).jpg?alt=media&token=2fd03751-007d-47df-91fa-8dcbb727bc36",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(7).jpg?alt=media&token=f63ccf08-07df-4f6e-a9e1-a4af8a15ba67",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(8).jpg?alt=media&token=93765bb5-08d5-4a7c-84c8-41186f899c64",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(9).jpg?alt=media&token=5a77d03a-fe24-4e78-b9db-bf92aa4b1182",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(10).jpg?alt=media&token=7efd1f6e-2d8b-4f9c-bb6d-a6e5d1eef2f3",
    ],
    unit_1: {
      // unit_1_Title: "Departamento en villa de 90 m²",
      // unit_1_description:
      //   "Contamos con 6 Departamentos en villas por cada módulo de 90 m² y/o 110 m²",
      // unit_1_precio: 4780000,

      unit_1_imagenes_A: [
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTresPatiosPlano_90m2.png?alt=media&token=c0b1f6ba-28cb-4f84-8b9b-6509a6aa0a0a&_gl=1*emy6w7*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NjczODcwMS41Ni4xLjE2OTY3MzkwMDkuNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(1).jpg?alt=media&token=287c7669-d129-47d1-96e0-1f714dfa5047",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(2).jpg?alt=media&token=4b211425-4e1a-4157-a49e-a904589bfbfa",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(3).jpg?alt=media&token=b75ef34d-332f-4aa4-bf01-c69e0c8ac28b",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(4).jpg?alt=media&token=12c0d8ca-73c0-49b8-b922-1e8dc544f8f7",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(5).jpg?alt=media&token=833f91d7-55af-4dea-bd0a-1a288b7900e1",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(6).jpg?alt=media&token=2fd03751-007d-47df-91fa-8dcbb727bc36",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(7).jpg?alt=media&token=f63ccf08-07df-4f6e-a9e1-a4af8a15ba67&_gl=1*lp0tut*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NjczODcwMS41Ni4xLjE2OTY3MzkxNTAuMjguMC4w",
      ],
      unit_1_imagenes_B: [
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTresPatiosPlano_90m2.png?alt=media&token=c0b1f6ba-28cb-4f84-8b9b-6509a6aa0a0a&_gl=1*emy6w7*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NjczODcwMS41Ni4xLjE2OTY3MzkwMDkuNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(1).jpg?alt=media&token=287c7669-d129-47d1-96e0-1f714dfa5047",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(2).jpg?alt=media&token=4b211425-4e1a-4157-a49e-a904589bfbfa",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(3).jpg?alt=media&token=b75ef34d-332f-4aa4-bf01-c69e0c8ac28b",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(4).jpg?alt=media&token=12c0d8ca-73c0-49b8-b922-1e8dc544f8f7",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(5).jpg?alt=media&token=833f91d7-55af-4dea-bd0a-1a288b7900e1",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(6).jpg?alt=media&token=2fd03751-007d-47df-91fa-8dcbb727bc36",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(7).jpg?alt=media&token=f63ccf08-07df-4f6e-a9e1-a4af8a15ba67&_gl=1*lp0tut*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NjczODcwMS41Ni4xLjE2OTY3MzkxNTAuMjguMC4w",
      ],
    },

    unit_2: {
      // unit_1_Title: "Departamento en villa de 90 m²",
      // unit_1_description:
      //   "Contamos con 6 Departamentos en villas por cada módulo de 90 m² y/o 110 m²",
      unit_2_precio: 4780000,

      unit_2_imagenes_A: [
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTresPatiosPlano_110m2.png?alt=media&token=a4472a94-a0bd-4b96-8961-ffec98d846c5&_gl=1*wueli0*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NjczODcwMS41Ni4xLjE2OTY3NDAyODQuNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(1).jpg?alt=media&token=287c7669-d129-47d1-96e0-1f714dfa5047",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(2).jpg?alt=media&token=4b211425-4e1a-4157-a49e-a904589bfbfa",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(3).jpg?alt=media&token=b75ef34d-332f-4aa4-bf01-c69e0c8ac28b",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(4).jpg?alt=media&token=12c0d8ca-73c0-49b8-b922-1e8dc544f8f7",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(5).jpg?alt=media&token=833f91d7-55af-4dea-bd0a-1a288b7900e1",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(6).jpg?alt=media&token=2fd03751-007d-47df-91fa-8dcbb727bc36",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(7).jpg?alt=media&token=f63ccf08-07df-4f6e-a9e1-a4af8a15ba67&_gl=1*lp0tut*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NjczODcwMS41Ni4xLjE2OTY3MzkxNTAuMjguMC4w",
      ],
      unit_2_imagenes_B: [
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTresPatiosPlano_110m2.png?alt=media&token=a4472a94-a0bd-4b96-8961-ffec98d846c5&_gl=1*wueli0*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NjczODcwMS41Ni4xLjE2OTY3NDAyODQuNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(1).jpg?alt=media&token=287c7669-d129-47d1-96e0-1f714dfa5047",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(2).jpg?alt=media&token=4b211425-4e1a-4157-a49e-a904589bfbfa",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(3).jpg?alt=media&token=b75ef34d-332f-4aa4-bf01-c69e0c8ac28b",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(4).jpg?alt=media&token=12c0d8ca-73c0-49b8-b922-1e8dc544f8f7",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(5).jpg?alt=media&token=833f91d7-55af-4dea-bd0a-1a288b7900e1",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(6).jpg?alt=media&token=2fd03751-007d-47df-91fa-8dcbb727bc36",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(7).jpg?alt=media&token=f63ccf08-07df-4f6e-a9e1-a4af8a15ba67&_gl=1*lp0tut*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NjczODcwMS41Ni4xLjE2OTY3MzkxNTAuMjguMC4w",
      ],
    },

    unit_3: {
      // unit_1_Title: "Departamento en villa de 90 m²",
      // unit_1_description:
      //   "Contamos con 6 Departamentos en villas por cada módulo de 90 m² y/o 110 m²",
      unit_3_precio: 4780000,

      unit_3_imagenes_A: [
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTresPatiosPlano_penthouse90m2.png?alt=media&token=5157b3a3-a753-4f94-bda1-34dfd24bf181&_gl=1*7el3lj*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NjczODcwMS41Ni4xLjE2OTY3NDIzNTkuNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(1).jpg?alt=media&token=287c7669-d129-47d1-96e0-1f714dfa5047",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(2).jpg?alt=media&token=4b211425-4e1a-4157-a49e-a904589bfbfa",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(3).jpg?alt=media&token=b75ef34d-332f-4aa4-bf01-c69e0c8ac28b",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(4).jpg?alt=media&token=12c0d8ca-73c0-49b8-b922-1e8dc544f8f7",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(5).jpg?alt=media&token=833f91d7-55af-4dea-bd0a-1a288b7900e1",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(6).jpg?alt=media&token=2fd03751-007d-47df-91fa-8dcbb727bc36",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(7).jpg?alt=media&token=f63ccf08-07df-4f6e-a9e1-a4af8a15ba67&_gl=1*lp0tut*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NjczODcwMS41Ni4xLjE2OTY3MzkxNTAuMjguMC4w",
      ],
      unit_3_imagenes_B: [
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTresPatiosPlano_penthouse90m2.png?alt=media&token=5157b3a3-a753-4f94-bda1-34dfd24bf181&_gl=1*7el3lj*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NjczODcwMS41Ni4xLjE2OTY3NDIzNTkuNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(1).jpg?alt=media&token=287c7669-d129-47d1-96e0-1f714dfa5047",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(2).jpg?alt=media&token=4b211425-4e1a-4157-a49e-a904589bfbfa",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(3).jpg?alt=media&token=b75ef34d-332f-4aa4-bf01-c69e0c8ac28b",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(4).jpg?alt=media&token=12c0d8ca-73c0-49b8-b922-1e8dc544f8f7",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(5).jpg?alt=media&token=833f91d7-55af-4dea-bd0a-1a288b7900e1",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(6).jpg?alt=media&token=2fd03751-007d-47df-91fa-8dcbb727bc36",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(7).jpg?alt=media&token=f63ccf08-07df-4f6e-a9e1-a4af8a15ba67&_gl=1*lp0tut*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NjczODcwMS41Ni4xLjE2OTY3MzkxNTAuMjguMC4w",
      ],
    },
    unit_4: {
      // unit_1_Title: "Departamento en villa de 90 m²",
      // unit_1_description:
      //   "Contamos con 6 Departamentos en villas por cada módulo de 90 m² y/o 110 m²",
      unit_4_precio: 4780000,

      unit_4_imagenes_A: [
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTresPatiosPlano_penthouse110m2.png?alt=media&token=66626171-eb48-4104-bb4e-94a480bff4c7&_gl=1*8qyikw*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NjczODcwMS41Ni4xLjE2OTY3NDI3MjAuNDIuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(1).jpg?alt=media&token=287c7669-d129-47d1-96e0-1f714dfa5047",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(2).jpg?alt=media&token=4b211425-4e1a-4157-a49e-a904589bfbfa",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(3).jpg?alt=media&token=b75ef34d-332f-4aa4-bf01-c69e0c8ac28b",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(4).jpg?alt=media&token=12c0d8ca-73c0-49b8-b922-1e8dc544f8f7",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(5).jpg?alt=media&token=833f91d7-55af-4dea-bd0a-1a288b7900e1",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(6).jpg?alt=media&token=2fd03751-007d-47df-91fa-8dcbb727bc36",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(7).jpg?alt=media&token=f63ccf08-07df-4f6e-a9e1-a4af8a15ba67&_gl=1*lp0tut*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NjczODcwMS41Ni4xLjE2OTY3MzkxNTAuMjguMC4w",
      ],
      unit_4_imagenes_B: [
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTresPatiosPlano_penthouse110m2.png?alt=media&token=66626171-eb48-4104-bb4e-94a480bff4c7&_gl=1*8qyikw*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NjczODcwMS41Ni4xLjE2OTY3NDI3MjAuNDIuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(1).jpg?alt=media&token=287c7669-d129-47d1-96e0-1f714dfa5047",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(2).jpg?alt=media&token=4b211425-4e1a-4157-a49e-a904589bfbfa",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(3).jpg?alt=media&token=b75ef34d-332f-4aa4-bf01-c69e0c8ac28b",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(4).jpg?alt=media&token=12c0d8ca-73c0-49b8-b922-1e8dc544f8f7",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(5).jpg?alt=media&token=833f91d7-55af-4dea-bd0a-1a288b7900e1",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(6).jpg?alt=media&token=2fd03751-007d-47df-91fa-8dcbb727bc36",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(7).jpg?alt=media&token=f63ccf08-07df-4f6e-a9e1-a4af8a15ba67&_gl=1*lp0tut*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NjczODcwMS41Ni4xLjE2OTY3MzkxNTAuMjguMC4w",
      ],
    },
  },
  //"ATHIMAR - Cozumel"
  {
    id: 2,
    desarrollo: "ATHIMAR",
    nickName: "Cozumel Luxury Living",
    subTitle:
      "UN PROYECTO DONDE EL LUJO Y EL CONFORT PREDOMINAN EN CADA RINCÓN",
    tipo: "departamento",
    ubicacion: "Cozumel",
    route: "properties/Cozumel/Athimar-Cozumel",
    route2: "Cozumel/Athimar-Cozumel",
    routeUnit_1: "Athimar-Cozumel/One-Bedroom",
    routeUnit_2: "Athimar-Cozumel/App2",
    precio: 169999,
    habitaciones: "unoAtresRooms",
    banios: "unoAtresBanios",
    metrosCuadrados: "m2Athimar",
    ymuchomas: "ymuchomas",
    description:
      "Contamos con 6 Departamentos en villas por cada módulo de 90 m2 o 110 m2.",
    imagenCard:
      "https://maxproperties.com.mx/wp-content/uploads/2021/09/paam.webp",
    embededMapSrc:
      "https://maps.google.com/maps?width=945&amp;height=512&amp;hl=en&amp;q=Athimar Cozumel&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embedhttps://maps.google.com/maps?width=945&amp;height=512&amp;hl=en&amp;q=Athimar Cozumel&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed",

    imagesCube: [
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR%20LOBBY.jpg?alt=media&token=202ed856-919e-4d0d-ad8f-1105379230a9",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_EXTERIORES_1.jpg?alt=media&token=496eeff9-6b01-4202-9c20-7a981b7a248e",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_EXTERIORES_2.jpg?alt=media&token=70021499-1593-4d05-8541-56c51ada9178",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_EXTERIORES_3.jpg?alt=media&token=cd3ca29f-66f3-47b4-8e87-7a3758f662e3",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_EXTERIORES_4.jpg?alt=media&token=db44bb48-20a9-44db-a3ad-7c7d298e714c",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_EXTERIORES_5.jpg?alt=media&token=23f7e9ce-c2aa-46d6-b3f4-aaf1448a2f58",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_EXTERIORES_8.jpg?alt=media&token=9799be6d-40ce-4a81-956c-ee0a28e4f13f",

      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_POOL%20(1).jpg?alt=media&token=3bfcf350-2932-4067-9450-e45c8c751db7",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_POOL%20TERRACE.jpg?alt=media&token=1689a08a-5057-409f-b19e-8d0cfc83078d",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_RECAMARA%20DEP%20TIPO.jpg?alt=media&token=d39d5acf-793f-4b29-9ad0-0325831b4bd5",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_RECAMARA%20DEP%20TIPO2.jpg?alt=media&token=5bec04b9-311c-4de5-b079-8eea9a4b14a2",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_SALA%20COMEDOR%20COCINA%20DEPT08.jpg?alt=media&token=1f84bca6-8e13-41b2-aa81-6f8fe894d9a7",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_SALA%20COMEDOR%20COCINA%20PH.jpg?alt=media&token=2465d64c-861f-4a10-9749-3277ec5da133",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_BA%C3%91O.jpg?alt=media&token=76843091-6759-42c1-b11f-af22666b0a47",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_COCINA.jpg?alt=media&token=68e80fbd-2392-40ab-86c4-78a2edabcd5c",
    ],
    unit_1: {
      //ONE BEDROOM
      // unit_1_Title: "1 Recámara 69.94m²",
      unit_1_Title: "coz.athimar.unit_1.unit_1_Title",
      unit_1_description: "coz.athimar.unit_1.unit_1_Title",
      unit_1_precio: 4780000,
      // unit_1_amenidades:
      //   {
      //     amenidad_1: "1 Recámara",
      //     amenidad_2: "1 Baño",
      //     amenidad_3: "Sala",
      //     amenidad_4: "Cocina",
      //     amenidad_5: "Comedor",
      //     amenidad_6: "Terraza",
      //     amenidad_7: "Zona de Servicio",
      //     // amenidad_8: "",
      //   },

      unit_1_imagenes_A: [
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR-one-bedroom.jpg?alt=media&token=e7846352-4d32-4619-8292-694b0ee1e5a9",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_POOL%20(1).jpg?alt=media&token=3bfcf350-2932-4067-9450-e45c8c751db7",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_POOL%20TERRACE.jpg?alt=media&token=1689a08a-5057-409f-b19e-8d0cfc83078d",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_RECAMARA%20DEP%20TIPO.jpg?alt=media&token=d39d5acf-793f-4b29-9ad0-0325831b4bd5",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_RECAMARA%20DEP%20TIPO2.jpg?alt=media&token=5bec04b9-311c-4de5-b079-8eea9a4b14a2",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_SALA%20COMEDOR%20COCINA%20DEPT08.jpg?alt=media&token=1f84bca6-8e13-41b2-aa81-6f8fe894d9a7",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_SALA%20COMEDOR%20COCINA%20PH.jpg?alt=media&token=2465d64c-861f-4a10-9749-3277ec5da133",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_BA%C3%91O.jpg?alt=media&token=76843091-6759-42c1-b11f-af22666b0a47",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_COCINA.jpg?alt=media&token=68e80fbd-2392-40ab-86c4-78a2edabcd5c",
      ],
      unit_1_imagenes_B: [
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR-one-bedroom.jpg?alt=media&token=e7846352-4d32-4619-8292-694b0ee1e5a9",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_POOL%20(1).jpg?alt=media&token=3bfcf350-2932-4067-9450-e45c8c751db7",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_POOL%20TERRACE.jpg?alt=media&token=1689a08a-5057-409f-b19e-8d0cfc83078d",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_RECAMARA%20DEP%20TIPO.jpg?alt=media&token=d39d5acf-793f-4b29-9ad0-0325831b4bd5",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_RECAMARA%20DEP%20TIPO2.jpg?alt=media&token=5bec04b9-311c-4de5-b079-8eea9a4b14a2",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_SALA%20COMEDOR%20COCINA%20DEPT08.jpg?alt=media&token=1f84bca6-8e13-41b2-aa81-6f8fe894d9a7",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_SALA%20COMEDOR%20COCINA%20PH.jpg?alt=media&token=2465d64c-861f-4a10-9749-3277ec5da133",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_BA%C3%91O.jpg?alt=media&token=76843091-6759-42c1-b11f-af22666b0a47",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_COCINA.jpg?alt=media&token=68e80fbd-2392-40ab-86c4-78a2edabcd5c",
      ],
    },

    unit_2: {
      //ONE BEDROOM
      // unit_1_Title: "1 Recámara 69.94m²",
      unit_2_Title: "coz.athimar.unit_2.unit_2_Title",
      unit_2_description: "coz.athimar.unit_2.unit_2_Title",
      unit_2_precio: 4780000,
      // unit_1_amenidades:
      //   {
      //     amenidad_1: "1 Recámara",
      //     amenidad_2: "1 Baño",
      //     amenidad_3: "Sala",
      //     amenidad_4: "Cocina",
      //     amenidad_5: "Comedor",
      //     amenidad_6: "Terraza",
      //     amenidad_7: "Zona de Servicio",
      //     // amenidad_8: "",
      //   },

      unit_2_imagenes_A: [
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR-two-bedroom_2.jpg?alt=media&token=70aa21cd-9ffd-464e-a1bc-9389692607a1",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR-two-bedroom.jpg?alt=media&token=626f9581-67e2-4f62-8908-4c812e412b1a",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR-two-bedroom_3.jpg?alt=media&token=4fa09eca-6cd0-499f-b253-4e4f20172a2b",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR-two-bedroom_4.jpg?alt=media&token=672f9ebc-1a2b-4a8e-9d0d-43f8cbd7ba84&_gl=1*tem3bw*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NTg3Njg5OC41MS4xLjE2OTU4Nzg2MzAuNDEuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_POOL%20(1).jpg?alt=media&token=3bfcf350-2932-4067-9450-e45c8c751db7",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_POOL%20TERRACE.jpg?alt=media&token=1689a08a-5057-409f-b19e-8d0cfc83078d",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_RECAMARA%20DEP%20TIPO.jpg?alt=media&token=d39d5acf-793f-4b29-9ad0-0325831b4bd5",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_RECAMARA%20DEP%20TIPO2.jpg?alt=media&token=5bec04b9-311c-4de5-b079-8eea9a4b14a2",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_SALA%20COMEDOR%20COCINA%20DEPT08.jpg?alt=media&token=1f84bca6-8e13-41b2-aa81-6f8fe894d9a7",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_SALA%20COMEDOR%20COCINA%20PH.jpg?alt=media&token=2465d64c-861f-4a10-9749-3277ec5da133",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_BA%C3%91O.jpg?alt=media&token=76843091-6759-42c1-b11f-af22666b0a47",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_COCINA.jpg?alt=media&token=68e80fbd-2392-40ab-86c4-78a2edabcd5c",
      ],
      unit_2_imagenes_B: [
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR-two-bedroom_2.jpg?alt=media&token=70aa21cd-9ffd-464e-a1bc-9389692607a1",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR-two-bedroom.jpg?alt=media&token=626f9581-67e2-4f62-8908-4c812e412b1a",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR-two-bedroom_3.jpg?alt=media&token=4fa09eca-6cd0-499f-b253-4e4f20172a2b",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR-two-bedroom_4.jpg?alt=media&token=672f9ebc-1a2b-4a8e-9d0d-43f8cbd7ba84&_gl=1*tem3bw*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NTg3Njg5OC41MS4xLjE2OTU4Nzg2MzAuNDEuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_POOL%20(1).jpg?alt=media&token=3bfcf350-2932-4067-9450-e45c8c751db7",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_POOL%20TERRACE.jpg?alt=media&token=1689a08a-5057-409f-b19e-8d0cfc83078d",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_RECAMARA%20DEP%20TIPO.jpg?alt=media&token=d39d5acf-793f-4b29-9ad0-0325831b4bd5",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_RECAMARA%20DEP%20TIPO2.jpg?alt=media&token=5bec04b9-311c-4de5-b079-8eea9a4b14a2",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_SALA%20COMEDOR%20COCINA%20DEPT08.jpg?alt=media&token=1f84bca6-8e13-41b2-aa81-6f8fe894d9a7",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_SALA%20COMEDOR%20COCINA%20PH.jpg?alt=media&token=2465d64c-861f-4a10-9749-3277ec5da133",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_BA%C3%91O.jpg?alt=media&token=76843091-6759-42c1-b11f-af22666b0a47",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_COCINA.jpg?alt=media&token=68e80fbd-2392-40ab-86c4-78a2edabcd5c",
      ],
    },
    unit_3: {
      //Three BEDROOM
      // unit_3_Title: "1 Recámara 69.94m²",
      unit_3_Title: "coz.athimar.unit_3.unit_3_Title",
      unit_3_description: "coz.athimar.unit_3.unit_3_Title",
      unit_3_precio: 4780000,
      unit_3_imagenes_A: [
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR-three-bedroom.jpg?alt=media&token=c01bf2f4-db06-48eb-a7ad-7cdd3255680c&_gl=1*1xl8ak7*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NTg4MTg2OC41Mi4xLjE2OTU4ODE4ODIuNDYuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_POOL%20(1).jpg?alt=media&token=3bfcf350-2932-4067-9450-e45c8c751db7",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_POOL%20TERRACE.jpg?alt=media&token=1689a08a-5057-409f-b19e-8d0cfc83078d",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_RECAMARA%20DEP%20TIPO.jpg?alt=media&token=d39d5acf-793f-4b29-9ad0-0325831b4bd5",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_RECAMARA%20DEP%20TIPO2.jpg?alt=media&token=5bec04b9-311c-4de5-b079-8eea9a4b14a2",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_SALA%20COMEDOR%20COCINA%20DEPT08.jpg?alt=media&token=1f84bca6-8e13-41b2-aa81-6f8fe894d9a7",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_SALA%20COMEDOR%20COCINA%20PH.jpg?alt=media&token=2465d64c-861f-4a10-9749-3277ec5da133",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_BA%C3%91O.jpg?alt=media&token=76843091-6759-42c1-b11f-af22666b0a47",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_COCINA.jpg?alt=media&token=68e80fbd-2392-40ab-86c4-78a2edabcd5c",
      ],
      unit_3_imagenes_B: [
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR-three-bedroom.jpg?alt=media&token=c01bf2f4-db06-48eb-a7ad-7cdd3255680c&_gl=1*1xl8ak7*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NTg4MTg2OC41Mi4xLjE2OTU4ODE4ODIuNDYuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_POOL%20(1).jpg?alt=media&token=3bfcf350-2932-4067-9450-e45c8c751db7",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_POOL%20TERRACE.jpg?alt=media&token=1689a08a-5057-409f-b19e-8d0cfc83078d",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_RECAMARA%20DEP%20TIPO.jpg?alt=media&token=d39d5acf-793f-4b29-9ad0-0325831b4bd5",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_RECAMARA%20DEP%20TIPO2.jpg?alt=media&token=5bec04b9-311c-4de5-b079-8eea9a4b14a2",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_SALA%20COMEDOR%20COCINA%20DEPT08.jpg?alt=media&token=1f84bca6-8e13-41b2-aa81-6f8fe894d9a7",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_SALA%20COMEDOR%20COCINA%20PH.jpg?alt=media&token=2465d64c-861f-4a10-9749-3277ec5da133",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_BA%C3%91O.jpg?alt=media&token=76843091-6759-42c1-b11f-af22666b0a47",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_COCINA.jpg?alt=media&token=68e80fbd-2392-40ab-86c4-78a2edabcd5c",
      ],
    },
    unit_4: {
      //Penthouse
      unit_4_Title: "coz.athimar.unit_4.unit_4_Title",
      unit_4_description: "coz.athimar.unit_4.unit_4_Title",
      unit_4_precio: 4780000,
      unit_4_imagenes_A: [
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR-penthouse.jpg?alt=media&token=bc239a94-c3bc-45a7-a406-fe018a51db7a&_gl=1*1qohdnr*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NjA0NTE0NS41My4xLjE2OTYwNDU0MTcuMTcuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_POOL%20(1).jpg?alt=media&token=3bfcf350-2932-4067-9450-e45c8c751db7",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_POOL%20TERRACE.jpg?alt=media&token=1689a08a-5057-409f-b19e-8d0cfc83078d",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_RECAMARA%20DEP%20TIPO.jpg?alt=media&token=d39d5acf-793f-4b29-9ad0-0325831b4bd5",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_RECAMARA%20DEP%20TIPO2.jpg?alt=media&token=5bec04b9-311c-4de5-b079-8eea9a4b14a2",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_SALA%20COMEDOR%20COCINA%20DEPT08.jpg?alt=media&token=1f84bca6-8e13-41b2-aa81-6f8fe894d9a7",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_SALA%20COMEDOR%20COCINA%20PH.jpg?alt=media&token=2465d64c-861f-4a10-9749-3277ec5da133",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_BA%C3%91O.jpg?alt=media&token=76843091-6759-42c1-b11f-af22666b0a47",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_COCINA.jpg?alt=media&token=68e80fbd-2392-40ab-86c4-78a2edabcd5c",
      ],
      unit_4_imagenes_B: [
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR-penthouse.jpg?alt=media&token=bc239a94-c3bc-45a7-a406-fe018a51db7a&_gl=1*1qohdnr*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NjA0NTE0NS41My4xLjE2OTYwNDU0MTcuMTcuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_POOL%20(1).jpg?alt=media&token=3bfcf350-2932-4067-9450-e45c8c751db7",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_POOL%20TERRACE.jpg?alt=media&token=1689a08a-5057-409f-b19e-8d0cfc83078d",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_RECAMARA%20DEP%20TIPO.jpg?alt=media&token=d39d5acf-793f-4b29-9ad0-0325831b4bd5",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_RECAMARA%20DEP%20TIPO2.jpg?alt=media&token=5bec04b9-311c-4de5-b079-8eea9a4b14a2",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_SALA%20COMEDOR%20COCINA%20DEPT08.jpg?alt=media&token=1f84bca6-8e13-41b2-aa81-6f8fe894d9a7",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_SALA%20COMEDOR%20COCINA%20PH.jpg?alt=media&token=2465d64c-861f-4a10-9749-3277ec5da133",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_BA%C3%91O.jpg?alt=media&token=76843091-6759-42c1-b11f-af22666b0a47",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_COCINA.jpg?alt=media&token=68e80fbd-2392-40ab-86c4-78a2edabcd5c",
      ],
    },
  },
  //"VIDARAA - Cancún"
  {
    id: 3,
    desarrollo: "Vidaraa Tower",
    nickName: "",
    subTitle: "",
    tipo: "condo",
    ubicacion: "Cancún",
    route: "properties/Cancun/Vidaraa",
    route2: "Cancun/Vidaraa",
    routeUnit_1: "properties/Cancun/Vidaraa/Two_Bedroom",
    routeUnit_2: "properties/Cancun/Vidaraa/Three_Bedroom",
    precio: 340859,
    habitaciones: "dosTres",
    banios: "dosTres",
    metrosCuadrados: "m2vidaraa",
    ymuchomas: "ymuchomas",
    description:
      "Contamos con 6 Departamentos en villas por cada módulo de 90 m2 o 110 m2.",
    imagenCard:
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-homecard.jpg?alt=media&token=4e1b0df2-9a25-4fca-813d-e59cf2e3a186&_gl=1*17t7769*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDU3ODQuNjAuMC4w",
    embededMapSrc:
      "https://maps.google.com/maps?width=945&amp;height=512&amp;hl=en&amp;q=Athimar Cozumel&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embedhttps://maps.google.com/maps?width=945&amp;height=512&amp;hl=en&amp;q=Athimar Cozumel&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed",

    imagesCube: [
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-1.jpg?alt=media&token=c342c3f3-4edc-4bda-9766-7ff1b01108fd&_gl=1*19li6u1*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDYxMzguNjAuMC4w",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-1b.jpg?alt=media&token=fa1e808f-21fe-4a6e-bd34-3e539f6133ee&_gl=1*1wsnh7*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDYyODIuNjAuMC4w",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-1c.jpg?alt=media&token=38ae9297-263d-418b-8ccc-d3a7b149a5de&_gl=1*1mapequ*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDYyOTQuNDguMC4w",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-2.jpg?alt=media&token=1f5d4a96-ca76-4d23-9be5-912c2e3ffd96&_gl=1*1ud86b9*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDYzMTAuMzIuMC4w",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-3.jpg?alt=media&token=3316795b-f3c0-44d4-80d9-04493ec91b9d&_gl=1*1wre0y1*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDY0MDcuNjAuMC4w",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-4.jpg?alt=media&token=d8e271cc-fc0f-4761-a410-ab8e3b548ba5&_gl=1*ooqawu*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDY0MjYuNDEuMC4w",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-4b.jpg?alt=media&token=36aedd4f-3dc7-4cde-996e-dd0f19aea386&_gl=1*46ayyy*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDY0NDAuMjcuMC4w",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-5.jpg?alt=media&token=bced20fc-fdc2-4626-bcd7-26393723f999&_gl=1*lkjdxy*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDY0ODQuNTkuMC4w",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-6.jpg?alt=media&token=53179df4-6fd0-4ad4-9478-17999832935d&_gl=1*1cpmf1v*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDY1MjcuMTYuMC4w",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-7.jpg?alt=media&token=0d1010fa-0cf2-49c8-9338-acc22f8d850f&_gl=1*a7ja6o*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDY4MjEuMjIuMC4w",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-7b.jpg?alt=media&token=50abe1e0-176c-4591-b195-63afdb60d816&_gl=1*1o6yyzd*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDY4NDYuNjAuMC4w",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-8.jpg?alt=media&token=a59525b2-d6b0-4d96-99a1-ce82a4c59dfb&_gl=1*qew6a1*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDcwNDcuNjAuMC4w",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-8b.jpg?alt=media&token=e827af89-bc04-437d-907b-1c34ed887688&_gl=1*1dt0z16*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDcwNzQuMzMuMC4w",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-9.jpg?alt=media&token=b00e07d0-1691-4a66-9f94-3782289bd7f2&_gl=1*1wgmujr*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDcxMDEuNi4wLjA.",
    ],
    unit_1: {
      //TWO BEDROOMS vidaraa

      unit_1_precio: 4780000,

      unit_1_imagenes_A: [
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidara-2-rooms.JPG?alt=media&token=9d3945d8-89eb-4fd3-b352-9671fb48047b&_gl=1*5e5h7g*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDc2NzIuNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-3.jpg?alt=media&token=3316795b-f3c0-44d4-80d9-04493ec91b9d&_gl=1*1wre0y1*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDY0MDcuNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-4.jpg?alt=media&token=d8e271cc-fc0f-4761-a410-ab8e3b548ba5&_gl=1*ooqawu*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDY0MjYuNDEuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-4b.jpg?alt=media&token=36aedd4f-3dc7-4cde-996e-dd0f19aea386&_gl=1*46ayyy*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDY0NDAuMjcuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-5.jpg?alt=media&token=bced20fc-fdc2-4626-bcd7-26393723f999&_gl=1*lkjdxy*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDY0ODQuNTkuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-6.jpg?alt=media&token=53179df4-6fd0-4ad4-9478-17999832935d&_gl=1*1cpmf1v*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDY1MjcuMTYuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-7.jpg?alt=media&token=0d1010fa-0cf2-49c8-9338-acc22f8d850f&_gl=1*a7ja6o*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDY4MjEuMjIuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-7b.jpg?alt=media&token=50abe1e0-176c-4591-b195-63afdb60d816&_gl=1*1o6yyzd*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDY4NDYuNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-8.jpg?alt=media&token=a59525b2-d6b0-4d96-99a1-ce82a4c59dfb&_gl=1*qew6a1*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDcwNDcuNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-8b.jpg?alt=media&token=e827af89-bc04-437d-907b-1c34ed887688&_gl=1*1dt0z16*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDcwNzQuMzMuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-9.jpg?alt=media&token=b00e07d0-1691-4a66-9f94-3782289bd7f2&_gl=1*1wgmujr*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDcxMDEuNi4wLjA.",
      ],
      unit_1_imagenes_B: [
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidara-2-rooms.JPG?alt=media&token=9d3945d8-89eb-4fd3-b352-9671fb48047b&_gl=1*5e5h7g*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDc2NzIuNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-3.jpg?alt=media&token=3316795b-f3c0-44d4-80d9-04493ec91b9d&_gl=1*1wre0y1*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDY0MDcuNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-4.jpg?alt=media&token=d8e271cc-fc0f-4761-a410-ab8e3b548ba5&_gl=1*ooqawu*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDY0MjYuNDEuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-4b.jpg?alt=media&token=36aedd4f-3dc7-4cde-996e-dd0f19aea386&_gl=1*46ayyy*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDY0NDAuMjcuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-5.jpg?alt=media&token=bced20fc-fdc2-4626-bcd7-26393723f999&_gl=1*lkjdxy*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDY0ODQuNTkuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-6.jpg?alt=media&token=53179df4-6fd0-4ad4-9478-17999832935d&_gl=1*1cpmf1v*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDY1MjcuMTYuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-7.jpg?alt=media&token=0d1010fa-0cf2-49c8-9338-acc22f8d850f&_gl=1*a7ja6o*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDY4MjEuMjIuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-7b.jpg?alt=media&token=50abe1e0-176c-4591-b195-63afdb60d816&_gl=1*1o6yyzd*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDY4NDYuNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-8.jpg?alt=media&token=a59525b2-d6b0-4d96-99a1-ce82a4c59dfb&_gl=1*qew6a1*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDcwNDcuNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-8b.jpg?alt=media&token=e827af89-bc04-437d-907b-1c34ed887688&_gl=1*1dt0z16*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDcwNzQuMzMuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-9.jpg?alt=media&token=b00e07d0-1691-4a66-9f94-3782289bd7f2&_gl=1*1wgmujr*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDcxMDEuNi4wLjA.",
      ],
    },

    unit_2: {
      //ONE BEDROOM
      // unit_1_Title: "1 Recámara 69.94m²",
      unit_2_Title: "coz.athimar.unit_2.unit_2_Title",
      unit_2_description: "coz.athimar.unit_2.unit_2_Title",
      unit_2_precio: 4780000,
      // unit_1_amenidades:
      //   {
      //     amenidad_1: "1 Recámara",
      //     amenidad_2: "1 Baño",
      //     amenidad_3: "Sala",
      //     amenidad_4: "Cocina",
      //     amenidad_5: "Comedor",
      //     amenidad_6: "Terraza",
      //     amenidad_7: "Zona de Servicio",
      //     // amenidad_8: "",
      //   },

      unit_2_imagenes_A: [
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidara-3-rooms.JPG?alt=media&token=d73e5fe5-33ec-4198-80e7-12b7940c5040&_gl=1*wenryf*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDgxODEuNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-3.jpg?alt=media&token=3316795b-f3c0-44d4-80d9-04493ec91b9d&_gl=1*1wre0y1*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDY0MDcuNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-4.jpg?alt=media&token=d8e271cc-fc0f-4761-a410-ab8e3b548ba5&_gl=1*ooqawu*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDY0MjYuNDEuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-4b.jpg?alt=media&token=36aedd4f-3dc7-4cde-996e-dd0f19aea386&_gl=1*46ayyy*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDY0NDAuMjcuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-5.jpg?alt=media&token=bced20fc-fdc2-4626-bcd7-26393723f999&_gl=1*lkjdxy*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDY0ODQuNTkuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-6.jpg?alt=media&token=53179df4-6fd0-4ad4-9478-17999832935d&_gl=1*1cpmf1v*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDY1MjcuMTYuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-7.jpg?alt=media&token=0d1010fa-0cf2-49c8-9338-acc22f8d850f&_gl=1*a7ja6o*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDY4MjEuMjIuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-7b.jpg?alt=media&token=50abe1e0-176c-4591-b195-63afdb60d816&_gl=1*1o6yyzd*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDY4NDYuNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-8.jpg?alt=media&token=a59525b2-d6b0-4d96-99a1-ce82a4c59dfb&_gl=1*qew6a1*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDcwNDcuNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-8b.jpg?alt=media&token=e827af89-bc04-437d-907b-1c34ed887688&_gl=1*1dt0z16*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDcwNzQuMzMuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-9.jpg?alt=media&token=b00e07d0-1691-4a66-9f94-3782289bd7f2&_gl=1*1wgmujr*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDcxMDEuNi4wLjA.",
      ],
      unit_2_imagenes_B: [
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidara-3-rooms.JPG?alt=media&token=d73e5fe5-33ec-4198-80e7-12b7940c5040&_gl=1*wenryf*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDgxODEuNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-3.jpg?alt=media&token=3316795b-f3c0-44d4-80d9-04493ec91b9d&_gl=1*1wre0y1*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDY0MDcuNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-4.jpg?alt=media&token=d8e271cc-fc0f-4761-a410-ab8e3b548ba5&_gl=1*ooqawu*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDY0MjYuNDEuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-4b.jpg?alt=media&token=36aedd4f-3dc7-4cde-996e-dd0f19aea386&_gl=1*46ayyy*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDY0NDAuMjcuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-5.jpg?alt=media&token=bced20fc-fdc2-4626-bcd7-26393723f999&_gl=1*lkjdxy*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDY0ODQuNTkuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-6.jpg?alt=media&token=53179df4-6fd0-4ad4-9478-17999832935d&_gl=1*1cpmf1v*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDY1MjcuMTYuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-7.jpg?alt=media&token=0d1010fa-0cf2-49c8-9338-acc22f8d850f&_gl=1*a7ja6o*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDY4MjEuMjIuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-7b.jpg?alt=media&token=50abe1e0-176c-4591-b195-63afdb60d816&_gl=1*1o6yyzd*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDY4NDYuNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-8.jpg?alt=media&token=a59525b2-d6b0-4d96-99a1-ce82a4c59dfb&_gl=1*qew6a1*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDcwNDcuNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-8b.jpg?alt=media&token=e827af89-bc04-437d-907b-1c34ed887688&_gl=1*1dt0z16*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDcwNzQuMzMuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-9.jpg?alt=media&token=b00e07d0-1691-4a66-9f94-3782289bd7f2&_gl=1*1wgmujr*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDcxMDEuNi4wLjA.",
      ],
    },
    unit_3: {
      //Three BEDROOM
      // unit_3_Title: "1 Recámara 69.94m²",
      unit_3_Title: "coz.athimar.unit_3.unit_3_Title",
      unit_3_description: "coz.athimar.unit_3.unit_3_Title",
      unit_3_precio: 4780000,
      unit_3_imagenes_A: [
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR-three-bedroom.jpg?alt=media&token=c01bf2f4-db06-48eb-a7ad-7cdd3255680c&_gl=1*1xl8ak7*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NTg4MTg2OC41Mi4xLjE2OTU4ODE4ODIuNDYuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_POOL%20(1).jpg?alt=media&token=3bfcf350-2932-4067-9450-e45c8c751db7",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_POOL%20TERRACE.jpg?alt=media&token=1689a08a-5057-409f-b19e-8d0cfc83078d",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_RECAMARA%20DEP%20TIPO.jpg?alt=media&token=d39d5acf-793f-4b29-9ad0-0325831b4bd5",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_RECAMARA%20DEP%20TIPO2.jpg?alt=media&token=5bec04b9-311c-4de5-b079-8eea9a4b14a2",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_SALA%20COMEDOR%20COCINA%20DEPT08.jpg?alt=media&token=1f84bca6-8e13-41b2-aa81-6f8fe894d9a7",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_SALA%20COMEDOR%20COCINA%20PH.jpg?alt=media&token=2465d64c-861f-4a10-9749-3277ec5da133",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_BA%C3%91O.jpg?alt=media&token=76843091-6759-42c1-b11f-af22666b0a47",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_COCINA.jpg?alt=media&token=68e80fbd-2392-40ab-86c4-78a2edabcd5c",
      ],
      unit_3_imagenes_B: [
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR-three-bedroom.jpg?alt=media&token=c01bf2f4-db06-48eb-a7ad-7cdd3255680c&_gl=1*1xl8ak7*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NTg4MTg2OC41Mi4xLjE2OTU4ODE4ODIuNDYuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_POOL%20(1).jpg?alt=media&token=3bfcf350-2932-4067-9450-e45c8c751db7",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_POOL%20TERRACE.jpg?alt=media&token=1689a08a-5057-409f-b19e-8d0cfc83078d",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_RECAMARA%20DEP%20TIPO.jpg?alt=media&token=d39d5acf-793f-4b29-9ad0-0325831b4bd5",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_RECAMARA%20DEP%20TIPO2.jpg?alt=media&token=5bec04b9-311c-4de5-b079-8eea9a4b14a2",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_SALA%20COMEDOR%20COCINA%20DEPT08.jpg?alt=media&token=1f84bca6-8e13-41b2-aa81-6f8fe894d9a7",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_SALA%20COMEDOR%20COCINA%20PH.jpg?alt=media&token=2465d64c-861f-4a10-9749-3277ec5da133",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_BA%C3%91O.jpg?alt=media&token=76843091-6759-42c1-b11f-af22666b0a47",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_COCINA.jpg?alt=media&token=68e80fbd-2392-40ab-86c4-78a2edabcd5c",
      ],
    },
    unit_4: {
      //Penthouse
      unit_4_Title: "coz.athimar.unit_4.unit_4_Title",
      unit_4_description: "coz.athimar.unit_4.unit_4_Title",
      unit_4_precio: 4780000,
      unit_4_imagenes_A: [
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR-penthouse.jpg?alt=media&token=bc239a94-c3bc-45a7-a406-fe018a51db7a&_gl=1*1qohdnr*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NjA0NTE0NS41My4xLjE2OTYwNDU0MTcuMTcuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_POOL%20(1).jpg?alt=media&token=3bfcf350-2932-4067-9450-e45c8c751db7",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_POOL%20TERRACE.jpg?alt=media&token=1689a08a-5057-409f-b19e-8d0cfc83078d",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_RECAMARA%20DEP%20TIPO.jpg?alt=media&token=d39d5acf-793f-4b29-9ad0-0325831b4bd5",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_RECAMARA%20DEP%20TIPO2.jpg?alt=media&token=5bec04b9-311c-4de5-b079-8eea9a4b14a2",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_SALA%20COMEDOR%20COCINA%20DEPT08.jpg?alt=media&token=1f84bca6-8e13-41b2-aa81-6f8fe894d9a7",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_SALA%20COMEDOR%20COCINA%20PH.jpg?alt=media&token=2465d64c-861f-4a10-9749-3277ec5da133",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_BA%C3%91O.jpg?alt=media&token=76843091-6759-42c1-b11f-af22666b0a47",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_COCINA.jpg?alt=media&token=68e80fbd-2392-40ab-86c4-78a2edabcd5c",
      ],
      unit_4_imagenes_B: [
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR-penthouse.jpg?alt=media&token=bc239a94-c3bc-45a7-a406-fe018a51db7a&_gl=1*1qohdnr*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NjA0NTE0NS41My4xLjE2OTYwNDU0MTcuMTcuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_POOL%20(1).jpg?alt=media&token=3bfcf350-2932-4067-9450-e45c8c751db7",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_POOL%20TERRACE.jpg?alt=media&token=1689a08a-5057-409f-b19e-8d0cfc83078d",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_RECAMARA%20DEP%20TIPO.jpg?alt=media&token=d39d5acf-793f-4b29-9ad0-0325831b4bd5",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_RECAMARA%20DEP%20TIPO2.jpg?alt=media&token=5bec04b9-311c-4de5-b079-8eea9a4b14a2",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_SALA%20COMEDOR%20COCINA%20DEPT08.jpg?alt=media&token=1f84bca6-8e13-41b2-aa81-6f8fe894d9a7",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_SALA%20COMEDOR%20COCINA%20PH.jpg?alt=media&token=2465d64c-861f-4a10-9749-3277ec5da133",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_BA%C3%91O.jpg?alt=media&token=76843091-6759-42c1-b11f-af22666b0a47",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_COCINA.jpg?alt=media&token=68e80fbd-2392-40ab-86c4-78a2edabcd5c",
      ],
    },
  },
  //"NALU - Puerto Morelos"
  {
    id: 4,
    desarrollo: "NÁLU ",
    nickName: "NÁLU LUXURY BEACHFRONT RESIDENCES",
    subTitle: "",
    tipo: "departamento",
    ubicacion: "Puerto Morelos",
    onsale: "promo",
    route: "properties/Puerto-Morelos/Nalu-Luxury-beachfront-residences",
    route2: "Puerto-Morelos/Nalu-Luxury-beachfront-residences",
    routeUnit_1:
      "properties/Puerto-Morelos/Nalu-Luxury-beachfront-residences/Two-Bedroom",
    routeUnit_2:
      "properties/Puerto-Morelos/Nalu-Luxury-beachfront-residences/Three-Bedroom",
    precio: 699000,
    habitaciones: "dosTres",
    banios: "tres_banios",
    metrosCuadrados: "m2Nalu",
    
    imagenCard:
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FCUN%2FVidaraa%2Fvidaraa-tower-homecard.jpg?alt=media&token=4e1b0df2-9a25-4fca-813d-e59cf2e3a186&_gl=1*17t7769*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5NzYwNTU5NC42MS4xLjE2OTc2MDU3ODQuNjAuMC4w",
    // embededMapSrc:
    //   "https://maps.google.com/maps?width=945&amp;height=512&amp;hl=en&amp;q=Athimar Cozumel&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embedhttps://maps.google.com/maps?width=945&amp;height=512&amp;hl=en&amp;q=Athimar Cozumel&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed",

    imagesCube: [
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F01_PRINCIPAL%20less.png?alt=media&token=b3a9d55b-7fbf-4a03-af2a-e1f58b8c2243&_gl=1*sfiled*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTc1MjcuMzcuMC4w",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F01_PRINCIPAL%20mar.png?alt=media&token=e18ad3d9-57fa-411f-9f22-a3fd81f07126&_gl=1*1gxfcuq*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTc1NDYuMTguMC4w",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F02_POSTERIOR%20less.png?alt=media&token=5cab9866-7e3d-49df-9b1d-6a1515f13e2e&_gl=1*tkrc7b*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTc1NjEuMy4wLjA.",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F03_AEREA%20less.png?alt=media&token=ba7c57aa-9b69-4c08-a824-eaa85797d60f&_gl=1*1o657cy*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTc2MDYuMTguMC4w",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F04_AEREA%20less.png?alt=media&token=b982b6ce-d913-4ddc-a1a0-4ae120c617ff&_gl=1*16s9jju*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTgyNjQuNjAuMC4w",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F05_CAMASTROS_MAR.png?alt=media&token=026414d1-1d82-4f0e-8eee-14fb7413da8f&_gl=1*unquyz*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTgzODYuMjEuMC4w",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F06_PLANTA%20less.png?alt=media&token=6ff5c8fc-d51a-4631-b8fd-6c55b9e01353&_gl=1*1ertsf2*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg0MTQuNjAuMC4w",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F07_LOBBY.jpg?alt=media&token=ac34003a-e5fb-4968-be2c-fa6c67934d61&_gl=1*1swq8ot*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg0NTMuMjEuMC4w",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F08_PISCINA_MAR%20less.png?alt=media&token=95299fbb-9976-419e-ae73-fbad249a245e&_gl=1*5nh47u*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg0NzguNjAuMC4w",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F09_AREASCOMUNES%20less.png?alt=media&token=432bf5f2-f5a3-405f-9158-8c94d8ee5f63&_gl=1*x5vrs1*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg1MTAuMjguMC4w",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F10_PISCINA_MAR%20less.png?alt=media&token=a36fa2a0-b05d-44c3-a247-cea8c4005577&_gl=1*nd09za*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg1NDEuNjAuMC4w",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F11_GYM.jpg?alt=media&token=4856727c-5401-451c-b20d-b1ff6647ab4a&_gl=1*1ug250h*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg2MTAuNTcuMC4w",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F12_USOSMULTIPLES.jpg?alt=media&token=85f2ccb3-d047-4cf3-ac1e-d1983128fa37&_gl=1*1ggznj3*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg2NDQuMjMuMC4w",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F13_ROOFGARDEN.jpg?alt=media&token=7891104a-4d8c-4c04-a8eb-18cff2d64b62&_gl=1*1v27d16*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg2ODEuNjAuMC4w",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F14_ROOFGARDEN%20less.png?alt=media&token=b12fdfd2-4c3e-4879-b987-08d621e4c5ae&_gl=1*vmk1rk*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg3MTAuMzEuMC4w",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F14_ROOFGARDENb.png?alt=media&token=4898d8ec-4e91-4e62-a5c8-99275e63d9c3&_gl=1*1he75a6*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg3NDMuNjAuMC4w",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F15_COCINAPH%20less.png?alt=media&token=503bca82-b595-4891-8ed9-ef4ddf1c1712&_gl=1*1o938bp*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg3NzkuMjQuMC4w",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F16_TERRAZAPH%20less.png?alt=media&token=aa3cf040-4e01-47f1-8eb7-0413e8e0ec92&_gl=1*8l3ain*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg4MDcuNTguMC4w",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F17_SALAMAR%20less.png?alt=media&token=1888bb48-8f6b-41ad-b925-9213cd3a76bb&_gl=1*yxo4zc*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg4MzMuMzIuMC4w",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F17_SALAMAR%20lessb.png?alt=media&token=a1d88435-85bb-4230-9ce8-1dd2860dec0b&_gl=1*16ic23t*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg4NTUuMTAuMC4w",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F18_SALACOMEDOR.jpg?alt=media&token=3ce8f34e-22a2-46f5-84a9-e8b9032d01b2&_gl=1*b2syo4*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg4NzguNjAuMC4w",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F19_RECMAR%20less.png?alt=media&token=356939a5-9fea-4c31-b0f2-769fccb280b3&_gl=1*1pr6o9e*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg5MDMuMzUuMC4w",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F19_RECMAR%20lessb.png?alt=media&token=ff6ad76a-f087-4390-940f-966a1a841995&_gl=1*y1khg*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg5MzIuNi4wLjA.",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F20_RECAMARA_JACUZZI%20less.png?alt=media&token=40c8688f-cf38-49c8-b0be-d0f431ea9905&_gl=1*1ilrrh3*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg5OTEuNTkuMC4w",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F20_RECAMARA_JACUZZI%20less.png?alt=media&token=40c8688f-cf38-49c8-b0be-d0f431ea9905&_gl=1*1ilrrh3*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg5OTEuNTkuMC4w",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F21_SALACOCINA_MANGLAR%20lessb.png?alt=media&token=d813f68b-59fd-4597-bee8-d8edc1186c42&_gl=1*11x6dry*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTkwMzYuMTQuMC4w",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F21_SALACOCINA_MANGLAR%20lessb.png?alt=media&token=d813f68b-59fd-4597-bee8-d8edc1186c42&_gl=1*11x6dry*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTkwMzYuMTQuMC4w",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F22_SALAMAR_MANGLAR%20leesb.png?alt=media&token=c1115ea9-74b8-4ccf-ae79-f600a363fa5e&_gl=1*z4x8dy*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTkwODYuMzUuMC4w",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F23_REC_MANGLAR%20less.png?alt=media&token=5b9cb954-adc2-45a0-bd85-3694ed3d4764&_gl=1*1dpydn5*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTkxMTAuMTEuMC4w",
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2Fasoladero.jpeg?alt=media&token=788a0624-c05e-41a8-9e7f-b8ca6e90dc95&_gl=1*gtu5od*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTkxNDUuNDkuMC4w",
    ],
    unit_1: {
      //TWO BEDROOMS NÁLU

      unit_1_precio: 4780000,

      unit_1_imagenes_A: [
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F2%20BEDROOMS.jpg?alt=media&token=fd7d2459-94f6-47ba-98e9-559a98acef0f&_gl=1*1gnsxiu*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg2OTE4OS42Ny4xLjE2OTc4Njk2NjUuMTMuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F07_LOBBY.jpg?alt=media&token=ac34003a-e5fb-4968-be2c-fa6c67934d61&_gl=1*1swq8ot*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg0NTMuMjEuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F08_PISCINA_MAR%20less.png?alt=media&token=95299fbb-9976-419e-ae73-fbad249a245e&_gl=1*5nh47u*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg0NzguNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F09_AREASCOMUNES%20less.png?alt=media&token=432bf5f2-f5a3-405f-9158-8c94d8ee5f63&_gl=1*x5vrs1*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg1MTAuMjguMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F10_PISCINA_MAR%20less.png?alt=media&token=a36fa2a0-b05d-44c3-a247-cea8c4005577&_gl=1*nd09za*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg1NDEuNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F11_GYM.jpg?alt=media&token=4856727c-5401-451c-b20d-b1ff6647ab4a&_gl=1*1ug250h*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg2MTAuNTcuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F12_USOSMULTIPLES.jpg?alt=media&token=85f2ccb3-d047-4cf3-ac1e-d1983128fa37&_gl=1*1ggznj3*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg2NDQuMjMuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F13_ROOFGARDEN.jpg?alt=media&token=7891104a-4d8c-4c04-a8eb-18cff2d64b62&_gl=1*1v27d16*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg2ODEuNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F14_ROOFGARDEN%20less.png?alt=media&token=b12fdfd2-4c3e-4879-b987-08d621e4c5ae&_gl=1*vmk1rk*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg3MTAuMzEuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F14_ROOFGARDENb.png?alt=media&token=4898d8ec-4e91-4e62-a5c8-99275e63d9c3&_gl=1*1he75a6*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg3NDMuNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F15_COCINAPH%20less.png?alt=media&token=503bca82-b595-4891-8ed9-ef4ddf1c1712&_gl=1*1o938bp*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg3NzkuMjQuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F16_TERRAZAPH%20less.png?alt=media&token=aa3cf040-4e01-47f1-8eb7-0413e8e0ec92&_gl=1*8l3ain*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg4MDcuNTguMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F17_SALAMAR%20less.png?alt=media&token=1888bb48-8f6b-41ad-b925-9213cd3a76bb&_gl=1*yxo4zc*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg4MzMuMzIuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F17_SALAMAR%20lessb.png?alt=media&token=a1d88435-85bb-4230-9ce8-1dd2860dec0b&_gl=1*16ic23t*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg4NTUuMTAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F18_SALACOMEDOR.jpg?alt=media&token=3ce8f34e-22a2-46f5-84a9-e8b9032d01b2&_gl=1*b2syo4*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg4NzguNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F19_RECMAR%20less.png?alt=media&token=356939a5-9fea-4c31-b0f2-769fccb280b3&_gl=1*1pr6o9e*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg5MDMuMzUuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F19_RECMAR%20lessb.png?alt=media&token=ff6ad76a-f087-4390-940f-966a1a841995&_gl=1*y1khg*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg5MzIuNi4wLjA.",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F20_RECAMARA_JACUZZI%20less.png?alt=media&token=40c8688f-cf38-49c8-b0be-d0f431ea9905&_gl=1*1ilrrh3*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg5OTEuNTkuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F20_RECAMARA_JACUZZI%20less.png?alt=media&token=40c8688f-cf38-49c8-b0be-d0f431ea9905&_gl=1*1ilrrh3*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg5OTEuNTkuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F21_SALACOCINA_MANGLAR%20lessb.png?alt=media&token=d813f68b-59fd-4597-bee8-d8edc1186c42&_gl=1*11x6dry*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTkwMzYuMTQuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F21_SALACOCINA_MANGLAR%20lessb.png?alt=media&token=d813f68b-59fd-4597-bee8-d8edc1186c42&_gl=1*11x6dry*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTkwMzYuMTQuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F22_SALAMAR_MANGLAR%20leesb.png?alt=media&token=c1115ea9-74b8-4ccf-ae79-f600a363fa5e&_gl=1*z4x8dy*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTkwODYuMzUuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F23_REC_MANGLAR%20less.png?alt=media&token=5b9cb954-adc2-45a0-bd85-3694ed3d4764&_gl=1*1dpydn5*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTkxMTAuMTEuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2Fasoladero.jpeg?alt=media&token=788a0624-c05e-41a8-9e7f-b8ca6e90dc95&_gl=1*gtu5od*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTkxNDUuNDkuMC4w",
      ],
      unit_1_imagenes_B: [
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F2%20BEDROOMS.jpg?alt=media&token=fd7d2459-94f6-47ba-98e9-559a98acef0f&_gl=1*1gnsxiu*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg2OTE4OS42Ny4xLjE2OTc4Njk2NjUuMTMuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F07_LOBBY.jpg?alt=media&token=ac34003a-e5fb-4968-be2c-fa6c67934d61&_gl=1*1swq8ot*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg0NTMuMjEuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F08_PISCINA_MAR%20less.png?alt=media&token=95299fbb-9976-419e-ae73-fbad249a245e&_gl=1*5nh47u*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg0NzguNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F09_AREASCOMUNES%20less.png?alt=media&token=432bf5f2-f5a3-405f-9158-8c94d8ee5f63&_gl=1*x5vrs1*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg1MTAuMjguMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F10_PISCINA_MAR%20less.png?alt=media&token=a36fa2a0-b05d-44c3-a247-cea8c4005577&_gl=1*nd09za*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg1NDEuNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F11_GYM.jpg?alt=media&token=4856727c-5401-451c-b20d-b1ff6647ab4a&_gl=1*1ug250h*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg2MTAuNTcuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F12_USOSMULTIPLES.jpg?alt=media&token=85f2ccb3-d047-4cf3-ac1e-d1983128fa37&_gl=1*1ggznj3*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg2NDQuMjMuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F13_ROOFGARDEN.jpg?alt=media&token=7891104a-4d8c-4c04-a8eb-18cff2d64b62&_gl=1*1v27d16*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg2ODEuNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F14_ROOFGARDEN%20less.png?alt=media&token=b12fdfd2-4c3e-4879-b987-08d621e4c5ae&_gl=1*vmk1rk*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg3MTAuMzEuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F14_ROOFGARDENb.png?alt=media&token=4898d8ec-4e91-4e62-a5c8-99275e63d9c3&_gl=1*1he75a6*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg3NDMuNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F15_COCINAPH%20less.png?alt=media&token=503bca82-b595-4891-8ed9-ef4ddf1c1712&_gl=1*1o938bp*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg3NzkuMjQuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F16_TERRAZAPH%20less.png?alt=media&token=aa3cf040-4e01-47f1-8eb7-0413e8e0ec92&_gl=1*8l3ain*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg4MDcuNTguMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F17_SALAMAR%20less.png?alt=media&token=1888bb48-8f6b-41ad-b925-9213cd3a76bb&_gl=1*yxo4zc*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg4MzMuMzIuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F17_SALAMAR%20lessb.png?alt=media&token=a1d88435-85bb-4230-9ce8-1dd2860dec0b&_gl=1*16ic23t*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg4NTUuMTAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F18_SALACOMEDOR.jpg?alt=media&token=3ce8f34e-22a2-46f5-84a9-e8b9032d01b2&_gl=1*b2syo4*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg4NzguNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F19_RECMAR%20less.png?alt=media&token=356939a5-9fea-4c31-b0f2-769fccb280b3&_gl=1*1pr6o9e*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg5MDMuMzUuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F19_RECMAR%20lessb.png?alt=media&token=ff6ad76a-f087-4390-940f-966a1a841995&_gl=1*y1khg*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg5MzIuNi4wLjA.",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F20_RECAMARA_JACUZZI%20less.png?alt=media&token=40c8688f-cf38-49c8-b0be-d0f431ea9905&_gl=1*1ilrrh3*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg5OTEuNTkuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F20_RECAMARA_JACUZZI%20less.png?alt=media&token=40c8688f-cf38-49c8-b0be-d0f431ea9905&_gl=1*1ilrrh3*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg5OTEuNTkuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F21_SALACOCINA_MANGLAR%20lessb.png?alt=media&token=d813f68b-59fd-4597-bee8-d8edc1186c42&_gl=1*11x6dry*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTkwMzYuMTQuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F21_SALACOCINA_MANGLAR%20lessb.png?alt=media&token=d813f68b-59fd-4597-bee8-d8edc1186c42&_gl=1*11x6dry*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTkwMzYuMTQuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F22_SALAMAR_MANGLAR%20leesb.png?alt=media&token=c1115ea9-74b8-4ccf-ae79-f600a363fa5e&_gl=1*z4x8dy*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTkwODYuMzUuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F23_REC_MANGLAR%20less.png?alt=media&token=5b9cb954-adc2-45a0-bd85-3694ed3d4764&_gl=1*1dpydn5*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTkxMTAuMTEuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2Fasoladero.jpeg?alt=media&token=788a0624-c05e-41a8-9e7f-b8ca6e90dc95&_gl=1*gtu5od*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTkxNDUuNDkuMC4w",
      ],
    },

    unit_2: {
      //ONE BEDROOM
      // unit_1_Title: "1 Recámara 69.94m²",
      unit_2_Title: "coz.athimar.unit_2.unit_2_Title",
      unit_2_description: "coz.athimar.unit_2.unit_2_Title",
      unit_2_precio: 4780000,
      
      unit_2_imagenes_A: [
       "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2FPenhouse3BEDROOMS.jpg?alt=media&token=72dc13bb-7631-4ced-ba78-f581b20aaeea&_gl=1*kzzet9*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg2OTE4OS42Ny4xLjE2OTc4NzAzODkuNjAuMC4w",
       "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F07_LOBBY.jpg?alt=media&token=ac34003a-e5fb-4968-be2c-fa6c67934d61&_gl=1*1swq8ot*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg0NTMuMjEuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F08_PISCINA_MAR%20less.png?alt=media&token=95299fbb-9976-419e-ae73-fbad249a245e&_gl=1*5nh47u*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg0NzguNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F09_AREASCOMUNES%20less.png?alt=media&token=432bf5f2-f5a3-405f-9158-8c94d8ee5f63&_gl=1*x5vrs1*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg1MTAuMjguMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F10_PISCINA_MAR%20less.png?alt=media&token=a36fa2a0-b05d-44c3-a247-cea8c4005577&_gl=1*nd09za*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg1NDEuNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F11_GYM.jpg?alt=media&token=4856727c-5401-451c-b20d-b1ff6647ab4a&_gl=1*1ug250h*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg2MTAuNTcuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F12_USOSMULTIPLES.jpg?alt=media&token=85f2ccb3-d047-4cf3-ac1e-d1983128fa37&_gl=1*1ggznj3*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg2NDQuMjMuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F13_ROOFGARDEN.jpg?alt=media&token=7891104a-4d8c-4c04-a8eb-18cff2d64b62&_gl=1*1v27d16*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg2ODEuNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F14_ROOFGARDEN%20less.png?alt=media&token=b12fdfd2-4c3e-4879-b987-08d621e4c5ae&_gl=1*vmk1rk*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg3MTAuMzEuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F14_ROOFGARDENb.png?alt=media&token=4898d8ec-4e91-4e62-a5c8-99275e63d9c3&_gl=1*1he75a6*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg3NDMuNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F15_COCINAPH%20less.png?alt=media&token=503bca82-b595-4891-8ed9-ef4ddf1c1712&_gl=1*1o938bp*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg3NzkuMjQuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F16_TERRAZAPH%20less.png?alt=media&token=aa3cf040-4e01-47f1-8eb7-0413e8e0ec92&_gl=1*8l3ain*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg4MDcuNTguMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F17_SALAMAR%20less.png?alt=media&token=1888bb48-8f6b-41ad-b925-9213cd3a76bb&_gl=1*yxo4zc*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg4MzMuMzIuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F17_SALAMAR%20lessb.png?alt=media&token=a1d88435-85bb-4230-9ce8-1dd2860dec0b&_gl=1*16ic23t*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg4NTUuMTAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F18_SALACOMEDOR.jpg?alt=media&token=3ce8f34e-22a2-46f5-84a9-e8b9032d01b2&_gl=1*b2syo4*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg4NzguNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F19_RECMAR%20less.png?alt=media&token=356939a5-9fea-4c31-b0f2-769fccb280b3&_gl=1*1pr6o9e*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg5MDMuMzUuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F19_RECMAR%20lessb.png?alt=media&token=ff6ad76a-f087-4390-940f-966a1a841995&_gl=1*y1khg*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg5MzIuNi4wLjA.",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F20_RECAMARA_JACUZZI%20less.png?alt=media&token=40c8688f-cf38-49c8-b0be-d0f431ea9905&_gl=1*1ilrrh3*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg5OTEuNTkuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F20_RECAMARA_JACUZZI%20less.png?alt=media&token=40c8688f-cf38-49c8-b0be-d0f431ea9905&_gl=1*1ilrrh3*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg5OTEuNTkuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F21_SALACOCINA_MANGLAR%20lessb.png?alt=media&token=d813f68b-59fd-4597-bee8-d8edc1186c42&_gl=1*11x6dry*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTkwMzYuMTQuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F21_SALACOCINA_MANGLAR%20lessb.png?alt=media&token=d813f68b-59fd-4597-bee8-d8edc1186c42&_gl=1*11x6dry*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTkwMzYuMTQuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F22_SALAMAR_MANGLAR%20leesb.png?alt=media&token=c1115ea9-74b8-4ccf-ae79-f600a363fa5e&_gl=1*z4x8dy*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTkwODYuMzUuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F23_REC_MANGLAR%20less.png?alt=media&token=5b9cb954-adc2-45a0-bd85-3694ed3d4764&_gl=1*1dpydn5*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTkxMTAuMTEuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2Fasoladero.jpeg?alt=media&token=788a0624-c05e-41a8-9e7f-b8ca6e90dc95&_gl=1*gtu5od*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTkxNDUuNDkuMC4w",
      ],
      unit_2_imagenes_B: [
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2FPenhouse3BEDROOMS.jpg?alt=media&token=72dc13bb-7631-4ced-ba78-f581b20aaeea&_gl=1*kzzet9*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg2OTE4OS42Ny4xLjE2OTc4NzAzODkuNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F07_LOBBY.jpg?alt=media&token=ac34003a-e5fb-4968-be2c-fa6c67934d61&_gl=1*1swq8ot*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg0NTMuMjEuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F08_PISCINA_MAR%20less.png?alt=media&token=95299fbb-9976-419e-ae73-fbad249a245e&_gl=1*5nh47u*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg0NzguNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F09_AREASCOMUNES%20less.png?alt=media&token=432bf5f2-f5a3-405f-9158-8c94d8ee5f63&_gl=1*x5vrs1*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg1MTAuMjguMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F10_PISCINA_MAR%20less.png?alt=media&token=a36fa2a0-b05d-44c3-a247-cea8c4005577&_gl=1*nd09za*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg1NDEuNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F11_GYM.jpg?alt=media&token=4856727c-5401-451c-b20d-b1ff6647ab4a&_gl=1*1ug250h*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg2MTAuNTcuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F12_USOSMULTIPLES.jpg?alt=media&token=85f2ccb3-d047-4cf3-ac1e-d1983128fa37&_gl=1*1ggznj3*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg2NDQuMjMuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F13_ROOFGARDEN.jpg?alt=media&token=7891104a-4d8c-4c04-a8eb-18cff2d64b62&_gl=1*1v27d16*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg2ODEuNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F14_ROOFGARDEN%20less.png?alt=media&token=b12fdfd2-4c3e-4879-b987-08d621e4c5ae&_gl=1*vmk1rk*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg3MTAuMzEuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F14_ROOFGARDENb.png?alt=media&token=4898d8ec-4e91-4e62-a5c8-99275e63d9c3&_gl=1*1he75a6*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg3NDMuNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F15_COCINAPH%20less.png?alt=media&token=503bca82-b595-4891-8ed9-ef4ddf1c1712&_gl=1*1o938bp*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg3NzkuMjQuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F16_TERRAZAPH%20less.png?alt=media&token=aa3cf040-4e01-47f1-8eb7-0413e8e0ec92&_gl=1*8l3ain*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg4MDcuNTguMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F17_SALAMAR%20less.png?alt=media&token=1888bb48-8f6b-41ad-b925-9213cd3a76bb&_gl=1*yxo4zc*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg4MzMuMzIuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F17_SALAMAR%20lessb.png?alt=media&token=a1d88435-85bb-4230-9ce8-1dd2860dec0b&_gl=1*16ic23t*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg4NTUuMTAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F18_SALACOMEDOR.jpg?alt=media&token=3ce8f34e-22a2-46f5-84a9-e8b9032d01b2&_gl=1*b2syo4*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg4NzguNjAuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F19_RECMAR%20less.png?alt=media&token=356939a5-9fea-4c31-b0f2-769fccb280b3&_gl=1*1pr6o9e*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg5MDMuMzUuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F19_RECMAR%20lessb.png?alt=media&token=ff6ad76a-f087-4390-940f-966a1a841995&_gl=1*y1khg*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg5MzIuNi4wLjA.",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F20_RECAMARA_JACUZZI%20less.png?alt=media&token=40c8688f-cf38-49c8-b0be-d0f431ea9905&_gl=1*1ilrrh3*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg5OTEuNTkuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F20_RECAMARA_JACUZZI%20less.png?alt=media&token=40c8688f-cf38-49c8-b0be-d0f431ea9905&_gl=1*1ilrrh3*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTg5OTEuNTkuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F21_SALACOCINA_MANGLAR%20lessb.png?alt=media&token=d813f68b-59fd-4597-bee8-d8edc1186c42&_gl=1*11x6dry*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTkwMzYuMTQuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F21_SALACOCINA_MANGLAR%20lessb.png?alt=media&token=d813f68b-59fd-4597-bee8-d8edc1186c42&_gl=1*11x6dry*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTkwMzYuMTQuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F22_SALAMAR_MANGLAR%20leesb.png?alt=media&token=c1115ea9-74b8-4ccf-ae79-f600a363fa5e&_gl=1*z4x8dy*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTkwODYuMzUuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2F23_REC_MANGLAR%20less.png?alt=media&token=5b9cb954-adc2-45a0-bd85-3694ed3d4764&_gl=1*1dpydn5*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTkxMTAuMTEuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPuertoMorelos%2Fasoladero.jpeg?alt=media&token=788a0624-c05e-41a8-9e7f-b8ca6e90dc95&_gl=1*gtu5od*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5Nzg1NzM2My42NS4xLjE2OTc4NTkxNDUuNDkuMC4w",
      ],
    },
   
  },
   //"PEREGRINA - Tulum"
   {
    id: 4,
    desarrollo: "PEREGRINA ",
    nickName: "El Paraíso, sobre el cielo y sobre arena.",
    subTitle: "",
    tipo: "departamento",
    ubicacion: "Tulum",
    onsale: "promo",
    route: "properties/Tulum/Peregrina",
    route2: "Tulum/Peregrina",
    routeUnit_1: "properties/Tulum/Peregrina/Studio",
    routeUnit_2: "properties/Tulum/Peregrina/Two-Bedroom",
    precio: 2500000,
    habitaciones: "tres_habs",
    banios: "dos_banios",
    metrosCuadrados: "m2TresPatios",
    ymuchomas: "ymuchomas",

    imagenCard:
    "https://firebasestorage.googleapis.com/v0/b/nlb-res-peregrina-mainpage-img.appspot.com/o/00_PEREGRINA_CARD.png?alt=media&token=0791598b-21c9-4451-8df6-164915f3b99e",
  imagesCube: [
    "https://firebasestorage.googleapis.com/v0/b/nlb-res-peregrina-mainpage-img.appspot.com/o/02_PEREGRINA_FACHADA_NOCTURNA_1.jpg?alt=media&token=8856ee5e-1cd8-448a-a244-b6731711af7b",
    "https://firebasestorage.googleapis.com/v0/b/nlb-res-peregrina-mainpage-img.appspot.com/o/03_PEREGRINA_LOBBY.png?alt=media&token=0b683324-b3d2-49af-a328-5f568165c478",
    "https://firebasestorage.googleapis.com/v0/b/nlb-res-peregrina-mainpage-img.appspot.com/o/04_PEREGRINA_PISCINA.jpg?alt=media&token=dfac3906-2193-4b04-bdbd-6ad45f559453",
    "https://firebasestorage.googleapis.com/v0/b/nlb-res-peregrina-mainpage-img.appspot.com/o/05_PEREGRINA_RESTAURANT.jpg?alt=media&token=ab98848e-0552-4b96-a5bd-5bb243c3946a",
    "https://firebasestorage.googleapis.com/v0/b/nlb-res-peregrina-mainpage-img.appspot.com/o/05_PEREGRINA_RESTAURANT_2.jpg?alt=media&token=8cf73669-284c-413f-a171-d0d83f1bbc41",
    "https://firebasestorage.googleapis.com/v0/b/nlb-res-peregrina-mainpage-img.appspot.com/o/06_PEREGRINA_GIMNASIO.png?alt=media&token=fc32868b-763b-4b8c-a1a0-d3df41edbaf1",
    "https://firebasestorage.googleapis.com/v0/b/nlb-res-peregrina-mainpage-img.appspot.com/o/07_PEREGRINA_COWORKING.png?alt=media&token=7bb27e49-7a03-4dcd-9de2-868e84786c8d",
    "https://firebasestorage.googleapis.com/v0/b/nlb-res-peregrina-mainpage-img.appspot.com/o/08_PEREGRINA_GIMNASIO.jpg?alt=media&token=2ea95b10-a1a6-42f7-b0b4-83087507fa10",
    "https://firebasestorage.googleapis.com/v0/b/nlb-res-peregrina-mainpage-img.appspot.com/o/09_PEREGRINA_FIREPIT.png?alt=media&token=945bd144-a8d6-4aca-aa8d-202f427b94d3",
    "https://firebasestorage.googleapis.com/v0/b/nlb-res-peregrina-mainpage-img.appspot.com/o/10_PEREGRINA_MIRADOR.png?alt=media&token=b08db926-2fd3-457e-b23b-4044d03af3d5",
    "https://firebasestorage.googleapis.com/v0/b/nlb-res-peregrina-mainpage-img.appspot.com/o/11_PEREGRINA_JARDIN%20ZEN.jpg?alt=media&token=a55953d0-f09e-4bc2-9791-b3bc8fa41c65",
    "https://firebasestorage.googleapis.com/v0/b/nlb-res-peregrina-mainpage-img.appspot.com/o/12_PEREGRINA_SPA.jpg?alt=media&token=7830d3bf-6eef-40a1-ab3e-378a535e0f74",
    "https://firebasestorage.googleapis.com/v0/b/nlb-res-peregrina-mainpage-img.appspot.com/o/23_PEREGRINA_AEREA_1.png?alt=media&token=1927a08b-e7bb-4980-b924-b14919007dc3",
    "https://firebasestorage.googleapis.com/v0/b/nlb-res-peregrina-mainpage-img.appspot.com/o/23_PEREGRINA_AEREA_2.png?alt=media&token=6961bbb2-a7ed-46e6-87c4-ac0aece01201",
  ],
  unit_1: {
    //STUDIO

    unit_1_precio: 4780000,

    unit_1_imagenes_A: [
      "https://firebasestorage.googleapis.com/v0/b/nlb-res-peregrina-studio-img.appspot.com/o/01_PEREGRINA_ESTUDIO.JPG?alt=media&token=470ca079-9122-48c8-a9ab-bc90fc1788d5",
      "https://firebasestorage.googleapis.com/v0/b/nlb-res-peregrina-studio-img.appspot.com/o/01_PEREGRINA_ESTUDIO_01.jpg?alt=media&token=d955f5ae-d5a2-4b05-b928-16e92f5e5d19",
      "https://firebasestorage.googleapis.com/v0/b/nlb-res-peregrina-studio-img.appspot.com/o/01_PEREGRINA_ESTUDIO_02.jpg?alt=media&token=ce83f484-94e7-4535-88f7-68950b73ea7b",
      "https://firebasestorage.googleapis.com/v0/b/nlb-res-peregrina-studio-img.appspot.com/o/01_PEREGRINA_ESTUDIO_CORTE_1.jpg?alt=media&token=ee9b35b6-256c-46b3-89db-eca09df7f22a",
      "https://firebasestorage.googleapis.com/v0/b/nlb-res-peregrina-studio-img.appspot.com/o/01_PEREGRINA_ESTUDIO_CORTE_2.jpg?alt=media&token=82b82d64-2220-4b4d-aebe-f97e05f5a3b9",
      "https://firebasestorage.googleapis.com/v0/b/nlb-res-peregrina-studio-img.appspot.com/o/02_PEREGRINA_ESTUDIO_01.jpg?alt=media&token=6d9ad34a-ccc3-494a-985d-58aedd80af40",
      "https://firebasestorage.googleapis.com/v0/b/nlb-res-peregrina-studio-img.appspot.com/o/02_PEREGRINA_ESTUDIO_02.jpg?alt=media&token=059b4bb6-1db3-45b6-bee9-a2f566de1b2d",
      "https://firebasestorage.googleapis.com/v0/b/nlb-res-peregrina-studio-img.appspot.com/o/02_PEREGRINA_ESTUDIO_TERRAZA.jpg?alt=media&token=5f5fc0bb-feb2-4e36-8bf1-82c8503ce538"
      
    ],
    unit_1_imagenes_B: [
      "https://firebasestorage.googleapis.com/v0/b/nlb-res-peregrina-studio-img.appspot.com/o/01_PEREGRINA_ESTUDIO.JPG?alt=media&token=470ca079-9122-48c8-a9ab-bc90fc1788d5",
      "https://firebasestorage.googleapis.com/v0/b/nlb-res-peregrina-studio-img.appspot.com/o/01_PEREGRINA_ESTUDIO_01.jpg?alt=media&token=d955f5ae-d5a2-4b05-b928-16e92f5e5d19",
      "https://firebasestorage.googleapis.com/v0/b/nlb-res-peregrina-studio-img.appspot.com/o/01_PEREGRINA_ESTUDIO_02.jpg?alt=media&token=ce83f484-94e7-4535-88f7-68950b73ea7b",
      "https://firebasestorage.googleapis.com/v0/b/nlb-res-peregrina-studio-img.appspot.com/o/01_PEREGRINA_ESTUDIO_CORTE_1.jpg?alt=media&token=ee9b35b6-256c-46b3-89db-eca09df7f22a",
      "https://firebasestorage.googleapis.com/v0/b/nlb-res-peregrina-studio-img.appspot.com/o/01_PEREGRINA_ESTUDIO_CORTE_2.jpg?alt=media&token=82b82d64-2220-4b4d-aebe-f97e05f5a3b9",
      "https://firebasestorage.googleapis.com/v0/b/nlb-res-peregrina-studio-img.appspot.com/o/02_PEREGRINA_ESTUDIO_01.jpg?alt=media&token=6d9ad34a-ccc3-494a-985d-58aedd80af40",
      "https://firebasestorage.googleapis.com/v0/b/nlb-res-peregrina-studio-img.appspot.com/o/02_PEREGRINA_ESTUDIO_02.jpg?alt=media&token=059b4bb6-1db3-45b6-bee9-a2f566de1b2d",
      "https://firebasestorage.googleapis.com/v0/b/nlb-res-peregrina-studio-img.appspot.com/o/02_PEREGRINA_ESTUDIO_TERRAZA.jpg?alt=media&token=5f5fc0bb-feb2-4e36-8bf1-82c8503ce538"
    ],
  },

  unit_2: {
    //TWO BEDROOM
    
    
    unit_2_imagenes_A: [
    ],
    unit_2_imagenes_B: [
     
    ],
  },

  kaybe: {
    //KAYBE proyecto
    
    
    kaybe_imagenes_A: [
    ],
    kaybe_imagenes_B: [
     
    ],
  },
   
  
   },
  
];
