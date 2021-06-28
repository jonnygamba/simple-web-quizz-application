describe("Quizz", () => {
  beforeEach(() => {
    cy.visit("/the-quiz");
  });
  it("should select only one option at the same time", () => {
    cy.get("fieldset").first().find("[type=radio]").first().check();
    cy.get("fieldset").first().find("[type=radio]").last().check();
    cy.get("fieldset")
      .first()
      .find("[type=radio]:checked")
      .should("have.length", 1);
  });
  it("must hide the submit button in the first question", () => {
    cy.get("fieldset").first().find("[type=radio]").first().check();
    cy.get("input[type=submit]").should("not.exist");
  });
  it("should be able to navigate to next question if answer provided for current one", () => {
    cy.get("fieldset").first().find("[type=radio]").first().check();
    cy.get("fieldset").find("button").first().click();
    cy.url().should("eq", "http://localhost:3000/the-quiz?q=1");
  });
});
