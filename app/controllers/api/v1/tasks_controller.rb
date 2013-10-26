class Api::V1::TasksController < ApplicationController
  before_filter :authenticate_user!

  respond_to :json

  def index
    user = current_user.id
    respond_with Task.where("owner_id = ? OR performer_id = ?", user, user)
  end
end
