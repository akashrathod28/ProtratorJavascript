Feature: Login and Logout Functionality of the Onboarding Application

@run5
Scenario: Login Logout Functionality
Given User is on the Login Page
When User enter valid Username
And User click on next button
And User enter valid Password
And Click on Login button
And User is landed on the dashboard page
And User Click on logout button
Then User is landed on Logout page
