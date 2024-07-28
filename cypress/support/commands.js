Cypress.Commands.add('login', (
    user = Cypress.env('standard_user'),
    password = Cypress.env('secret_sauce'),
    { cacheSession = true } = {},
) => {
    const login = () => {
        cy.visit('/index.html');
        cy.get('input[data-test="username"]').type(user);
        cy.get('input[data-test="password"]').type(password, { log: false });
        cy.get('#login-button').click();
    };
    const validate = () => {
        cy.visit('/inventory.html');
        cy.location('pathname', { timeout: 4000 })
            .should('not.eq', '/index.html')
    };
    const options = { 
        cacheSession: true,
        validate,
    };
    cy.log('cache', cacheSession)
    if(!cacheSession) {
        login();
    } else {
        cy.session(user, login, { validate })
    }

    cy.url().should('include', '/v1/inventory.html');
    cy.get('.product_label').should('contain', 'Products');
});

Cypress.Commands.add('logout', () => {
    cy.get('.bm-burger-button > button').click();
    cy.get('#logout_sidebar_link').contains('Logout').click();
})

Cypress.Commands.add('addToCart', (product) => {
    cy.contains('.inventory_item_name', product)
      .parents('.inventory_item')
      .find('button.btn_inventory')
      .contains('ADD TO CART')
      .click();
});

Cypress.Commands.add('removeFromCart', (product) => {
    cy.contains('.inventory_item_name', product)
    .parents('.inventory_item')
    .find('button.btn_inventory')
    .contains('REMOVE')
    .click();
});
  
Cypress.Commands.add('navigateToCartAndCheckout', (first, second) => {
    cy.get('#shopping_cart_container').click();
    cy.get('.cart_item > .cart_item_label > a')
      .should('have.length', 2)
      .and(($item) => {
        expect($item.get(0).innerText).to.equal(first);
        expect($item.get(1).innerText).to.equal(second);
    });
    cy.get('.checkout_button').click();
});

Cypress.Commands.add('clickOnButton', (label) => {
    cy.get('.cart_button').contains(label).click();
});

Cypress.Commands.add('fillCheckoutForm', (firstName, lastName, postalCode) => {
    cy.get('[data-test="firstName"]').should('be.visible').type(firstName);
    cy.get('[data-test="lastName"]').should('be.visible').type(lastName);
    cy.get('[data-test="postalCode"]').should('be.visible').type(postalCode);
    cy.clickOnButton('CONTINUE');
});

Cypress.Commands.add('completeCheckout', () => {
    cy.clickOnButton('FINISH');
});
  
Cypress.Commands.add('verifyOrderCompletion', () => {
    cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER');
    cy.get('.pony_express').should('be.visible');
});
  
Cypress.Commands.add('returnToProducts', () => {
    cy.get('.bm-burger-button').click();
    cy.get('#inventory_sidebar_link').contains('All Items').click();
});
  
  
  