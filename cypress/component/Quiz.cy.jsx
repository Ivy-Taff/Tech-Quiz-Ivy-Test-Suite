import React from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../src/components/Quiz.jsx';

describe('Quiz Component', () => {
  beforeEach(() => {
    // This will run before each test, mounting the Quiz component
    mount(<Quiz />);
  });

  it('should render the quiz component', () => {
    // Check if the Quiz component is rendered
    cy.get('[data-testid="quiz"]').should('exist');
  });

  it('should display the correct title', () => {
    // Verify that the title of the quiz is displayed correctly
    cy.get('[data-testid="quiz-title"]').should('contain.text', 'Quiz Title');
  });

  it('should render the correct number of questions', () => {
    // Assuming the Quiz component renders questions with a specific class or data-testid
    cy.get('[data-testid="quiz-question"]').should('have.length', 10); // Adjust the number as needed
  });

  it('should allow selecting an answer', () => {
    // Simulate selecting an answer and verify the behavior
    cy.get('[data-testid="quiz-question"]')
      .first()
      .find('[data-testid="quiz-answer"]')
      .first()
      .click()
      .should('have.class', 'selected'); // Adjust based on your component's behavior
  });
});