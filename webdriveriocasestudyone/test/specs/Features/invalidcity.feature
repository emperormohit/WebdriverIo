
Feature: Performing a search for a invalid city value to check its weather

Scenario: Performing a invalid search operation
        Given User has navigated to Openweathermap site
        When The user enters invalid city "wrongcity" into the search box
        And The User clicks on the search button
        Then The website suggests city is "Not found"