

def logged
    before(:each) do
      @request.env["devise.mapping"] = Devise.mappings[:user]
      user = FactoryGirl.create(:user)
      sign_in user
    end
end

RSpec.configure do |config|
  config.include Devise::TestHelpers, :type => :controller
end

def sign_in(user)
  visit '/users/sign_in'

  fill_in "Email", with: user.email
  fill_in "Password", with: user.password

  click_button 'Sign in'
end
