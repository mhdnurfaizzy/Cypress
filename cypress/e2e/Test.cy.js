describe('My First Test', () => {

  it('Verify Title Page-Positive', () => {
    cy.visit('https://example.cypress.io')
    cy.title().should('eq', 'Cypress.io: Kitchen Sink')
  })
  
  it('Verify Title Page-Negative', () => {
    cy.visit('https://example.cypress.io')
    cy.title().should('eq', 'Cypress.io123: Kitchen Sink')
  })

})

