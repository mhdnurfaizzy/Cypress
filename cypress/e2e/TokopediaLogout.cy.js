describe('Login Tokopedia', () => {
    
    it('Go to site', () => {
      cy.visit('https://staging.tokopedia.com/')
      cy.title().should('eq', 'Situs Jual Beli Online Terlengkap, Mudah & Aman | Tokopedia')
    })

    it('Click Button Login', () => {
        cy.visit('https://staging.tokopedia.com/')
        cy.get('.css-2hev56')
        .should('be.visible')
        .and('contain', 'Masuk')
        .click()
    })

    it('Input email & password', () => {
        cy.visit('https://staging.tokopedia.com/')
        cy.get('.css-2hev56')
        .should('be.visible')
        .and('contain', 'Masuk')
        .click()
        cy.get('#email-phone').type('pbs-muhammad.nurfaizi@tokopedia.com')
        cy.get("button[id='email-phone-submit'] span")
        .should('be.visible')
        .and('contain', 'Selanjutnya')
        .click()
        cy.get('#password-input', {timeout: 2000}).type('tokopedia789')
        cy.get('.css-1a4igan-unf-btn.eg8apji0')
        .should('be.visible')
        .and('contain', 'Masuk')
        .click()
    })

    it('Verify Login', () => {
        cy.visit('https://staging.tokopedia.com/')
        cy.xpath("//button[normalize-space()='Masuk']")
        .should('be.visible')
        .and('contain', 'Masuk')
        .click()
        cy.get('#email-phone').type('pbs-muhammad.nurfaizi@tokopedia.com')
        cy.get("button[id='email-phone-submit'] span")
        .should('be.visible')
        .and('contain', 'Selanjutnya')
        .click()
        cy.get('#password-input', {timeout: 2000}).type('tokopedia789')
        cy.get('.css-1a4igan-unf-btn.eg8apji0')
        .should('be.visible')
        .and('contain', 'Masuk')
        .click()
        cy.get("div[id='my-profile-header'] div[class='css-67arje']", { timeout: 10000 })
        .should('be.visible')
        .and('contain', 'Muhammad')
    })

    it.only('Go to Cart Page', () => {
        cy.visit('https://staging.tokopedia.com/', {timeout : 90000})
        cy.reload()
        cy.xpath("//button[normalize-space()='Masuk']")
        .should('be.visible')
        .and('contain', 'Masuk')
        .click()
        cy.get('[data-testid="email-phone-input"]')
        .should('be.visible')
        .type('pbs-muhammad.nurfaizi@tokopedia.com')
        cy.get("button[id='email-phone-submit'] span")
        .should('be.visible')
        .and('contain', 'Selanjutnya')
        .click()
        cy.wait(3000)
        cy.get('#password-input', {timeout: 2000}).type('tokopedia789')
        cy.get('.css-1a4igan-unf-btn.eg8apji0')
        .should('be.visible')
        .and('contain', 'Masuk')
        .click()
        cy.log('Berhasil Login')
        cy.wait(10000)

        //pop up
        cy.get('.css-18qem4c.e1nc1fa22').then(($el) => {
            if ($el.length) {
            //Element exist
             cy.xpath("//button[@aria-label='Tutup tampilan modal']//*[name()='svg']").click()
             cy.log('Muncul pop up')
            } else {
            // Element does not exist, do something else
            cy.get("div[id='my-profile-header'] div[class='css-67arje']", { timeout: 10000 })
            .should('be.visible')
            .and('contain', 'Muhammad')
            cy.log('Akun Muhammad')
            }
            });

        cy.wait(3000)


        // Logout 
        cy.reload()
        cy.wait(3000)
        cy.get('[data-testid="btnHeaderMyProfile"] > .css-lipffl')
        .trigger('mouseover').wait(2000);

        // Wait for the dropdown to become visible
        cy.get('.css-1pxyyq2', {timeout : 2000 }).should('be.visible').then(($dropdown) => {
        // Click the logout button inside the 
        // cy.wait(2000)
        // cy.get('.css-1juts7j').scrollIntoView()
        cy.get('.css-1juts7j').should('be.visible').click()
        cy.wrap($dropdown).click()
        });
    })
  
  })
  