var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var Router = require('./node_modules/Router');


var router = new Router();
Backbone.history.start();