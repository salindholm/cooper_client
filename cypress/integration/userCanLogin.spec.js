/// <reference types="Cypress" />

describe("User authenticates", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("successfully with credentials", () => {
    cy.get("#login").click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("exampleX@example.com");
      cy.get("#password").type("password");
      cy.get('button').contains('Submit').click()
    }); 
    cy.get("p#login-success").should("contain", "Hi", "#email");
  });

  it("unsuccessfully with invalid credentials", () => {
    cy.get("#login").click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("example@mail.com");
      cy.get("#password").type("wrongpassword");
      cy.get('button').contains('Submit').click()
    });
    cy.get("p#login-error").should("contain", "Invalid login credentials. Please try again.");
  });
});