class Api::V1::TasksController < ApplicationController
  before_filter :authenticate_user!

  respond_to :json

  def index
    user = current_user.id
    respond_with Task.where("owner_id = ? OR performer_id = ?", user, user)
  end

  def create
    owner = current_user.id
    task = Task.create(strong(owner, 'open'))
    if task.save
      render json: task, status: :ok
    else
      render json: task.errors, status: :unprocessable_entity
    end
  end

  def update
    task = Task.find(params[:id])
    if task.update_attributes(strong(params[:task][:owner], params[:task][:state]))
        render json: task, status: :ok
    else
      render json: task.errors, status: :unprocessable_entity
    end
  end

  def destroy
    task = Task.find(params[:id])
    task.destroy
    render json: nil, status: :ok
  end

  private

    def strong(owner, state)
      params[:task][:performer_id] = params[:task][:performer]
      params[:task][:owner_id]     = owner
      params[:task][:state]        = state
      params.require(:task).permit(:description, :state, :performer_id, :owner_id)
    end
end
