const express = require('express');
const swaggerUi = require('swagger-ui-express');
//const swaggerJsDoc = require('swagger-jsdoc');
const { swaggerDocs } = require('./swagger');
//const swaggerDocument = require('./swagger-output.json');
const flightRouter = require('./routes/flights');

const app = express();
const port = 3001;

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'FSE API',
            version: '1.0.0',
            description: 'Flight Search Engine API'
        }
    },
    apis: ['./routes/*.js']
};

//const specs = swaggerJsDoc(options);

app.use(express.json());
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/flights', flightRouter);

app.listen(port, () => {
    console.log(`Server Listen On Port: ${port}`);
    swaggerDocs(app, port);
});
