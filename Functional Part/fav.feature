Feature: Save a favourite item
  As a webportal user, I should be able to save a favourite item for later purposes 

Background: User is Logged In
	Given I navigate to the login page
	When I submit username and password
	Then I should be logged in 

Scenario: Save the item as favourite
    Given The user searches for a product of his choice
    When save the first item that appears in the search result as favourite 
    Then the item should get saved as favourite

Scenario: Buy a favourtie item
    Given The user clicks on the favourite icon to go to the favourite page
    When The user selects Products to load all the favourite products
    And click on Add to cart on one of the item from the list 
    Then the user should be able to select a desired size as required 
    And then click on Add to cart button again
    Then the product is successfully added to the shopping cart

Scenario: Deselect/unfavourite item
    Given The user clicks on the favourite icon to go to the favourite page
    When The user selects Products to load all the favourite products
    And click on favourite icon(♥) on one of the item from the list 
    Then the item is removed from the favourite list

Scenario: Save as favourite and unfavourite of an item, actions should sync the products on mobile apps(iOS/Android)
    Given The user searches for a product of his choice
    When save the first item that appears in the search result as favourite 
    Then the item should get saved as favourite 
    And the same product should also be shown in favourite section on the mobile apps
    When click on favourite icon(♥) on one of the item from the list in favourite section
    Then the item is removed from the favourite list section on the mobile apps

