const databaseConfig = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "Malo1806",
  DB: "musics",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

export default databaseConfig;