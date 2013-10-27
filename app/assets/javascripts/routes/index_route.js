TaskManager.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('tasks');
  }
})