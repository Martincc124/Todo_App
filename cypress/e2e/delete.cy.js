describe('Delete', () => {
  it('deletes todo item', () => {
    cy.visit('http://localhost:8080/')
    cy.get('tbody tr').contains('React js')
    cy.get('.del-btn').first().click()
    cy.get('tbody tr').should('have.length', 2)

    cy.get('tbody tr').contains('React js').should('not.exist')

  })
})