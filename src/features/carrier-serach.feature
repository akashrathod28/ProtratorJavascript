Feature: Search a carrier on dashboard

@run5
Scenario: Search by carrier Name
Given User is on the Login Page
And User select other user from user selection
When User enter valid Username
And User click on next button
And User enter valid Password
And Click on Login button
And User is landed on the dashboard page
And Search for carrier "COURIERSPLEASE-AUTOTEST"
Then System show carriers which have "COURIERSPLEASE-AUTOTEST" in Carrier Name column
When User Click on logout button
Then User is landed on Logout page

@ignore
Scenario: Search by carrier Status
Given User is on the Login Page
And User select other user from user selection
When User enter valid Username
And User click on next button
And User enter valid Password
And Click on Login button
And User is landed on the dashboard page
And Search for status "REQUEST DENIED"
Then System show carriers which have "REQUEST DENIED" in Carrier status column
When User Click on logout button
Then User is landed on Logout page


@run5
Scenario: Search by carrier Action which exist in the system
Given User is on the Login Page
And User select other user from user selection
When User enter valid Username
And User click on next button
And User enter valid Password
And Click on Login button
And User is landed on the dashboard page
And Search for Action "View"
Then System show carriers which have "View" in Carrier action column
When User Click on logout button
Then User is landed on Logout page


@run5
Scenario: Search by carrier Action which does not exist
Given User is on the Login Page
And User select other user from user selection
When User enter valid Username
And User click on next button
And User enter valid Password
And Click on Login button
And User is landed on the dashboard page
And Search for Action "abcd"
Then System show carriers which have "abcd" in Carrier action column
When User Click on logout button
Then User is landed on Logout page