import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import bodyParser from "body-parser";
import db from "./models/sequelize.js";

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Sync database
db.sequelize
  .sync({ force: true })
  .then(() => console.log("Database synced"))

// definition information API
const swaggerDefinition = {
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
      description: "Serveur de développement",
    },
  ],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ["./*.js"],
};

const swaggerSpec = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Router musics
let musicRouter = express.Router();

/**
 * @swagger
 * /musics:
 *   get:
 *     description: Retourne la liste des musiques
 *     responses:
 *      200:
 *        description: Liste des musiques
 */

musicRouter.get("/all", (req, res) => {
  res.send("All musics");
});

// musicRouter
//   .route("/:id")
//   .get((req, res) => {
//     res.send("Music with id " + req.params.id);
//   })
//   .put((req, res) => {
//     res.send("Put music with id " + req.params.id);
//   })
//   .delete((req, res) => {
//     res.send("Delete music with id " + req.params.id);
//   });

// musicRouter.route("/add").post((req, res) => {
//   res.send("Add music");
// });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
