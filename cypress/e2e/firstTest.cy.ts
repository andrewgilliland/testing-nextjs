describe("Home Page", () => {
  const renderComponent = () => {
    cy.visit("http://localhost:3000");
  };

  it("should have a heading in the page", () => {
    renderComponent();

    cy.get('[data-testid="cypress-heading"]').should("exist");
  });

  it("should increment counter value when increment button is clicked", () => {
    renderComponent();

    cy.get('[data-testid="cypress-count"]').should("have.text", "Count: 0");

    cy.get('[data-testid="cypress-increment"]').click();

    cy.get('[data-testid="cypress-count"]').should("have.text", "Count: 1");

    cy.get;
  });

  it("should navigate to about page when about link is clicked", () => {
    renderComponent();

    cy.get('[data-testid="cypress-about-link"]').click();

    cy.url().should("include", "/about");
  });

  it("should navigate to the about page and fill out the form", () => {
    renderComponent();

    cy.get('[data-testid="cypress-about-link"]').click();

    cy.get('[data-testid="cypress-name-input"]').type("John Doe");

    cy.get('[data-testid="cypress-email-input"]').type("jd@gmail.com");

    cy.get("button").click();
  });
});
