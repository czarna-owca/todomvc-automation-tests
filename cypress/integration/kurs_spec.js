
describe("siepomaga", () => {
    it("add donation to cart", () => {
        cy.visit("https://www.siepomaga.pl/fundacja-siepomaga");
        cy.contains("a", "Wesprzyj jednorazowo").click({ force: true });
        cy.contains("div", "payment-choose-amount-component__fixed-value-inputs__element__chip").contains('50').click({ force: true });
        cy.get('input[name="payment[signature]"]').type("stefan");
        cy.contains("button", "Do koszyka darowizn").click();
        cy.contains("div.ui", "1");
        cy.contains("a", "Opłać koszyk darowizn").click({ force: true });
    })
})