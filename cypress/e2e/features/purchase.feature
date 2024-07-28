Feature: Purchase process
    As a user
    I want to verify the login functionality with valid credentials, 
    ensure products can be added to the cart correctly, 
    and complete the purchase process successfully.

    Background: Navigate to the login screen and log in
        Given  Verification of behavior with valid login credentials username 'standard_user' and password 'secret_sauce' 

    Scenario Outline: Logs in, adds products to the cart and completes the purchase
        When Adds 'Sauce Labs Backpack' product to the cart
        And Adds 'Sauce Labs Fleece Jacket' product to the cart
        And Adds 'Sauce Labs Onesie' product to the cart
        And Removes 'Sauce Labs Fleece Jacket' product to the cart
        And Checks 'Sauce Labs Backpack' and 'Sauce Labs Onesie' items in the cart
        And Completes the purchase process
        Then Verify that the purchase was successfully complete