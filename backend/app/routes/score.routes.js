const router = require("express").Router();
const scores = require("../controllers/score.controller.js");

/**
 * @swagger
 *  components:
 *    schemas:
 *      Score:
 *        type: object
 *        required:
 *          - score1
 *          - score2
 *          - homeTeamId
 *          - awayTeamId
 *        properties:
 *          id:
 *            type: integer
 *            description: The auto-generated id of the score.
 *          score1:
 *            type: integer
 *            description: Score of home team
 *          score2:
 *            type: integer
 *            description: Score of away team
 *          homeTeamId:
 *            type: string
 *            description: Home team ID(foreign key to Team)
 *          awayTeamId:
 *            type: string
 *            description: Away team ID(foreign key to Team)
 *          createdAt:
 *            type: string
 *            format: date
 *            description: The date of the record creation.
 *          updatedAt:
 *            type: string
 *            format: date
 *            description: The date of the record creation.
 *        example:
 *           score1: 10
 *           score2: 8
 *           homeTeamId: 1
 *           awayTeamId: 2
 */

/**
 * @swagger
 * tags:
 *  name: Scores
 *  description: API to manage scores.
 */

/**
 * @swagger
 * /scores/:
 *   post:
 *     summary: Create a new score record between two teams
 *     tags: [Scores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               score1:
 *                 type: integer
 *                 rerquired: true
 *                 description: Score of home team
 *               score2:
 *                 type: integer
 *                 rerquired: true
 *                 description: Score of away team
 *               homeTeamId:
 *                 type: integer
 *                 required: true
 *                 description: Home team ID(foreign key to Team)
 *               awayTeamId:
 *                 type: integer
 *                 required: true
 *                 description: Away team ID(foreign key to Team)
 *     responses:
 *       "200":
 *         description: Created match detail
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Score'
 *       "400":
 *         description: Score details are missing or Team can't be matched with own team!
 *       "500":
 *         description: Error
 */
router.post("/", scores.create);

/**
 * @swagger
 * /scores/{teamId}:
 *   get:
 *     summary: Shows statistics of the team
 *     tags: [Scores]
 *     parameters:
 *       - in: path
 *         name: teamId
 *         schema:
 *           type: integer
 *         required: true
 *         description: Team ID(foreign key to Team)
 *     responses:
 *       "200":
 *         description: Team statistics info
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       "500":
 *         description: Error
 */
router.get("/:teamId", scores.getTeamStatistics);

/**
 * @swagger
 * /scores/{teamId1}/{teamId2}:
 *   get:
 *     summary: Shows the confrontation statistics between 2 teams
 *     tags: [Scores]
 *     parameters:
 *       - in: path
 *         name: teamId1
 *         schema:
 *           type: integer
 *         required: true
 *         description: Team1 ID(foreign key to Team)
 *       - in: path
 *         name: teamId2
 *         schema:
 *           type: integer
 *         required: true
 *         description: Team2 ID(foreign key to Team)
 *     responses:
 *       "200":
 *         description: Team statistics info
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Score'
 *       "500":
 *         description: Error
 */
router.get("/:teamId1/:teamId2", scores.getTeamVsStatistics);

/**
 * @swagger
 * /scores/:
 *   get:
 *     summary: Shows statistics for all teams
 *     tags: [Scores]
 *     responses:
 *       "200":
 *         description: Team statistics info
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       "500":
 *         description: Error
 */
router.get("/", scores.getAllStatistics);

module.exports = router;
