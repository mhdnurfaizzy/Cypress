import 'cypress-iframe'

describe('Handling Frames', () => {

    it('Approach1', () => {
      cy.visit('https://the-internet.herokuapp.com/iframe')

      const iframe=cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)

      iframe.clear().type('Welcome {cmd+a}')

      cy.get("button[title='Bold']").click()

    })

    it('Approach2 - by using command', () => {
      cy.visit('https://the-internet.herokuapp.com/iframe')

      cy.getIframe('#mce_0_ifr').clear().type('Welcome {ctrl+a}')

      cy.get("button[title='Bold']").click()

    })

    it('Approach - by using cypress plugin', () => {
      cy.visit('https://the-internet.herokuapp.com/iframe')

      cy.frameLoaded('#mce_0_ifr') //Load the Frame
      cy.iframe('#mce_0_ifr').clear().type('Welcome {ctrl+a}')
      cy.get("button[title='Bold']").click()

    })
    

  
  })
  
  