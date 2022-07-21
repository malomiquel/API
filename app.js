import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./models/sequelize.js";
import routingMusic from "./routes/music.routes.js";
import swaggerSpec from "./config/swagger.config..js";
import swaggerUi from "swagger-ui-express";
import routingAuth from "./routes/auth.routes.js"

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

const app = express();

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sync database
db.sequelize
.sync({ force: true })
.then(() => console.log("Database synced"))

app.use("/documentations", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

routingMusic(app);
routingAuth(app);
        
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
