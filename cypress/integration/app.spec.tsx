/// <reference types="cypress" />

it('should work', () => {
    cy.visit('/');
    cy.findByRole('heading').should('have.text', 'Hello!');
});