describe('Login Tokopedia', () => {
    
    it('Go to site', () => {
      cy.visit('https://tokopedia.com/')
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
        cy.wait(5000)
        //pop up
        cy.get('.css-18qem4c.e1nc1fa22', {timeout : 3000}).then(($el) => {
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
        
        // Go to Cart Page
        cy.get('.css-15kuy91').click()
        cy.get('.css-1x8eu1x-unf-heading.e1qvo2ff3')
        .should('be.visible')
        .and('contain', 'Keranjang')
        
        cy.wait(3000)
        //Checklist all product
        cy.get('[data-testid="cartDeleteSelectedProduct"]').then(($cart) => {
            if ($cart.length) {
            //Element exist
             cy.log('Atc product')
            } else {
            // Element does not exist, do something else
            cy.get(".unf-checkbox__area.checkbox-area").click()
            cy.log('Try Atc Product')
            }
            });
        
        //Add qty first product
        cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)')
        .should('be.visible')
        cy.xpath("//div[@class='parent__left-side']//div//div[1]//div[1]//div[2]//div[2]//div[3]//div[1]//button[2]//span[1]//*[name()='svg']")
        .should('be.visible')
        .click()
        
        //Add qty second product
        cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2)')
        .should('be.visible')
        cy.xpath("//div[@class='css-1nggwac']//div[2]//div[1]//div[2]//div[2]//div[3]//div[1]//button[2]//span[1]//*[name()='svg']")
        .should('be.visible')
        .click()




    })
  
  })
  