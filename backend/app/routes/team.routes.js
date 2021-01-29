const router = require("express").Router();
const teams = require("../controllers/team.controller.js");

/**
 * @swagger
 *  components:
 *    schemas:
 *      Team:
 *        type: object
 *        required:
 *          - name
 *          - info
 *        properties:
 *          id:
 *            type: integer
 *            description: The auto-generated id of the team.
 *          name:
 *            type: string
 *            description: The name of the team.
 *          info:
 *            type: string
 *            description: The information of the team.
 *          createdAt:
 *            type: string
 *            format: date
 *            description: The date of the record creation.
 *          updatedAt:
 *            type: string
 *            format: date
 *            description: The date of the record updation.
 *        example:
 *           name: Team1
 *           info: William Wang, Andy
 */

/**
 * @swagger
 * tags:
 *  name: Teams
 *  description: API to manage teams.
 */

/**
 * @swagger
 * /teams/:
 *   post:
 *     summary: Create a new team
 *     tags: [Teams]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 rerquired: true
 *                 description: Team name
 *               info:
 *                 type: string
 *                 required: true
 *                 description: Team info
 *     responses:
 *       "200":
 *         description: Created team
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Team'
 *       "400":
 *         description: Team name and info can't be empty!
 *       "500":
 *         description: Error
 */
router.post("/", teams.create);

/**
 * @swagger
 * /teams/:
 *   get:
 *     summary: List all teams
 *     tags: [Teams]
 *     responses:
 *       "200":
 *         description: The list of teams
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Team'
 *       "500":
 *         description: Error
 */
router.get("/", teams.findAll);

module.exports = router;
