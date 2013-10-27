TaskManager.TaskFormView = Em.View.extend({
  tagName: 'form',
  classNames: 'modal fade in form-custom-field-modal'.w(),
  didInsertElement: function() {
    return this.$().modal('show');
  },
  willDestroyElement: function() {
    return this.$().modal('hide');
  }
});