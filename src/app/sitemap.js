export default function sitemap() {
  const currentDate = new Date();

  // Lógica para establecer fechas dinámicamente
  const dynamicDate = (daysAgo) =>
    new Date(currentDate - daysAgo * 24 * 60 * 60 * 1000);

  const routes = [
    //NAVBAR
    {
      url: "https://nlb-realestate.com/",
      lastModified: dynamicDate(30),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://nlb-realestate.com/properties",
      lastModified: dynamicDate(29),
      changeFrequency: "yearly",
      priority: 0.99,
    },
    {
      url: "https://nlb-realestate.com/properties/Playa-del-Carmen",
      lastModified: dynamicDate(28),
      changeFrequency: "yearly",
      priority: 0.98,
    },
    {
      url: "https://nlb-realestate.com/properties/Playa-del-Carmen/Tres-Patios",
      lastModified: dynamicDate(29),
      changeFrequency: "yearly",
      priority: 0.96,
    },
    {
      url: "https://nlb-realestate.com/properties/Playa-del-Carmen/Tres-Patios/Villa-90m2",
      lastModified: dynamicDate(29),
      changeFrequency: "yearly",
      priority: 0.96,
    },
    {
      url: "https://nlb-realestate.com/properties/Playa-del-Carmen/Tres-Patios/Villa-110m2",
      lastModified: dynamicDate(29),
      changeFrequency: "yearly",
      priority: 0.96,
    },
    {
      url: "https://nlb-realestate.com/properties/Playa-del-Carmen/Tres-Patios/Penthouse-90m2",
      lastModified: dynamicDate(29),
      changeFrequency: "yearly",
      priority: 0.96,
    },
    {
      url: "https://nlb-realestate.com/properties/Playa-del-Carmen/Tres-Patios/Penthouse-110m2",
      lastModified: dynamicDate(29),
      changeFrequency: "yearly",
      priority: 0.96,
    },
    {
      url: "https://nlb-realestate.com/properties/Tulum",
      lastModified: dynamicDate(27),
      changeFrequency: "yearly",
      priority: 0.97,
    },
    {
      url: "https://nlb-realestate.com/properties/Cancun",
      lastModified: dynamicDate(26),
      changeFrequency: "yearly",
      priority: 0.96,
    },
    {
      url: "https://nlb-realestate.com/properties/Cozumel",
      lastModified: dynamicDate(25),
      changeFrequency: "yearly",
      priority: 0.95,
    },
    {
      url: "https://nlb-realestate.com/properties/Puerto-Morelos",
      lastModified: dynamicDate(24),
      changeFrequency: "yearly",
      priority: 0.94,
    },

    //FAQ
    {
      url: "https://nlb-realestate.com/properties/Puerto-Morelos",
      lastModified: dynamicDate(24),
      changeFrequency: "yearly",
      priority: 0.94,
    },
  ];

  return routes;
 
}


