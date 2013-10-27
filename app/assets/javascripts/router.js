TaskManager.Router.map(function() {
   this.resource('tasks', function(){
    this.route('new')
    this.resource('task', function() {
      this.route('show')
      this.route('edit')
    })
  })
})


