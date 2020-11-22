describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
    // expect(true).to.equal(false)
  })
  it('Visits the Kitchen Sink', () =>{
    cy.visit('https://example.cypress.io')

    // cy.pause()

    cy.contains('type').click()

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    const email = 'fake@email.com'
    // Get an input, type into it and verify that the value has been updated
    cy.get('.action-email').type(email).should('have.value', email)
  })
})
