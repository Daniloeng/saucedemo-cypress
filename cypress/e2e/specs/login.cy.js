describe('login', () => {
    it('successful', () => {
      cy.login('standard_user', 'secret_sauce', {cacheSession: false});
      cy.url().should('include', '/v1/inventory.html');
      cy.get('.product_label').should('contain', 'Products');
    })
  })