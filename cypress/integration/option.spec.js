describe("Test option", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should have 4 options", () => {
    cy.get("input[type=radio]").should("have.length", 4);
  });
  it("should have a valid question", () => {
    const question = cy.get("legend");
    question.should("have.length", 1);

    question.first().invoke("text").its("length").should("be.gt", 5);
  });
});
