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
end


