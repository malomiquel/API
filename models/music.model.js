const sequelizeMusic = (sequelize, Sequelize) => {
  const Music = sequelize.define("music", {
    title: {
      type: Sequelize.STRING,
    },
    artist: {
      type: Sequelize.STRING,
    },
    year: {
      type: Sequelize.INTEGER,
    },
    // cover: {
    //   type: Sequelize.BLOB("long"),
    // },
  });
  return Music;
};



export default sequelizeMusic;