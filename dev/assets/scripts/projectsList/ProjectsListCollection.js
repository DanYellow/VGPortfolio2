var $ = require('jquery');
var Backbone = require('backbone');

Backbone.$ = $;

module.exports = Backbone.Collection.extend({
    url: "assets/scripts/api.json"
});