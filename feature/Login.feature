Feature: Login to BlazeMeter Demo Store

#Login001 - Positive case: Valid credentials
Scenario: Log in using a valid credential
Given Login001 User access BlazeMeter Demo Store website
When Login001 User clicks Log in
When Login001 User enters a valid username
When Login001 User enters a correct password
Then Login001 User clicks Log in button

#Login002 - Negative case: Invalid username
Scenario: Login using an invalid username
Given Login002 User access BlazeMeter Demo Store website
When Login002 User clicks Log in
When Login002 User enters an invalid username
When Login002 User enters a correct password
When Login002 User clicks Log in button
Then Login002 User will be notified that the user does not exist
