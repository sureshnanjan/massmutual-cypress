Feature: Heroku App Examples features
  Scenario: Visiting the Home Page
    When I visit HerokuApp HomePage
    Then I should see Welcome to the-Internet

  Scenario: A Failing Scenario with no step binding
    When I Access Cypress documentation
    Then I should see details for setupNodeEvents