describe("ToDo app", () => {
    beforeEach(() => {
        cy.visit("https://todomvc.com/examples/vanillajs/")
    })
    const addNewItem = (itemName) => {
        cy.get("input.new-todo").type(itemName).type("{enter}");
    }

    context("when add 3 items and tick checkbox -one of them", () => {
        it("should number of left items should be only 2", () => {

        addNewItem("aaa")
        cy.get("input[class='toggle']").check()
        addNewItem("bbb")
        addNewItem("ccc")
        cy.get("span[class='todo-count']").find("strong").should("contain.text", 2)
        })
    })


})
