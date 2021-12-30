describe("ToDo app", () => {

    const addNewItem = (itemName) => {
        cy.get("input.new-todo").type(itemName).type("{enter}");
    }

    beforeEach(() => {
        cy.visit("https://todomvc.com/examples/vanillajs/");

    })

    context("when page initially loaded", () => {

        it("heder of the page should be visible and have proper name", () => {
            cy.get(" .header h1").should("be.visible").and("contain.text", "todos")
        })

        it("input should have proper placeholder", function () {

            cy.get('input').should("have.attr", "placeholder", "What needs to be done?")

        })

    })


    context("when added new item", () => {

        it("should be added only one item", () => {
            cy.get("input.new-todo").type("Hello!").type("{enter}")
            cy.get(".todo-list li").should("have.length", 1)
        })

        it("should add 3 items with proper order", () => {
            const firstItem = "first Item";
            const secondItem = "second Item";
            const thirdItem = "third Item";

            addNewItem(firstItem);
            addNewItem(secondItem);
            addNewItem(thirdItem);

            cy.get(".todo-list li").eq(0).should("contain.text", firstItem);
            cy.get(".todo-list li").eq(1).should("contain.text", secondItem);
            cy.get(".todo-list li").eq(2).should("contain.text", thirdItem);

            cy.get(".todo-list li").should((elements) => {
                console.log(elements);
                expect(elements).to.have.length(3)

                expect(elements[0]).to.contains.text(firstItem)
                expect(elements[1]).to.contains.text(secondItem)
                expect(elements[2]).to.contains.text(thirdItem)

            })
        })
    })

    context("when click checkboxes near added item", () => {

        it("should ticked  checkbox and change number of Left items to 0", () => {

            addNewItem("first")

            cy.get("input[class='toggle']").check()
            cy.get("input[class='toggle']").check().should("be.checked")
            cy.get("span[class='todo-count']").find("strong").should("contain.text", 0)
        })

        it("should add tekst Clear completed", () => {

            addNewItem("first")

            cy.get("input[class='toggle']").check()
            cy.get("button[class='clear-completed']").should('have.attr', 'style', 'display: block;')
            cy.contains('Clear completed').should('be.visible')

        })

    })

    context("when double clik on added item", () => {
        it("should edit item", () =>{
            addNewItem("first")
            cy.get(".todo-list li").dblclick().type("anotherItem").type("{enter}")
            cy.get(".todo-list li").should('be.visible', 'anotherItem')           
        })


    })
})

