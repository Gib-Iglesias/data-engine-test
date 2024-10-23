const Flight = require('../database/Flight');

const getAllFlights = (filterParams) => {
    console.log('Check GET ALL');
    try {
        const allFlights = Flight.getAllFlights(filterParams);
        return allFlights;
        } catch (error) {
            throw error;
        }
    };

const postOneFlight = (airline, flight_num) => {
    console.log('Check GET ONE');
    try {
        const flight = Flight.postOneFlight(airline, flight_num);
        return flight;
        } catch (error) {
            throw error;
        }
    };

module.exports = { getAllFlights, postOneFlight };
