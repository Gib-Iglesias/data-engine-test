const Flight = require('../database/Flight');

const getAllFlights = (filterParams) => {
    try {
        const allFlights = Flight.getAllFlights(filterParams);
        return allFlights;
        } catch (error) {
            throw error;
        }
    };

const postOneFlight = (airline, flight_num) => {
    try {
        const flight = Flight.postOneFlight(airline, flight_num);
        return flight;
        } catch (error) {
            throw error;
        }
    };

module.exports = { getAllFlights, postOneFlight };
