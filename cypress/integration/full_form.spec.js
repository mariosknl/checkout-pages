context("Contact Information Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("fills the inputs and successfully navigate to the confirmation page without any errors", () => {
    cy.get("#email")
      .type("test@example.com")
      .get("#phoneNumber")
      .type("306940300700")
      .get("#firstName")
      .type("Marios")
      .get("#lastName")
      .type("Kanellopoulos")
      .get("#streetAddress")
      .type("14 Street")
      .get("#postalCode")
      .type("26335")
      .get("select")
      .select("Greece")
      .get("#city")
      .type("Patras")
      .get("#state")
      .type("Achaia")
      .get("#shippingAddress")
      .check()
      .get("#cardHolder")
      .type("Marios Kanellopoulos")
      .get("#cardNumber")
      .type("4242424242424242")
      .get("#expirationDate")
      .type("04/22")
      .get("#cvv")
      .type("123")
      .get('[type="checkbox"]')
      .check()
      .get("form")
      .submit()
      .get("h2")
      .contains("Welcome");
  });
});
