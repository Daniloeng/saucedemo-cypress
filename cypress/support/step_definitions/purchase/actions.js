import { When } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from '@faker-js/faker';


const customer = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    codePostal: faker.location.zipCode()
}

When(`Adds {string} product to the cart`, (product) => {
    cy.addToCart(product);
});

When(`Removes {string} product to the cart`, (product) => {
    cy.removeFromCart(product);
});

When(`Checks {string} and {string} items in the cart`, (item1, item2) => {
    cy.navigateToCartAndCheckout(item1, item2)
});

When(`Completes the purchase process`, () => {
    cy.fillCheckoutForm(customer.firstName, customer.lastName, customer.codePostal);
    cy.completeCheckout();
});


