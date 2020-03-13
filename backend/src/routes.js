const {Router} = require('express');
const JsonController = require('./controller/JsonController');

const routes = Router();

routes.post('/grade_rpc', JsonController.index);

module.exports = routes;