context("Payment Method Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("fills the Card Holder input", () => {
    cy.get("#cardHolder")
      .type("Marios Kanellopoulos")
      .should("have.value", "Marios Kanellopoulos");
  });

  it("the Card Holder input cannot be empty", () => {
    cy.get("#cardHolder")
      .focus()
      .blur()
      .get(".error")
      .contains("Name in the card please");
  });

  it("fills the Card Number input", () => {
    cy.get("#cardNumber")
      .type("4242424242424242")
      .should("have.value", "4242424242424242");
  });

  it("the Card Number input cannot be empty", () => {
    cy.get("#cardNumber")
      .type("42424242424242422")
      .blur()
      .get(".error")
      .contains("Credit card number must be 16 digits");
  });

  it("fills the CVV input", () => {
    cy.get("#cvv")
      .type("4242424242424242")
      .should("have.value", "4242424242424242");
  });

  it("the CVV cannot be empty", () => {
    cy.get("#cvv")
      .type("5466")
      .blur()
      .get(".error")
      .contains("cvv must be at most 3 characters");
  });
});
