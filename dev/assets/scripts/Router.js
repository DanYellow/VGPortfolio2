var $ = require('jquery');
var Backbone = require('backbone');

Backbone.$ = $;

var ProjectViewClass            = require('./project/ProjectView');
var projectView;

var ProjectsListCollectionClass = require('./projectsList/ProjectsListCollection');
var projectsListCollection = new ProjectsListCollectionClass();

console.log(projectsListCollection)

module.exports = Backbone.Router.extend({

  routes: {
    "":                 "projects",
    "projects":                 "projects",

    ":id":        "project",
    "project/:id":        "project"
  },

  projects: function(){
    console.log('init');
  },

  project: function(id) {
    projectsListCollection.fetch({
      success: function (datas) {
        projectView = new ProjectViewClass({ el: $('#portfolio figure'), model: datas.get(id) });
      }
    });
  }
});