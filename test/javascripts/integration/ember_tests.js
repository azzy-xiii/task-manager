module("Ember Tests", {
  setup: function() {
    return TaskManager.reset();
  }
});

test("root view", function() {
  return visit("/").then(function() {
    return ok(exists("*"), "Found Some HTML");
  });
});

test("show tasks", function() {
  expect(2);
  visit("/").then(function(){
    tasks = TaskManager.TaskModel.FIXTURES;
    var i;
    for(i = 0; i < 2; i++) {
      ok(exists(tasks[i]), 'Task is shown');
    }
  })
});

test("sort tasks", function(){
  visit('/').then(function(){
    return click("strong:contains('Description')");
  }).then(function(){
      descritpion = $.trim(find('tbody tr:first td:first').text());
      equal(descritpion, '2013-10-26 00:00:00');
  })
});