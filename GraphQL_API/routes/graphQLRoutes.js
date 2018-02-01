var express = require('express');
var rekuire = require('rekuire');

var bodyParser = require('body-parser');
var configuration = rekuire('configuration');
var logger = rekuire('utils/LoggerProvider').getLogger();

var RoutesMiddleware = require('./middleware/graphQLRoutesMiddleware');

var router = express.Router();





module.exports = router;