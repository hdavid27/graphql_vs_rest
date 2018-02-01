var rekuire = require('rekuire');
var _ = require('lodash');

var configuration = rekuire('configuration');
var logger = rekuire('utils/LoggerProvider').getLogger();
var db = rekuire('database/dbconfig');

var GraphQLRoutesMiddleware = function() {

    return {

    };

};


module.exports = new GraphQLRoutesMiddleware();