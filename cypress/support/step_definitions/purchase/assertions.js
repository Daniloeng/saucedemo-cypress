import { Step, Then } from "@badeball/cypress-cucumber-preprocessor";

Then(`Verify that the purchase was successfully complete`, () => {
    cy.verifyOrderCompletion();
    Step(this, `Return to Products screen`);
});

Then(`Return to Products screen`, () => {
    cy.returnToProducts();
});
