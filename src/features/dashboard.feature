Feature: Verify Dashboard contents


@run5
Scenario: Verify Welcome message and user name are shown on the dashboard
Given User is on the Login Page
And User select other user from user selection
When User enter valid Username
And User click on next button
And User enter valid Password
And Click on Login button
And User is landed on the dashboard page
Then Welcome message and user name are shown on the dashboard
When User Click on logout button
Then User is landed on Logout page

@run5
Scenario: Verify carrier static on the dashboard page
Given User is on the Login Page
And User select other user from user selection
When User enter valid Username
And User click on next button
And User enter valid Password
And Click on Login button
And User is landed on the dashboard page
Then System show "Carrier Count (via GCS & CSP)", "Ready to Configure (via CSP)" and "Carrier Count (via CSP)" options
When User Click on logout button
Then User is landed on Logout page


@run5
Scenario: Verify carrier grid with header values
Given User is on the Login Page
And User select other user from user selection
When User enter valid Username
And User click on next button
And User enter valid Password
And Click on Login button
And User is landed on the dashboard page
Then Carrier table is shown on the dashboard with headres
When User Click on logout button
Then User is landed on Logout page

#  incomplete test
@run51
Scenario: Verify pagination on the dashboard page
Given User is on the Login Page
And User select other user from user selection
When User enter valid Username
And User click on next button
And User enter valid Password
And Click on Login button
And User is landed on the dashboard page
Then Pagination is shown on the buttom of the page
When User Click on logout button
Then User is landed on Logout page

#  incomplete test
@run51  
Scenario: Verify refresh button functionality on the dashboard page
Given User is on the Login Page
And User select other user from user selection
When User enter valid Username
And User click on next button
And User enter valid Password
And Click on Login button
And User is landed on the dashboard page
Then User click on refresh button
Then Page should refresh
When User Click on logout button
Then User is landed on Logout page











