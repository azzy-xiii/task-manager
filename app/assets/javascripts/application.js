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

TaskManager.animateModalClose = function() {
  var promise = new Ember.RSVP.Promise(function(resolve, reject) {
    $('.modal.in').removeClass('in');
    $('.modal-backdrop.in').removeClass('in');
    setTimeout(function() {
    resolve();
      }, TaskManager.DEFAULT_CSS_TRANSITION_DURATION_MS);
  });
  return promise;
};

TaskManager.animateModalOpen = function() {
  var promise = new Ember.RSVP.Promise(function(resolve, reject) {
    $('.modal').addClass('in');
    $('.modal-backdrop').addClass('in');

    setTimeout(function() {
      resolve();
    }, TaskManager.DEFAULT_CSS_TRANSITION_DURATION_MS);
  });
  return promise;
};

Ember.Application.initializer({
  name: "Add users",

  initialize: function(container, application) {
    var attributes = $('meta[name="current-user"]').attr('content');
    var store = container.lookup('store:main');

    users = store.find('user');
    container.lookup('controller:users').set('content', users);
  }
});
//= require_tree .
