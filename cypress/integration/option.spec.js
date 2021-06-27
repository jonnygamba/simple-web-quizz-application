describe("Every question should be valid", () => {
  beforeEach(() => {
    cy.visit("/the-quiz");
  });
  it("tests that every question has 4 radios", () => {
    cy.get("fieldset").each(($el, index) => {
      cy.wrap($el).find("input[type=radio]").should("have.length", 4);
    });
  });
  it('tests that every question has the title "Question + {n}"', () => {
    cy.get("fieldset").each(($el, index) => {
      cy.wrap($el)
        .find("legend")
        .should("have.length", 1)
        .and("text", `Question ${index + 1}`);
    });
  });
  it("tests that every question has a valid question", () => {
    cy.get("fieldset")
      .get("fieldset")
      .invoke("text")
      .its("length")
      .should("be.gt", 5);
  });
});
