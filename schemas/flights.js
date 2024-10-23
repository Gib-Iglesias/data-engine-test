const Joi = require('joi');

const origin = Joi.string();;
const destination = Joi.string();
const airline = Joi.string();
const flight_num = Joi.number().integer();

const getFlightSchema = Joi.object({
    origin: origin.required(),
    destination: destination.required(),
    airline: airline.required(),
    flight_num: flight_num.required(),
});

module.exports = { getFlightSchema }
