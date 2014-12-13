var $ = require('jquery');
var Backbone = require('backbone');

Backbone.$ = $;

var ProjectTpl = require('../tpl/ProjectTpl.hbs');

module.exports = Backbone.View.extend({

  initialize: function () {
        var _this = this;
        this.render();
    },

    render: function () {
        this.$el.html(ProjectTpl(this.model.attributes));

        return this;
    },
});