
describe("My First Test Suite", () => {
    it("my first case", () => {

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ca')
    cy.get('.product').should('have.length', 5)
    cy.get('.product:visible').should('have.length',4)
    cy.get('.products').find('.product').should('have.length', 4)
    cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()

})

})