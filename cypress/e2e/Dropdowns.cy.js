describe('Handle Dropdowns', () => {

    it('Dropdown with select', () => {
        cy.visit('https://www.zoho.com/commerce/free-demo.html')

        cy.get('#zcf_address_country').select('India').should('have.value', 'India')
    })

    it('Dropdown without select', () => {
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

        cy.get('#select2-billing_country-container').click()
        cy.get("input[role='combobox']").type('Japan').type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text', 'Japan')

    })

    it('Auto Suggestion Dropdown', () => {
        cy.visit('https://www.wikipedia.org/')

        cy.get('#searchInput').type('Japan Air')

        cy.get('.suggestion-title').contains('Japan Airlines').click()

    })

    it('Dynamic Dropdown', () => {
        cy.visit('https://www.google.com/')

        cy.get('#APjFqb').type('Japan Air')

        cy.wait(3000)

        cy.get('div.wM6W7d>span').each(($el,index, $list)=>{
            if($el.text()=='Japan Airlines')
            {
                cy.wrap($el).click()
            }
        })
        cy.get('#APjFqb').should('have.value','japan airlines')

    })
  
  })
  
  