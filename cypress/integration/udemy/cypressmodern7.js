
import CartPage from '../pageObjects/CartPage'
import HomePage from '../pageObjects/HomePage'
import ProductPage from '../pageObjects/ProductPage'
describe("7 Test Suite", () => {
    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data
        })

    })

    it('7 case', function () {
        const homePage=new HomePage()
        const productPage=new ProductPage()
        const cartPage=new CartPage()

        cy.visit("https://rahulshettyacademy.com/angularpractice/")


        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr', 'minlength', '2')
        homePage.getEntrepreneaur().should('be.disabled')

        homePage.getShopTab().click()
        
        this.data.productName.forEach(function (element) {
            cy.selectProduct(element)
        })
       
        productPage.checkOutButton().click()
        cartPage.checkOutSuccess().click()
       
    })
})
