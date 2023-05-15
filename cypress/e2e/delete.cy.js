describe('Delete', () => {
  it('deletes todo item', () => {
    cy.visit('http://192.168.0.3:8080/')
    cy.get('tbody tr').contains('React js')
    cy.get('.del-btn').first().click()
    cy.get('tbody tr').should('have.length', 2)

    cy.get('tbody tr').contains('React js').should('not.exist')

  })
})