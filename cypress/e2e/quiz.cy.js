describe('Quiz E2E Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/quiz'); // Adjust the path if needed
  });

  describe('Page Load Tests', () => {
    it('should load the quiz page', () => {
      cy.get('[data-testid="quiz"]').should('exist');
    });

    it('should display the correct title', () => {
      cy.get('[data-testid="quiz-title"]').should('contain.text', 'Quiz Title');
    });

    it('should render the correct number of questions', () => {
      cy.get('[data-testid="quiz-question"]').should('have.length', 5); // Adjust as needed
    });
  });

  describe('Interaction Tests', () => {
    it('should allow selecting an answer', () => {
      cy.get('[data-testid="quiz-question"]')
        .first()
        .find('[data-testid="quiz-answer"]')
        .first()
        .click()
        .should('have.class', 'selected'); // Adjust based on app behavior
    });

    it('should submit the quiz and display the score', () => {
      cy.get('[data-testid="quiz-answer"]').each((answer) => {
        cy.wrap(answer).click(); // Select each answer
      });
      cy.get('[data-testid="quiz-submit"]').click(); // Submit the quiz
      cy.get('[data-testid="quiz-score"]').should('contain.text', 'Your Score:'); // Verify score display
    });
  });
});
