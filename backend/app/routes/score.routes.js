const router = require("express").Router();
const scores = require("../controllers/score.controller.js");

router.post("/", scores.create);
router.get("/:teamId", scores.getTeamStatistics);
router.get("/:teamId1/:teamId2", scores.getTeamVsStatistics);
router.get("/", scores.getAllStatistics);

module.exports = router;
