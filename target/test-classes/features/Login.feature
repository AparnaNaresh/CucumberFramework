Feature: Application Login 


# parameterization is with DataTable and Examples scenarios

Scenario: Login to application with username and password 

	Given user is on login page 
	When user enters credentials 
	Then user signing 
	
	
	# similar kind of steps should not be present in feature file
	

	# Data Driven Testing 

Scenario Outline: 

	Given user is on login page 
	When user enters "<username>" and "<password>" 
	Then user signing 
	Examples: 
	
		|username | password|
		|user1    | pwd1    |
		|user2    | pwd2    |
		|user3    | pwd3    |
		
		
		#Table - using DataTable, here no headers

Scenario: 
	Given user is on login page 
	When user enters user credentials 
		|user1 | pwd1|
		|user2 | pwd2 |
	Then user signing 
	

# Table example by passing headers
#Datatables with Maps..
Scenario:
 Given user is on login page
 When user entering user credentials
 |username | password|
 |user1 |pwd1|
 |user2 |pwd2|
Then user signing