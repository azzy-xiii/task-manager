# == Schema Information
#
# Table name: tasks
#
#  id           :integer          not null, primary key
#  state        :string(255)
#  description  :string(255)
#  owner_id     :integer
#  performer_id :integer
#  created_at   :datetime
#  updated_at   :datetime
#

class Task < ActiveRecord::Base
  belongs_to :owner, class_name: 'User', foreign_key: 'owner_id'
  belongs_to :performer, class_name: 'User', foreign_key: 'performer_id'

  after_create :notify_new
  after_update :notify_update
  after_destroy :notify_destroy


  def notify_new
    notify_users('new')
  end

  def notify_update
    notify_users('update')
  end

  def notify_destroy
    notify_users('delete')
  end

  def notify_users(destination)
    client = Faye::Client.new('http://localhost:9292/faye')
    channel = '/tasks/' + destination
    client.publish(channel, {
      'task' => {
        "id"          => self.id,
        "description" => self.description,
        "created_at"  => self.created_at,
        "state"       => self.state,
        "owner"       => self.owner_id,
        "performer"   => self.performer_id
      }
    })
  end

end


