describe('My Second Test', () => {
    
    it('Login- positive', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.get('#user-name').type('standard_user') //id
      cy.get('#password').type('secret_sauce') //id
      cy.get("[name='login-button']").click() //atribute
      cy.get('.title').contains('Product') //assertion
      
    })


    it('Login negative - wrong credential', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.get('#user-name').type('standard_user') //id
      cy.get('#password').type('secret_sauce12') //id
      cy.get("[name='login-button']").click() //atribute
      cy.get("[data-test='error']").should('be.visible') //atribute
      cy.get('.error-button') //class
    })
  })