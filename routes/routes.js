var express = require('express');
var rekuire = require('rekuire');
var configuration = rekuire('configuration');
var logger = rekuire('utils/LoggerProvider').getLogger();

var RoutesMiddleware = require('./middleware/routes');

var router = express.Router();

// Cross domain middleware, to support cross domain requests (if the API is in a different domain)
router.use(RoutesMiddleware.setupCrossDomain);

//Database transaction
router.use(RoutesMiddleware.transaction);

router.use('/', function(){

});

//unhandled request
router.use(RoutesMiddleware.unhandledRequest);


module.exports = router;