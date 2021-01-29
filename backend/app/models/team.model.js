module.exports = (sequelize, Sequelize) => {
  const Team = sequelize.define("teams", {
    name: {
      type: Sequelize.STRING,
    },
    info: {
      type: Sequelize.STRING,
    },
  });

  return Team;
};
