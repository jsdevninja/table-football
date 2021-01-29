module.exports = (sequelize, Sequelize) => {
  const Test = sequelize.define("test", {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
  });

  return Test;
};
