const flightsService = require('../services/flights');

const getAllFlights = (req, res) => {
    console.log('Check GET ALL');
    const { origin } = req.query;
    try {
    const allFlights = flightsService.getAllFlights({ origin });
    res.send({ status: "OK", data: allFlights });
    } catch (error) {
    res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const postOneFlight = (req, res) => {
    console.log('Check GET ONE');
    const {
    params: { airline, flight_num },
    } = req;

    if (!{ airline, flight_num }) {
    res.status(400).send({
        status: "FAILED",
        data: { error: "Parameters: 'airline & flight_num' can not be empty" },
    });
    return;
    }

    try {
    const flight = flightsService.postOneFlight(airline, flight_num);
    res.send({ status: "OK", data: flight });
    } catch (error) {
    res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { getAllFlights, postOneFlight }
