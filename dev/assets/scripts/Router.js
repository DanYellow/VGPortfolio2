var $ = require('jquery');
var Backbone = require('backbone');

Backbone.$ = $;

var ProjectViewClass            = require('./project/ProjectView');
var projectView;

var ProjectsListItemClass            = require('./projectsListItem/ProjectsListItem');
var ProjectsListItem;

var ProjectsListCollectionClass = require('./projectsList/ProjectsListCollection');
var projectsListCollection = new ProjectsListCollectionClass();


module.exports = Backbone.Router.extend({

  routes: {
    "":                 "projects",
    "projects":                 "projects",

    ":id":        "project",
    "project/:id":        "project"
  },

  projects: function(){
    projectsListCollection.fetch({
      success: function (datas) {
        ProjectsListItem = new ProjectsListItemClass({ el: $('#portfolio #projects-list'), model: datas.get(0) });
        for (var i = 0; i < datas.length; i++) {

        };

      }
    });
  },

  project: function(id) {
    projectsListCollection.fetch({
      success: function (datas) {
        projectView = new ProjectViewClass({ el: $('#portfolio figure'), model: datas.get(id) });
      }
    });
  }
});