Feature: Performing a search for a valid city to check its weather

Scenario: Performing a valid search operation
        Given User has navigated to Openweathermap site
        When The user enters valid city "Mumbai" into the search box
        When  The User clicks on the search button
        Then The website displays appropiate search results as "Mumbai"