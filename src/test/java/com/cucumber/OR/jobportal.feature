Feature: SearchJobs

Scenario Outline: jobsearch_different_location
  Given I go to "<url>" on "<Browser>"
  Then enter the value of keywords
  Then enter the value of locations
  Then click search button
  Then close the Browser
 
  Examples: 
    
      | Browser | 
      | firefox | 
      | chrome  | 