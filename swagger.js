const express = require('express');
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');
const swaggerDocument = yaml.load('./swagger.yaml');

const router = express.Router();

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = router;