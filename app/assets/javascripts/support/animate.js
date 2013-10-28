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