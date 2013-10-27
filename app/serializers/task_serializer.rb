class TaskSerializer < ActiveModel::Serializer
  embed :ids, include: true

  attributes :id, :description, :created_at, :state

  has_one :owner,key: :owner,root: :users
  has_one :performer, key: :performer, root: :users
end
