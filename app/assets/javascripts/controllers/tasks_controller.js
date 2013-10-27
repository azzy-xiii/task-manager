TaskManager.TasksController = Ember.ArrayController.extend({
  sortProperties: ['created_at'],
  sortPropertyAscending: true,
  actions: {
    sort: function(property) {
      this.set('sortProperties', [property]);
    }
  }

});