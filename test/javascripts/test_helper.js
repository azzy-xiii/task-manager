//= require application
//= require_tree .
//= require_self

document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');
document.write('<style>#ember-testing-container { position: absolute; background: white; bottom: 0; right: 0; width: 640px; height: 384px; overflow: auto; z-index: 9999; border: 1px solid #ccc; } #ember-testing { zoom: 50%; }</style>');

TaskManager.rootElement = '#ember-testing';
TaskManager.setupForTesting();
TaskManager.injectTestHelpers();
TaskManager.ApplicationAdapter = DS.FixtureAdapter.extend();

(typeof exports !== "undefined" && exports !== null ? exports : this).exists = function(selector) {
  return !!find(selector).length;
};

TaskManager.TaskModel.FIXTURES = [
  {
    id: 1,
    description: 'Testing first',
    state: 'opened',
    created_at: '2013-10-26 00:00:00',
    owner: 1,
    performer: 2
  },
  {
    id: 2,
    description: 'Testing second',
    state: 'opened',
    created_at: '2013-10-25 00:00:00',
    owner: 2,
    performer: 1
  }
];

TaskManager.UserModel.FIXTURES = [
  {
    id: 1,
    email: 'fisrt@mail.bg'
  },
  {
    id: 2,
    email: 'second@mail.bg'
  }
];