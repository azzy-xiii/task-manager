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

require 'spec_helper'

describe Task do
  before {@task = FactoryGirl.create(:task)}

  subject {@task}

  it {should respond_to(:state)}
  it {should respond_to(:description)}
  it {should respond_to(:owner)}
  it {should respond_to(:performer)}
  it {should be_valid}

end
