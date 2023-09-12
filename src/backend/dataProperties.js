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

export const urls = [
  {
    routes:{
      routeAllProperties:"http://localhost:3000/properties" ,
    }
  },
]
export const homeProperties = [
  {
    id: 1,
    desarrollo: "ATHIMAR",
    tipo: "departamento",
    ubicacion: "Cozumel",
    route: "properties/Cozumel/Athimar_Cozumel",
    route2: "Cozumel/Athimar_Cozumel",
    precio: 16999,
    habitaciones: "unoAtresRooms",
    baños:"unoAtresBaños",
    metrosCuadrados: "m2Athimar",
    ymuchomas: "ymuchomas",
    imagenCard:
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/homePropertiesImgs%2F1_ATHIMAR_home.jpg?alt=media&token=f0278039-5ae9-41a2-879b-a90329bbb830",
    
  },
  {
    id: 2,
    desarrollo: "TRES PATIOS",
    tipo: "casa",
    ubicacion: "Playa del Carmen",
    route: "properties/Playa_del_Carmen/Tres_Patios",
    route2: "Playa_del_Carmen/Tres_Patios",
    precio: 2500000,
    habitaciones: 3,
    baños: 2,
    sala: "Sala",
    cocina: "Cocina",
    comedor: "Comedor",
    closet: "Closets",
    terraza: "Terraza",
    metrosCuadrados: 90,
    description:
      "Contamos con 6 Departamentos en villas por cada módulo de 90 m2 o 110 m2.",
    imagenCard:
      "https://maxproperties.com.mx/wp-content/uploads/2021/09/paam.webp",
    embededMapSrc:
      "https://maps.google.com/maps?width=945&amp;height=512&amp;hl=en&amp;q=Tres Patios&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed",
  },
  {
    id: 3,
    desarrollo: "VIDARAA",
    tipo: "casa",
    ubicacion: "Cancún",
    route: "properties/Playa_del_Carmen/Tres_Patios",
    route2: "Playa_del_Carmen/Tres_Patios",
    precio: 2500000,
    habitaciones: 3,
    baños: 2,
    sala: "Sala",
    cocina: "Cocina",
    comedor: "Comedor",
    closet: "Closets",
    terraza: "Terraza",
    metrosCuadrados: 90,
    description:
      "Contamos con 6 Departamentos en villas por cada módulo de 90 m2 o 110 m2.",
    imagenCard:
      "https://maxproperties.com.mx/wp-content/uploads/2021/09/paam.webp",
    embededMapSrc:
      "https://maps.google.com/maps?width=945&amp;height=512&amp;hl=en&amp;q=Tres Patios&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed",
  },
  {
    id: 4,
    desarrollo: "LIK TULUM",
    tipo: "casa",
    ubicacion: "Playa del Carmen",
    route: "properties/Playa_del_Carmen/Tres_Patios",
    route2: "Playa_del_Carmen/Tres_Patios",
    precio: 2500000,
    habitaciones: 3,
    baños: 2,
    sala: "Sala",
    cocina: "Cocina",
    comedor: "Comedor",
    closet: "Closets",
    terraza: "Terraza",
    metrosCuadrados: 90,
    description:
      "Contamos con 6 Departamentos en villas por cada módulo de 90 m2 o 110 m2.",
    imagenCard:
      "https://maxproperties.com.mx/wp-content/uploads/2021/09/paam.webp",
    embededMapSrc:
      "https://maps.google.com/maps?width=945&amp;height=512&amp;hl=en&amp;q=Tres Patios&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed",
  },
  {
    id: 5,
    desarrollo: "NALU",
    tipo: "casa",
    ubicacion: "Puerto Morelos",
    route: "properties/Playa_del_Carmen/Tres_Patios",
    route2: "Playa_del_Carmen/Tres_Patios",
    precio: 2500000,
    habitaciones: 3,
    baños: 2,
    sala: "Sala",
    cocina: "Cocina",
    comedor: "Comedor",
    closet: "Closets",
    terraza: "Terraza",
    metrosCuadrados: 90,
    description:
      "Contamos con 6 Departamentos en villas por cada módulo de 90 m2 o 110 m2.",
    imagenCard:
      "https://maxproperties.com.mx/wp-content/uploads/2021/09/paam.webp",
    embededMapSrc:
      "https://maps.google.com/maps?width=945&amp;height=512&amp;hl=en&amp;q=Tres Patios&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed",
  },

  {
    id: 6,
    desarrollo: "TERRENO DE INVERSION",
    tipo: "terreno",
    ubicacion: "Puerto Morelos",
    route: "properties/Playa_del_Carmen/Tres_Patios",
    route2: "Playa_del_Carmen/Tres_Patios",
    precio: 2500000,
    habitaciones: 3,
    baños: 2,
    sala: "Sala",
    cocina: "Cocina",
    comedor: "Comedor",
    closet: "Closets",
    terraza: "Terraza",
    metrosCuadrados: 90,
    description:
      "Contamos con 6 Departamentos en villas por cada módulo de 90 m2 o 110 m2.",
    imagenCard:
      "https://maxproperties.com.mx/wp-content/uploads/2021/09/paam.webp",
    embededMapSrc:
      "https://maps.google.com/maps?width=945&amp;height=512&amp;hl=en&amp;q=Tres Patios&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed",
  },
];

export const allProperties = [
 
  {
    id: 1,
    desarrollo: "Tres Patios",
    tipo: "Departamento",
    ubicacion: "Playa del Carmen",
    route: "properties/Playa_del_Carmen/Tres_Patios",
    route2: "Playa_del_Carmen/Tres_Patios",
    routeUnit_1: "Tres_Patios/Villa_90m2",
    routeUnit_2: "Tres_Patios/Villa_110m2",
    precio: 2500000,
    habitaciones: 3,
    baños: 2,
    sala: "Sala",
    cocina: "Cocina",
    comedor: "Comedor",
    closet: "Closets",
    terraza: "Terraza",
    metrosCuadrados: 90,
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
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(10).jpg?alt=media&token=7efd1f6e-2d8b-4f9c-bb6d-a6e5d1eef2f3"

    ],
    unit_1: {
      unit_1_Title: "Departamento en villa de 90 m²",
      unit_1_description:
        "Contamos con 6 Departamentos en villas por cada módulo de 90 m² y/o 110 m²",
      unit_1_precio: 4780000,
      unit_1_amenidades: 
        {
          amenidad_1: "3 Recámaras",
          amenidad_2: "Sala",
          amenidad_3: "Comedor",
          amenidad_4: "Closets",
          amenidad_5: "2 Baños",
          amenidad_6: "Cocina",
          amenidad_7: "Terraza",
          amenidad_8: "Flex",
        },
      
      unit_1_imagenes_A: [
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(1).jpg?alt=media&token=287c7669-d129-47d1-96e0-1f714dfa5047",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(2).jpg?alt=media&token=4b211425-4e1a-4157-a49e-a904589bfbfa",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(3).jpg?alt=media&token=b75ef34d-332f-4aa4-bf01-c69e0c8ac28b",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(4).jpg?alt=media&token=12c0d8ca-73c0-49b8-b922-1e8dc544f8f7",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(5).jpg?alt=media&token=833f91d7-55af-4dea-bd0a-1a288b7900e1",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(6).jpg?alt=media&token=2fd03751-007d-47df-91fa-8dcbb727bc36",
      ],
      unit_1_imagenes_B: [
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(1).jpg?alt=media&token=287c7669-d129-47d1-96e0-1f714dfa5047",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(2).jpg?alt=media&token=4b211425-4e1a-4157-a49e-a904589bfbfa",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(3).jpg?alt=media&token=b75ef34d-332f-4aa4-bf01-c69e0c8ac28b",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(4).jpg?alt=media&token=12c0d8ca-73c0-49b8-b922-1e8dc544f8f7",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(5).jpg?alt=media&token=833f91d7-55af-4dea-bd0a-1a288b7900e1",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FPlaya_del_Carmen%2FTres_Patios%2FTRESPATIOS%20(6).jpg?alt=media&token=2fd03751-007d-47df-91fa-8dcbb727bc36",
      ],
    },

    unit_2_Title: "",
  },
  {
    id: 2,
    desarrollo: "ATHIMAR",
    nickName: "Cozumel Luxury Living",
    subTitle: "UN PROYECTO DONDE EL LUJO Y EL CONFORT PREDOMINAN EN CADA RINCÓN",
    tipo: "Departamento",
    ubicacion: "Cozumel",
    route: "properties/Cozumel/Athimar_Cozumel",
    route2: "Cozumel/Athimar_Cozumel",
    routeUnit_1: "Athimar_Cozumel/One_Bedroom",
    routeUnit_2: "Athimar_Cozumel/App2",
    precio: 16999,
    habitaciones: "unoAtresRooms",
    baños:"unoAtresBaños",
    metrosCuadrados: "m2Athimar",
    sala: "Sala",
    cocina: "Cocina",
    comedor: "Comedor",
    closet: "Closets",
    terraza: "Terraza",
    metrosCuadrados: 90,
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
      "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_COCINA.jpg?alt=media&token=68e80fbd-2392-40ab-86c4-78a2edabcd5c"
      

    ],
    unit_1: {
      //ONE BEDROOM 
      unit_1_Title: "1 Recámara 69.94m²",
      unit_1_description:
        "Contamos con 25 unidades conformadas por 8 tipologías diferentes entre las que podrás encontrar departamentos de 1 a 3 recámaras, con terraza, rooftop o jacuzzi e increíbles amenidades.",
      unit_1_precio: 4780000,
      unit_1_amenidades: 
        {
          amenidad_1: "1 Recámara",
          amenidad_2: "1 Baño",
          amenidad_3: "Sala",
          amenidad_4: "Cocina",
          amenidad_5: "Comedor",
          amenidad_6: "Terraza",
          amenidad_7: "Zona de Servicio",
          // amenidad_8: "",
        },
      
      unit_1_imagenes_A: [
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_POOL%20(1).jpg?alt=media&token=3bfcf350-2932-4067-9450-e45c8c751db7",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_POOL%20TERRACE.jpg?alt=media&token=1689a08a-5057-409f-b19e-8d0cfc83078d",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_RECAMARA%20DEP%20TIPO.jpg?alt=media&token=d39d5acf-793f-4b29-9ad0-0325831b4bd5",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_RECAMARA%20DEP%20TIPO2.jpg?alt=media&token=5bec04b9-311c-4de5-b079-8eea9a4b14a2",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_SALA%20COMEDOR%20COCINA%20DEPT08.jpg?alt=media&token=1f84bca6-8e13-41b2-aa81-6f8fe894d9a7",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_SALA%20COMEDOR%20COCINA%20PH.jpg?alt=media&token=2465d64c-861f-4a10-9749-3277ec5da133",     
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_BA%C3%91O.jpg?alt=media&token=76843091-6759-42c1-b11f-af22666b0a47",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_COCINA.jpg?alt=media&token=68e80fbd-2392-40ab-86c4-78a2edabcd5c"
      ],
      unit_1_imagenes_B: [
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_POOL%20(1).jpg?alt=media&token=3bfcf350-2932-4067-9450-e45c8c751db7",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_POOL%20TERRACE.jpg?alt=media&token=1689a08a-5057-409f-b19e-8d0cfc83078d",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_RECAMARA%20DEP%20TIPO.jpg?alt=media&token=d39d5acf-793f-4b29-9ad0-0325831b4bd5",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_RECAMARA%20DEP%20TIPO2.jpg?alt=media&token=5bec04b9-311c-4de5-b079-8eea9a4b14a2",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_SALA%20COMEDOR%20COCINA%20DEPT08.jpg?alt=media&token=1f84bca6-8e13-41b2-aa81-6f8fe894d9a7",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_SALA%20COMEDOR%20COCINA%20PH.jpg?alt=media&token=2465d64c-861f-4a10-9749-3277ec5da133",     
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_BA%C3%91O.jpg?alt=media&token=76843091-6759-42c1-b11f-af22666b0a47",
        "https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/allProperties%2FAthimar_Cozumel%2FATHIMAR_COCINA.jpg?alt=media&token=68e80fbd-2392-40ab-86c4-78a2edabcd5c"
      ],
    },

    unit_2_Title: "",
  },
  {
    id: 3,
    desarrollo: "Vidaraa",
    tipo: "Departamento",
    ubicacion: "Tulum",
    precio: 1800000,
    habitaciones: 2,
    baños: 1,
    metrosCuadrados: 90,
    imagenCard:
      "https://maxproperties.com.mx/wp-content/uploads/2022/05/lik_orga_inicio.png",
  },
  {
    id: 4,
    desarrollo: "Chanolandia",
    tipo: "Casa",
    ubicacion: "Cancun",
    precio: 2800000,
    habitaciones: 3,
    baños: 2,
    metrosCuadrados: 150,
    imagenCard:
      "https://maxproperties.com.mx/wp-content/uploads/2022/09/vidara_inicio.png",
  },
  {
    id: 5,
    desarrollo: "Parque Zama",
    tipo: "Departamento",
    ubicacion: "Tulum",
    precio: 1500000,
    habitaciones: 1,
    baños: 1,
    metrosCuadrados: 60,
    imagenCard:
      "https://maxproperties.com.mx/wp-content/uploads/2022/07/BECAN_INDES.webp",
  },
  {
    id: 6,
    desarrollo: "Paam Cheel",
    tipo: "Departamento",
    ubicacion: "Cancun",
    precio: 1500000,
    habitaciones: 1,
    baños: 1,
    metrosCuadrados: 60,
    imagenCard:
      "https://maxproperties.com.mx/wp-content/uploads/2023/05/yax.png",
  },
  {
    id: 7,
    desarrollo: "Fulano 7",
    tipo: "Departamento",
    ubicacion: "Cozumel",
    precio: 900000,
    habitaciones: 1,
    baños: 1,
    metrosCuadrados: 60,
    imagenCard:
      "https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 8,
    desarrollo: "Fulano 8",
    tipo: "Departamento",
    ubicacion: "Playa del Carmen",
    precio: 800000,
    habitaciones: 1,
    baños: 1,
    metrosCuadrados: 60,
    imagenCard:
      "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 9,
    desarrollo: "Fulano 9",
    tipo: "Departamento",
    ubicacion: "Merida",
    precio: 1500000,
    habitaciones: 1,
    baños: 1,
    metrosCuadrados: 60,
    imagenCard:
      "https://images.pexels.com/photos/36362/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];


