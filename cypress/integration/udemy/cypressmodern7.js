describe(" 7 Test Suite", () => {
    before(function () {
        cy.fixture('example').then(function(data)
         {
            this.data=data
        })

    })
    
    it("7 case", () => {

        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)  //("biok") //(this.data.name)
        cy.get('select').select("Female")
        //(this.data.gender)
        //("Female") //(


    })
})
