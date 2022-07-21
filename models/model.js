const sequelizeModel = (sequelize, Sequelize) => {
  const Music = sequelize.define("music", {
    title: {
      type: Sequelize.STRING,
    },
    artist: {
      type: Sequelize.STRING,
    },
  });
  return Music;
};

export default sequelizeModel;