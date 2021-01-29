const express = require("express");

const router = express.Router();

const teams = require("./team.routes");
const scores = require("./score.routes");

router.use("/api/teams", teams);
router.use("/api/scores", scores);

module.exports = router;
