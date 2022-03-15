Feature: Logout to BlazeMeter Demo Store

#Logout001 - Positive case: Log out
Scenario: Log out of an account
Given Logout001 User access BlazeMeter Demo Store website
When Logout001 User clicks Log in
When Logout001 User enters a valid username
When Logout001 User enters a correct password
When Logout001 User clicks Log in button
Then Logout001 User clicks Log out button