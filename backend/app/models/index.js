const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host: process.env.POSTGRES_HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: "0",

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.teams = require("./team.model.js")(sequelize, Sequelize);
db.scores = require("./score.model.js")(sequelize, Sequelize);

db.scores.belongsTo(db.teams, { foreignKey: "homeTeamId" });
db.scores.belongsTo(db.teams, { foreignKey: "awayTeamId" });

module.exports = db;
