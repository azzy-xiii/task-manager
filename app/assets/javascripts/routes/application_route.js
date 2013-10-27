TaskManager.ApplicationRoute = Em.Route.extend({
  events: {
    openModal: function(modal) {
      this.render(modal, {
        outlet: 'modal'
      });
    },

    closeModal: function() {
      TaskManager.animateModalClose().then(function() {
        this.render('empty', {
          outlet: 'modal'
        });
      }.bind(this));
    }
  }
});