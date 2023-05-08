const { expect } = require("chai")

describe('My Four Test', () => {
    
    it('Implicit Assertions', () => {
      cy.visit('https://www.saucedemo.com/')

      //should and
    //   cy.url().should('include', 'saucedemo.com')
    //   cy.url().should('eq', 'https://www.saucedemo.com/')
    //   cy.url().should('contain', 'saucedemo')

      //simple write
    //   cy.url().should('include', 'saucedemo.com')
    //   .should('eq', 'https://www.saucedemo.com/')
    //   .should('contain', 'saucedemo')

      //simple write using and
      cy.url().should('include', 'saucedemo.com')
      .and('eq', 'https://www.saucedemo.com/')
      .and('contain', 'saucedemo')
      .and('not.contain', 'saucereal') //negative-case

      cy.title().should('include', 'Swag')
      .and('contain', 'Labs')
      .and('eq', 'Swag Labs')

      // check element/image
      cy.xpath("//div[@class='login_logo']").should('be.visible')
      .and('exist')

      
    })

    it('Explicit Assertions', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

      cy.get("input[placeholder='Username']").type('Admin')
      cy.get("input[placeholder='Password']").type('admin123')
      cy.get("button[type='submit']").click()

      let expName="prashant singh";

      cy.get('.oxd-userdropdown-name').then ( (x) => {
        let actName=x.text()

        // BDD Style
        expect(actName).to.equal(expName)
        expect(actName).to.not.equal(expName)

        //TDD Style
        assert.equal(actName, expName)
        assert.notEqual(actName, expName)

      })



      
    })


  })