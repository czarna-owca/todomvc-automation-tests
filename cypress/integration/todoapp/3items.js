describe("when add 3 items and tick checkbox -one of them", () => {
    const firstItem = "aaa";
    const secondItem = "bbb";
    const thirdItem = "ccc";
    const addNewItem = (itemName) => { cy.get("input.new-todo").type(itemName).type("{enter}") }

    beforeEach(() => {
        cy.visit("https://todomvc.com/examples/vanillajs/")

        addNewItem(firstItem);
        cy.get("input[class='toggle']").check()
        addNewItem(secondItem);
        addNewItem(thirdItem);
    })

    context("when add 3 items and tick checkbox -one of them", () => {

        it("should number of left items should be only 2", () => {
            cy.get("span[class='todo-count']").find("strong").should("contain.text", 2)
        })

    })

    context("when click on button-Active", () => {
        it("should - be seen 2 items: second item bbb and third item ccc", () => {

            cy.get('a').contains('Active').click()
            cy.get(".todo-list li").eq(0).should("contain.text", secondItem)
            cy.get(".todo-list li").eq(1).should("contain.text", thirdItem)
            cy.get("span[class='todo-count']").find("strong").should("contain.text", 2)
            cy.get('firstItem').should('not.exist');
        })

    })

    context("when click on button - Completed ", () => {
        it("should be visiable and marked only first item-aaa ", () => {

            cy.get('a').contains('Completed').click()
            cy.get('secondItem').should('not.exist');
            cy.get('thirdItem').should('not.exist');
            cy.get(".todo-list li").eq(0).should("contain.text", 'aaa')
            cy.get("input[class='toggle']").check().should("be.checked")
        })
    })
    
    context("when click on button - Clear completed", () => {
        it("should delete first item aaa from all lists", () => {
            cy.get("button[class='clear-completed']").click()
            cy.get(".todo-list li").eq(0).should("contain.text", 'bbb')
            cy.get(".todo-list li").eq(1).should("contain.text", 'ccc')
            cy.get('aaa').should('not.exist')
                      
        })

    })

    context("when click on downward arrow next to 'what needs to be done?'", () =>{
        it("should marked all chekboxes", () => {
            cy.get("input[class='toggle-all']").click()
            cy.get("input[class='toggle']").check().should("be.checked")
             
        })

    })
})
