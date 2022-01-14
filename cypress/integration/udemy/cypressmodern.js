
describe("My First Test Suite", () => {
    it("my first case", () => {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.get('.product').should('have.length', 5)
        cy.get('.product:visible').should('have.length', 4)

        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length', 4)
        cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click()

        cy.get('@productLocator').find('.product').each(($el, index, $list) => {

            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }

        })

        cy.get('.brand').should('have.text','GREENKART')

        cy.get('.brand').then(function (logoelement) {
            cy.log(logoelement.text())
        })
    })

})