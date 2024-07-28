import { faker } from '@faker-js/faker';

beforeEach(() => {
  cy.login('standard_user', 'secret_sauce', {cacheSession: false});  
});

describe('template spec', () => {
  const customer = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    codePostal: faker.location.zipCode()
  }

  it('Logs in, adds products to the cart and completes the purchase', () => {

    cy.addToCart('Sauce Labs Backpack');
    cy.addToCart('Sauce Labs Fleece Jacket');
    cy.addToCart('Sauce Labs Onesie');
    cy.removeFromCart('Sauce Labs Onesie');
    cy.navigateToCartAndCheckout('Sauce Labs Backpack', 'Sauce Labs Fleece Jacket')
    cy.fillCheckoutForm(customer.firstName, customer.lastName, customer.codePostal);
    cy.completeCheckout();
    cy.verifyOrderCompletion();
    cy.returnToProducts();
  })
})