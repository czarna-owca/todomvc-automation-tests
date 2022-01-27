Feature: End to end Ecommerce validation

    application regression

    Scenario: Ecommerce products delivery

    Given I open Ecommerce page
    When I add items to Cart
    And validate the total prices
    Then select the country, submit and verify Thnakyou tekst