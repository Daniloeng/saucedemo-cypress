import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given(`Verification of behavior with valid login credentials username {string} and password {string}`, (user, password) => {
    cy.login(user, password, {cacheSession: false});
})
