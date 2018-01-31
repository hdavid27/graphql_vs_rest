var express = require('express');
var rekuire = require('rekuire');
var Promise = require('bluebird');
var _ = require('lodash');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var fs = require('fs');
var path = require('path');

var configuration = rekuire('configuration');
var logger = rekuire('utils/LoggerProvider').getLogger();



//Prepare server
var app = express();

app.use(cookieParser());
app.use(morgan('common'));

// Setup routes (base entry point)
app.use('/rest', require('./Rest_API/routes/restRoutes'));
app.use('/graphql', require('./GraphQL_API/routes/graphQLRoutes'));

// Start listening
app.listen(configuration.getServerPort());
logger.info('API is running on port ' + configuration.getServerPort());

