@createAccount
Feature: Create Account functionality
  
  Background:
  Given Open the browser with url
  
  @regression
  Scenario Outline: Verify the user able to create new account
    Given user clicks on the My Account Icon
    And   user clicks on create account link
    And   user enter <first name>, <last name> and <email>
    And   user enters <password> and <confirm password>
    And   user clicks on privacy checkbox
    When  user clicks on create account button
    Then  user should be get the <status> message
    
    Examples:
    
    |first name|last name|email|password|confirm password|status|
    |kaim| ja|jewn@gmail.com|Test01@12345|Test01@12345|Not Created|
    |kuim| ja|jwn@gmail.com|Test02@12345|Test01@12345|Created|
    
    
    
    