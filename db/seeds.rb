# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

users = User.create([{email: 'testuser@mail.bg', password: 'password', password_confirmation: 'password'}, {email: 'otheruser@mail.bg', password: 'qwerty123', password_confirmation: 'qwerty'}])

tasks = Task.create([{description: 'a/b testing', state: 'open', owner_id: 1, performer_id: 2},
                      {description: 'building something', state: 'open', owner_id: 3, performer_id: 2},
                      {description: 'crash', state: 'open', owner_id: 2, performer_id: 2}])