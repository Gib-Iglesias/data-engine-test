
const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

/**
 * @openapi
 * components:
 *   schemas:
 *     Flight:
 *       type: object
 *       properties:
 *         origin:
 *           type: string
 *           example: PAR
 *         destination:
 *           type: string
 *           example: CAN
 *         airline:
 *           type: string
 *           example: 40
 *         flight_num:
 *           type: number
 *           example: 318
 */
const getAllFlights = (filterParams) => {
    try {
        let flights = DB.flights;
        if (filterParams.origin) {
            return DB.flights.filter((flight) =>
                flight.origin.toLowerCase().includes(filterParams.origin)
            );
        }
        return flights;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

const postOneFlight = (airline, flight_num) => {
    try {
        const flight = DB.flights.find((flight) => flight.airline === airline && flight.flight_num == flight_num);

        if (!flight) {
            throw {
                status: 400,
                message: `Can't find flight'`,
            };
        }

    return flight;
    } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { getAllFlights, postOneFlight };
