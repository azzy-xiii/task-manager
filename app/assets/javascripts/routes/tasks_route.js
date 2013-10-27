TaskManager.TasksRoute = Ember.Route.extend({
  model: function() {
      return this.store.find('task');
    },

  actions: {
    edit: function(tasks) {
      this.controllerFor('tasks.modal').edit(tasks);
      this.send('openModal', 'tasks.modal');
    },
    create: function() {
      this.controllerFor('tasks.modal').create();
      this.send('openModal', 'tasks.modal');
    }

  }

})