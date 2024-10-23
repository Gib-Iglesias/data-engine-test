const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
//const swaggerAutogen = require('swagger-autogen');

//const doc = {
//    info: {
//        title: 'FSE API',
//        description: 'Flight Search Engine API'
//    },
//    host: 'localhost:3001',
//    schemes: ['http']
//};

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'FSE API',
            version: '1.0.0',
            description: 'Flight Search Engine API'
        },
    },
    apis: ['./routes/*.js', './databases/flights.js']
};

//const outputFile = './swagger-output.json';
//const endpointsFiles = ['./routes/*.js']
const swaggerSpec = swaggerJsDoc(options);

const swaggerDocs = (app, port) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get('/api-docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });
    console.log(`Docs Available at: http://localhost:${port}/api-docs`);
}

//swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
//    require('./routes/*.js');
//});

module.exports = { swaggerDocs }
