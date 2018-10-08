Feature: Start game
  As a user
  In order to have fun
  I would like to be able to play a game of RPS


  Scenario: Start game
    Given I visit the site
    When I fill in "name" with "Robin"
    And I click "begin"    
    Then I should see "Rock"
    And I should see "Scissor"
    And I should see "Paper"