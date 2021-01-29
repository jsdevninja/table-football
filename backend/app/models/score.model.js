module.exports = (sequelize, Sequelize) => {
  const Score = sequelize.define("scores", {
    score1: {
      type: Sequelize.INTEGER,
    },
    score2: {
      type: Sequelize.INTEGER,
    },
  });

  return Score;
};
