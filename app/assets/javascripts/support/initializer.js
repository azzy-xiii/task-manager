Ember.Application.initializer({
  name: "Add users",

  initialize: function(container, application) {
    var attributes = $('meta[name="current-user"]').attr('content');
    var store = container.lookup('store:main');
    var obj = eval("(" + attributes + ')');
    users = store.find('user');
    container.lookup('controller:users').set('content', users);
    TaskManager.Faye(obj, store);
  }
});