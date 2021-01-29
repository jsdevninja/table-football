const router = require("express").Router();
const teams = require("../controllers/team.controller.js");

router.post("/", teams.create);
router.get("/", teams.findAll);

module.exports = router;
