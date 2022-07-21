import swaggerJSDoc from "swagger-jsdoc";

// definition information API
const swaggerDefinition = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Documentation bibliothèque musiques API",
      version: "1.0.0",
      description:
        "Ceci est la documentation du back-end d'une bibliothèque de musiques",
    },
    servers: [
      {
        url: "http://localhost:8000",
      },
    ],
  },
  apis: ["./routes/routes.js"],
};

const swaggerSpec = swaggerJSDoc(swaggerDefinition);

export default swaggerSpec;
