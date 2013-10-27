TaskManager.TaskModel = DS.Model.extend({
  description: DS.attr(),
  state: DS.attr(),
  created_at: DS.attr(),
  owner: DS.belongsTo('user'),
  performer: DS.belongsTo('user')
})