const db = require("../models");
const Score = db.scores;
const Team = db.teams;
const Op = db.Sequelize.Op;

const generateTeamStatistics = (records, teamId) => {
  let wins = 0,
    losses = 0,
    draw = 0,
    gf = 0,
    ga = 0;
  records.forEach((d) => {
    if (d.score1 === d.score2) draw++;
    if (d.homeTeamId === teamId) {
      if (d.score1 > d.score2) wins++;
      else losses++;
      gf += d.score1;
      ga += d.score2;
    } else {
      if (d.score1 < d.score2) wins++;
      else losses++;
      gf += d.score2;
      ga += d.score1;
    }
  });
  const total = wins + losses + draw;
  return {
    wins,
    losses,
    draw,
    ratio: total ? wins / total : 0,
    gf,
    ga,
    gd: gf - ga,
  };
};

exports.create = (req, res) => {
  const { score1, score2, homeTeamId, awayTeamId } = req.body;
  // Validate request
  if (!homeTeamId || !awayTeamId) {
    res.status(400).send({
      message: "Score details are missing!",
    });
    return;
  }

  if (homeTeamId === awayTeamId) {
    res.status(400).send({
      message: "Team can't be matched with own team!",
    });
    return;
  }

  // Create a score
  const score = {
    score1,
    score2,
    homeTeamId,
    awayTeamId,
  };
  Score.create(score)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Unknown error occured.",
      });
    });
};

exports.update = (req, res) => {
  const { scoreId } = req.params;
  const { score1, score2 } = req.body;
  // Validate request

  Score.update(
    { score1, score2 },
    {
      where: { id: scoreId },
      returning: true,
    }
  )
    .then((data) => {
      if (data[0] === 1) res.send(data[1][0]);
      else res.status(400).send({ message: "Match not found!" });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Unknown error occured.",
      });
    });
};

exports.getTeamStatistics = (req, res) => {
  const teamId = parseInt(req.params.teamId);
  Score.findAll({
    where: {
      [Op.or]: [{ homeTeamId: teamId }, { awayTeamId: teamId }],
    },
  })
    .then((data) => {
      const result = generateTeamStatistics(data, teamId);
      res.send({ statistic: result, data });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Unknown error occured.",
      });
    });
};

exports.getTeamVsStatistics = (req, res) => {
  const teamId1 = parseInt(req.params.teamId1);
  const teamId2 = parseInt(req.params.teamId2);
  Score.findAll({
    where: {
      [Op.or]: [
        { [Op.and]: [{ homeTeamId: teamId1 }, { awayTeamId: teamId2 }] },
        { [Op.and]: [{ homeTeamId: teamId2 }, { awayTeamId: teamId1 }] },
      ],
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Unknown error occured.",
      });
    });
};

exports.getAllStatistics = (req, res) => {
  Promise.all([Team.findAll(), Score.findAll()])
    .then((data) => {
      const teams = data[0];
      const scores = data[1];
      let result = [];
      teams.forEach((t) => {
        const records = scores.filter(
          (s) => s.homeTeamId === t.id || s.awayTeamId === t.id
        );
        result.push({
          team: t,
          statistic: generateTeamStatistics(records, t.id),
        });
      });
      result = result.sort((a, b) => {
        if (a.statistic.ratio > b.statistic.ratio) return -1;
        else if (a.statistic.ratio < b.statistic.ratio) return 1;
        else if (a.statistic.gd > b.statistic.gd) return -1;
        else if (a.statistic.gd < b.statistic.gd) return 1;
        return 0;
      });
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Unknown error occured.",
      });
    });
};
