
describe(" 5 Test Suite", () => {
    it("5 case", () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Reload').click({ force: true })
        cy.url().should('include', 'https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include', 'top')


    })
})
