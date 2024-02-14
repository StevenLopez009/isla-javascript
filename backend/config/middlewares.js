module.exports = [
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];

// Configuración de los middlewares y CORS
module.exports.settings = {
  cors: {
    enabled: true,
    origin: ["*"],
    headers: ["*"],
  },
};
