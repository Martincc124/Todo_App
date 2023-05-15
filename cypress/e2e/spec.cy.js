describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('http://localhost:8080/')
    cy.get('input').type('Angular js')
    cy.get('.add-btn').click()

    cy.get('tbody tr').should('have.length', 4)

    cy.get('tbody tr').eq(3).contains('Angular js')

  })
})