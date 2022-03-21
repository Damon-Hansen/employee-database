const routes = require('express').Router();
const apiRoutes = require('./apiRoutes');

routes.use('/api',  apiRoutes)

module.exports = routes;