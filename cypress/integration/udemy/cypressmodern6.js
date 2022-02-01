
describe("6 Test Suite", () => {
    it("6 case", () => {

        //cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.visit(Cypress.env('url')+"/AutomationPractice/")

        // cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Reload').click({ force: true })
        cy.url().should('include', 'https://rahulshettyacademy.com//AutomationPractice/')

        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include', 'top')


    })
})
