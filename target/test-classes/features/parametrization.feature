Feature: Login to Application

Scenario Outline: Login with multiple users

Given user navigated to "xyz.com"
When user enters <username> and <password>
Then Home Page should be displayed

Examples:

|	username 	| password|
| user1@gmail.com | pwd1 |
|user2@gmail.com	| pwd2 |
|user3@gmail.com	| pwd3	|