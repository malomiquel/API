import db from "../models/sequelize.js";
import config from "../config/auth.config.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const User = db.users;
const Op = db.Sequelize.Op;

const signUp = (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  })
    .then((user) => {
      res.status(200).send({ message: "User was successfully create" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

const signIn = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }
      const token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

const authentification = {
  signUp,
  signIn,
};

export default authentification;
