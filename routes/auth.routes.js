import verifySignUp from "../middlewares/verifySignUp.js";
import controller from "../controllers/auth.controller.js";
import express from "express";

const router = express.Router();

const routingAuth = (app) => {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  router.post(
    "/signup",
    [verifySignUp.verifyDouble],
    controller.signUp
  );
  router.post("/signin", controller.signIn);
  app.use("/auth", router)
}

export default routingAuth;