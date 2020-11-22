describe('Index Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000/')

    cy.get('a').click()

    cy.url().should('include', '123')
  })
})
