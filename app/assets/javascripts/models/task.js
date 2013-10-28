TaskManager.TaskModel = DS.Model.extend({
  description: DS.attr(),
  state: DS.attr(),
  created_at: DS.attr(),
  performer: DS.belongsTo('user'),
  owner: DS.belongsTo('user'),


  /*date: function() {
    dateObject = new Date(this.get('created_at'));
    return dateObject.format();
  }.property('created_at')*/
})