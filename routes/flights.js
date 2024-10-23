const express = require('express');
const flightController = require('../controllers/flights');

const router = express.Router();

/**
 * @openapi
 * /api/all-flights:
 *   get:
 *     tags:
 *       - Flights
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "./schemas/flights"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 */
router.get('/all-flights', flightController.getAllFlights);

/**
 * @openapi
 * /api/one-flight:
 *   post:
 *     tags:
 *       - Flights
 *     parameters:
 *       - in: query
 *         name: airline
 *         schema:
 *           type: string
 *         description: The Airline of One Flight
 *       - in: query
 *         name: flight_num
 *         schema:
 *           type: number
 *         description: The Number of One Flight
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "./schemas/flights"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 */
router.post(`/one-flight`, flightController.postOneFlight);

module.exports = router;
