require 'user'

FactoryGirl.define do
  factory :task do
    state 'open'
    description 'testing'
    association :owner, factory: :user
    association :performer, factory: :user
  end
end