describe('My Third Test- XpathLocator', () => {
    
    it('Login- positive', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.get('#user-name').type('standard_user') //id
      cy.get('#password').type('secret_sauce') //id
      cy.get("[name='login-button']").click() //atribute
      cy.get('.title').contains('Product') //assertion
      cy.xpath("//div[@class='inventory_list']/div").should('have.length',6) //find list product with xpath
    
    })


  })

//Xpath
//   npm install -D cypress-xpath
//   add entry in command.js
//     <reference types="Cypress-xpath" />
//   e2e.js
//     require('cypress-xpath')