describe('Update', () => {
  it('Updates todo item', () => {
    cy.visit('http://192.168.0.3:8080/')
    cy.get('.edit-btn').first().click()
    cy.get('input').clear()
    cy.get('input').type('Updated React js')
    cy.get('.add-btn').click()
    cy.get('tbody tr').eq(0).contains('Updated React js')

  })
})