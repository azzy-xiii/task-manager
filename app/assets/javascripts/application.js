// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require handlebars
//= require ember
//= require ember-data
//= require_self
//= require task_manager

// for more details see: http://emberjs.com/guides/application/
TaskManager = Ember.Application.create();

TaskManager.ApplicationAdapter = DS.RESTAdapter.extend({
  namespace: 'api/v1'
});

TaskManager.ApplicationSerializer = DS.RESTSerializer.extend({
  normalize: function(type, property, hash) {
    var normalized = {}, normalizedProp;

    for (var prop in hash) {
      if (prop.substr(-3) === '_id') {
        // belongsTo relationships
        normalizedProp = prop.slice(0, -3);
      } else if (prop.substr(-4) === '_ids') {
        // hasMany relationship
        normalizedProp = Ember.String.pluralize(prop.slice(0, -4));
      } else {
        // regualarAttribute
        normalizedProp = prop;
      }

      normalizedProp = Ember.String.camelize(normalizedProp);
      normalized[normalizedProp] = hash[prop];
    }

    return this._super(type, property, normalized);
  }
});
//= require_tree .
