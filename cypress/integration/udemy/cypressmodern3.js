
describe(" Third Test Suite", () => {
    it("third case", () => {

        //cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.visit(Cypress.env('url')+"/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])

        //statick dropdowns
        cy.get('select').select('option2').should('have.value', 'option2')

        //dynamic dropdowns

        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {

            if ($el.text() === "India") {
                $el.click()
            }

        })

        cy.get('#autocomplete').should('have.value', 'India')

        //visible/invisible elemetns
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //radio button
        cy.get('[value="radio2"]').check().should('be.checked')
        cy.get('[value="radio3"]').click().should('be.checked')


        //  cy.get('[value="radio2"]').check().should('be.checked')

    })

})