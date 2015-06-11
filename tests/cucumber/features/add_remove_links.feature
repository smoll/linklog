Feature: Add & remove links

  As a user of linklog
  I want to be able to add and remove links
  So that I can manage my personal linklog

# Fix this by adding a background step which resolves the URL
  @ignore
  Scenario: Unauthenticated user cannot add a link
    Given I am unauthenticated
    When I navigate to "/"
    Then I should not be able to add a link

  @dev
  Scenario: Added links persist through login cycle
    Given I am a new user
    When I add a new link
    Then the link should be visible
    When I log out
    And I log back in
    Then the link should still be visible
