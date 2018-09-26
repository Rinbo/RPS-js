Feature: Create contacts
  As a user
  In order to have fun
  I would like to be able to play a game of RPS


  Scenario: Start game
    Given I visit the site
    When I click the "Begin" button
    And I fill in "Robin Börjesson" in the "Name" field
    Then I should see "Rock"
    And I should see "Siccor"
    And I should see "Paper"