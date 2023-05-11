describe('Handle Tabs', () => {

    it('Approach1', () => {
      cy.visit('https://the-internet.herokuapp.com/windows') //parent tab

      cy.get("a[href='/windows/new']").invoke('removeAttr', 'target').click() //click link

      cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new') //child tab

      cy.go('back') //back to parent tab
    })

    it.only('Approach2', () => {
      cy.visit('https://the-internet.herokuapp.com/windows') //parent tab

      cy.get("a[href='/windows/new']").then((e)=>{
        let url=e.prop('href')
        cy.visit(url)
      })

      cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new') //child tab

      cy.go('back') //back to parent tab
    })
    
  
  })
  
  