const db = require("../models");
const Team = db.teams;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const { name, info } = req.body;
  // Validate request
  if (!name || !info) {
    res.status(400).send({
      message: "Team name and info can't be empty!",
    });
    return;
  }

  // Create a team
  const team = {
    name,
    info,
  };
  Team.create(team)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Unknown error occured.",
      });
    });
};

exports.findAll = (req, res) => {
  Team.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Unknown error occured.",
      });
    });
};
