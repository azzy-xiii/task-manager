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