Feature: Application Login

Scenario: Login to application with username and password

Given user is on login page
When user enters username "abc", password "pwd"and clicks on login button
Then home page should be displayed
And cards page should be displayed is "true"

Scenario: Login to application with username and password

Given user is on login page
When user enters username "abc1", password "pwd1"and clicks on login button
Then home page should be displayed
And cards page should be displayed is "false"