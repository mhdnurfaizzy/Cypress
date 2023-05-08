describe('Check UI Elements', () => {

it("Checking radio button",  ()=> {
    cy.visit("https://itera-qa.azurewebsites.net/home/automation")

    // visibilitry of radio button
    cy.get("#female").should('be.visible')
    cy.get("#male").should('be.visible')
    
    //selecting radio button
    cy.get("#female").check().should('be.checked')
    cy.get("#male").should('not.be.checked')

    cy.get("#male").check().should('be.checked')
    cy.get("#female").should('not.be.checked')


})

it("Checking Checkbox button",  ()=> {
    cy.visit("https://itera-qa.azurewebsites.net/home/automation")

    // visibilitry of checkbox button
    cy.get('#monday').should('be.visible')

    //selecting checkbox button - monday
    cy.get('#monday').check().should('be.checked')

    //unselecting checkbox - monday
    cy.get('#monday').uncheck().should('not.be.checked')

    //selecting all checkbox
    cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
    
    //unselecting all checkbox 
    cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

    //selecting first checkbox
    cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
    
    //selecting last checkbox
    cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')




})

})