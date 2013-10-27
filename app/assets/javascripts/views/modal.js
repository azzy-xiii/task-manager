TaskManager.ModalView = Em.View.extend({
  layout: Em.Handlebars.compile("{{yield}}<div class=modal-backdrop></div>"),

  didInsertElement: function() {
    TaskManager.animateModalOpen();

    $('body').on('keyup.modal', function(event) {
      if (event.keyCode === 27) this.get('controller').send('close');
    }.bind(this));

    this.$('input[type=text]').first().focus();
  },

  willDestroyElement: function() {
    $('body').off('keyup.modal');
  }
});

TaskManager.ConfirmDeleteView = TaskManager.ModalView.extend();
TaskManager.TaskModalView = TaskManager.ModalView.extend({});