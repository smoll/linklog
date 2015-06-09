Feature: Authentication

  As a user of linklog
  I want to be able to log in and log out
  So that I can save my personal links and settings

  @dev
  Scenario: Not logged in
    Given I am unauthenticated
    When I navigate to "/"
    Then I should see the title "LinkLog"
    And I should see a login interface

  @dev
  Scenario: Logged in
    Given I am a new user
    Then I should see the title "LinkLog"
    And I should be logged in
