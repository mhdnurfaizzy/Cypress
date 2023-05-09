const { expect } = require("chai")

describe('Alerts', () => {

    it('JS Alerts', () => {
      cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
      cy.get("button[onclick='jsAlert()']").click()

      cy.on('window:alert', (t) =>{
            expect(t).to.contains('I am a JS Alert')
      })

      //alert window will close automaticly by cypress
      cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })

    //(2) Javascript Confirm Alaerts: It will have some text with "Ok" and "Cancle" button
    it('JS Alerts - OK Button', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()
  
        cy.on('window:confirm', (t) =>{
              expect(t).to.contains('I am a JS Confirm')
        })
  
            //cypress automaticly closed alert window using "Ok" button -default
        cy.get('#result').should('have.text', 'You clicked: Ok')
      })

    it('JS Alerts - Cancle Button', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()
  
        cy.on('window:confirm', (t) =>{
              expect(t).to.contains('I am a JS Confirm')
        })

        cy.on('window:confirm', ()=> false) // cypress close automaticly closed by "Cancle" button
  
        cy.get('#result').should('have.text', 'You clicked: Cancel')
      })

    // Javascript Prompt Alert : It will have some text with a text box for user input along with "OK"
    it('JS Prompt Alerts', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win)=>{
        cy.stub(win, 'prompt').returns('welcome')
        })

        cy.get("button[onclick='jsPrompt()']").click

        // cy.on('window:prompt', ()=> false) // cypress close automaticly closed by "Cancle" button
        //cypress automaticly closed alert window using "Ok" button -default
        cy.get('#result').should('have.text', 'You entered: welcome')
        
        })

    // Authenticated Alert
    it.only('Authenticated alert', ()=> {
        cy.visit('https://the-internet.herokuapp.com/basic_auth', { auth: {username:'admin',password:'admin'} })

        cy.get("div[class='example'] p").should('have.contain','Congratulations! You must have the proper credentials.')
    })
  
  })
  
  