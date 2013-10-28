TaskManager.Faye = function(user_attr, store) {
  var faye = new Faye.Client('http://localhost:9292/faye');
  faye.subscribe('/tasks/update', function (data) {
    if (data.task.owner == user_attr.id || data.task.performer == user_attr.id) {
      store.push('task', data.task);
    } else {
      if (store.getById('task', data.task.id)) {
        store.getById('task', data.task.id).deleteRecord();
      }
    }
  });
  faye.subscribe('/tasks/new', function (data) {
    if (data.task.owner == user_attr.id || data.task.performer == user_attr.id) {
      var newTask = store.push('task', data.task);
    }
  });
  faye.subscribe('/tasks/delete', function (data) {
    if (store.getById('task', data.task.id)) {
      store.getById('task', data.task.id).deleteRecord();
    }
  });
};