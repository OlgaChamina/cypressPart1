// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (email, password) => {
    cy.get('.ml-auto > .ml-2').click();
    if (email) {
        cy.get('#mail').type(email);
    }
    if (password) {
        cy.get('#pass').type(password);
    }
    cy.get('form > .ml-2').click();
});
Cypress.Commands.add('bookName', (title, authors) => {
    cy.get("button[class='btn btn-warning']").click();
    if (title) {
        cy.get('#title').type(title);
    }
    if (authors) {
        cy.get('#authors').type(authors);
    }
});
