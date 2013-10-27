require 'spec_helper'

describe Api::V1::TasksController do

  logged

  let(:user) {subject.current_user}
  describe "index" do
    before do
      @task = FactoryGirl.create(:task, description: 'you shouldnt be there')
      @owned_task = FactoryGirl.create(:task, owner: user)
      @assigned = FactoryGirl.create(:task, performer: user)

      get :index, format: :json
    end

     it "should return status 200" do
      response.response_code.should == 200
    end

    it "should returned the appropriate tasks" do
      response.body.should include(@owned_task.description)
      response.body.should include(@assigned.description)
      response.body.should_not include(@task.description)
    end


  end

  describe "create" do

  end

  describe "update" do

  end

  describe "delete" do

  end
end
