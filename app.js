const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const swaggerSpec = swaggerJsDoc({
  apis: ['./dist/api.yml'],
  swaggerDefinition: {
    basePath: '/',
  },
});

const app = express();

app.use('/dist', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.listen(3000)
