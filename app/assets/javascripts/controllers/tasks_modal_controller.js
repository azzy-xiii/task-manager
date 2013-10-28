TaskManager.TasksModalController = TaskManager.ModalController.extend({
  needs: 'users',

  actions: {
    edit: function(record) {
      record.on('didUpdate', this, function() {
        this.send('closeModal');
      });
      this.set('model', record);
    },

    save: function() {
      var task = this.get('model');
      task.set('state',this.current_state );
      console.log(this.assignee);
      task.set('performer',this.assignee);
      task.save();
    }
  },

  states: ['open', 'closed'],
  current_state: null,
  assignee: null
});