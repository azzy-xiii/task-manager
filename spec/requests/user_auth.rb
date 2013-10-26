require 'spec_helper'

describe "Auth pages" do

  describe "registration" do
    it "provides a method for the user to register with email and password" do
      visit "/users/sign_up"

      fill_in "Email",                 with: "example@mail.bg"
      fill_in "Password",              with: 'password'
      fill_in "Password confirmation", with: 'password'

      click_button "Sign up"

      page.should have_content("Welcome! You have signed up successfully.")
    end
  end

  describe "login" do
    it "provides a method for the user to login" do
      user = FactoryGirl.create(:user)

      sign_in user

      page.should have_content("Signed in successfully.")
    end
  end

  describe "logout" do
    it "provides a method for a user to logout when logged in" do
      user = FactoryGirl.create(:user)
      sign_in user

      click_link "Logout"

      page.should have_content("You need to sign in or sign up before continuing.")

    end
  end
end