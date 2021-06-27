describe("Quizz", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("only one option can be selected at the same time", () => {
    cy.get("fieldset").each(($el, index, $list) => {
      cy.wrap($el).find("[type=radio]").first().check();
      cy.wrap($el).find("[type=radio]").last().check();
      cy.wrap($el).find("[type=radio]:checked").should("have.length", 1);
    });
  });
  it("should submit only if every question has an answer", () => {
    cy.get("fieldset").each(($el, index, $list) => {
      cy.wrap($el).find("[type=radio]").first().check();
      cy.wrap($el).find("[type=radio]:checked").should("have.length", 1);
    });
  });
  it("should be able to submit when all answers are filled", () => {
    cy.get("fieldset").each(($el, index, $list) => {
      cy.wrap($el).find("[type=radio]").first().check();
    });

    cy.get("input[type=submit]").click();
    cy.url().should("eq", "http://localhost:3000/result?ok=3&notOk=0");
  });
});
