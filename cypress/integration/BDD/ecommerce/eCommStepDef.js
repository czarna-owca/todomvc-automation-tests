/// <reference types="cypress" />

import HomePage from '../../../../support/pageObjects/HomePage'
import ProductPage from '../../../../support/pageObjects/ProductPage'
import CartPage from '../../../../support/pageObjects/CartPage'
import { Given, When,Then, And } from "cypress-cucumber-preprocessor/steps"



const homePage = new HomePage()
    const productPage = new ProductPage()
    const cartPage = new CartPage()

Given('I open ECommerce Page', () =>
 {  cy.visit(Cypress.env('url')+"/angularpractice/")

})

//When I add items to Cart

 When ('I add items to Cart', function() 
  { homePage.getShopTab().click()

    this.data.productName.forEach(function (element) {
        cy.selectProduct(element)
    });

    productPage.checkOutButton().click()

 })

 //And validate the total prices

 And('Validate the total prices', ()=> {

    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
           
        const amount= $el.text()
        var res = amount.split(" ")
        res = res[1].trim()
        sum=Number(sum)+Number(res)
                 

    }).then(function(){
    
            cy.log(sum)
    })

    cy.get('h3 strong').then(function(element)
    {
        const amount= element.text()
        var res = amount.split(" ")
       var total = res[1].trim()
       
       expect(Number(total)).to.equal(sum)
    })
 })

 Then('Select the country, submit and verify Thnak you tekst', () => 
 {
    cartPage.checkOutSuccess().click() //= cy.contains('Checkout').click()

    cy.get('#country').type('India')

    cy.get('.suggestions > ul > li > a').click()
    cy.get('#checkbox2').click({ force: true })
    cy.get('input[type="submit"]').click()
    //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')

    cy.get('.alert').then(function (element) {
        const actualText=element.text()
        expect(actualText.includes("Success")).to.be.true
    })

 })
