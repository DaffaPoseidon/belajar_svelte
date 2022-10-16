describe('learning cypress', () => {
  it('visiting the site', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
    cy.get('#email1').type('hello@gmail.com').should('have.value', 'hello@gmail.com')
  })
})