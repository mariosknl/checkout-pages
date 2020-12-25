context("Shipping Address Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("fills the street address", () => {
    cy.get("#streetAddress")
      .type("14th Street")
      .should("have.value", "14th Street");
  });

  it("the street address cannot be empty", () => {
    cy.get("#streetAddress")
      .focus()
      .blur()
      .get(".error")
      .contains("This field is mandatory");
  });
  it("fills the postal code", () => {
    cy.get("#postalCode").type("26335").should("have.value", "26335");
  });

  it("the postal code cannot be empty", () => {
    cy.get("#postalCode")
      .focus()
      .blur()
      .get(".error")
      .contains("This field is mandatory");
  });

  it("fills the state/regiion", () => {
    cy.get("#state").type("Achaia").should("have.value", "Achaia");
  });

  it("the state/regiion cannot be empty", () => {
    cy.get("#state")
      .focus()
      .blur()
      .get(".error")
      .contains("This field is mandatory");
  });
});
