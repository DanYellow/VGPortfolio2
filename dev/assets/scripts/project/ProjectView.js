var $ = require('jquery');
var Backbone = require('backbone');

Backbone.$ = $;

var ProjectTpl = require('../tpl/ProjectTpl.hbs');

module.exports = Backbone.View.extend({

  initialize: function () {
        var _this = this;
        console.log('projectView');
        // this.model.attributes.images

        this.render();
    },

    render: function () {
        //this.$el.html(ProjectTpl(this.model.attributes));
        console.log("model : ", this.model.attributes);
        this.$el.html(ProjectTpl(this.model.attributes));
        /*this.$el.removeAttr('class').addClass(this.model.attributes.category);*/

        return this;
    },
});