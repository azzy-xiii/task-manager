TaskManager.ModalController = Em.ObjectController.extend({
  edit: function(record) {
    record.one('didUpdate', this, function() {
      this.send('close');
    });

    this.set('model', record);
  },

  create: function() {
    var task = this.store.createRecord('task');

    task.on('didCreate', this, function() {
      this.send('close');
    });

    this.set('model', task);
  },

  save: function() {
    this.get('model.transaction').commit();
  },

  close: function() {
    var model = this.get('model'),
        transaction = model.get('transaction');

    if (transaction) transaction.rollback();
    if (model.get('errors')) model.set('errors', null);

    this.send("closeModal");
  },

  shouldDisableSubmit: function() {
    return !this.get('isDirty') || this.get('isSaving');
  }.property('isDirty', 'isSaving')
});