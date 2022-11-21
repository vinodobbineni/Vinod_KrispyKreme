@login
Feature: Login Functionality

Background:
   Given Open the browser with url

   @smoke @regression
  Scenario Outline: Verify the user is able to login with valid credentials
	
	 Given user clicks on the My Account Icon
	 When user clicks on Signin button with <email> and <password>
	 Then user should navigate to home page <login status>
	 
	 Examples:
	 |email|password|login status|
	 |vin.kumar097@gmail.com|Vinod@2895|passed|
	 |vin@gmail.com|Vinod@2895|falied|