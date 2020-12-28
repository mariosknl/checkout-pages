context("Contact Information Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("fills the email input", () => {
    cy.get("#email")
      .type("test@example.com")
      .should("have.value", "test@example.com");
  });

  it("the email input cannot be empty", () => {
    cy.get("#email")
      .focus()
      .blur()
      .get(".error")
      .contains("This field is mandatory");
  });

  it("fills the Phone Number input", () => {
    cy.get("#phoneNumber")
      .type("306942035470")
      .should("have.value", "306942035470");
  });

  it("the Phone Number input cannot be empty", () => {
    cy.get("#phoneNumber")
      .focus()
      .blur()
      .get(".error")
      .contains("This field is mandatory");
  });

  it("the Phone Number cannot be more than 12 character", () => {
    cy.get("#phoneNumber")
      .type("3069420354701")
      .blur()
      .get(".error")
      .contains("Phone number must be 12 digits.");
  });

  it("fills the First Name input", () => {
    cy.get("#firstName").type("Marios").should("have.value", "Marios");
  });

  it("fills the Last Name input", () => {
    cy.get("#lastName")
      .type("Kanellopoulos")
      .should("have.value", "Kanellopoulos");
  });

  it("the First Name input cannot be empty", () => {
    cy.get("#firstName")
      .focus()
      .blur()
      .get(".error")
      .contains("This field is mandatory");
  });

  it("the Last Name input cannot be empty", () => {
    cy.get("#lastName")
      .focus()
      .blur()
      .get(".error")
      .contains("This field is mandatory");
  });
});
