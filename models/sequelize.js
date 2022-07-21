import Sequelize from "sequelize";
import databaseConfig from "../config/db.config.js";
import sequelizeMusic from "./music.model.js";
import sequelizeUSer from "./user.model.js";

const sequelize = new Sequelize(databaseConfig.DB, databaseConfig.USER, databaseConfig.PASSWORD, {
  host: databaseConfig.HOST,
  dialect: databaseConfig.dialect,

  pool: {
    max: databaseConfig.pool.max,
    min: databaseConfig.pool.min,
    acquire: databaseConfig.pool.acquire,
    idle: databaseConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = sequelizeUSer(sequelize, Sequelize)
db.musics = sequelizeMusic(sequelize, Sequelize);

export default db;