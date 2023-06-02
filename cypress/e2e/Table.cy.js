describe('Handle Table', () => {

    beforeEach('Login', () => {
        cy.visit('https://demo.opencart.com/admin/index.php')
        cy.get('#input-username').type('demo')
        cy.get('#input-password').type('demo')
        cy.get("button[type='submit']").click()

        cy.get('.btn-close').click();
        //Customers--> Customers
        cy.get(".parent.collapsed[href='#collapse-5']").click();
        cy.get("li[id='menu-customer'] li:nth-child(1) a:nth-child(1)").click();

    })

    it('Check Number Rows & Colomns', () => {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length', '10')
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length', '7')
    })
    
    it('Check cell data from specific row & colomn', () => {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)")
        .contains('xvrt@test.com')
    })

    //Minute 29:00
    it('Read all the rows & colomn data in the first page', () => {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
        .each( ($row, index, $rows) =>{
            cy.wrap($row).within( ()=>{

                cy.get('td').each( ($col, index, $cols)=>{
                    cy.log($col.text())
                })
            })
        })
    })
    
    //Minute 37:00
    it.only('Pagination', () => {

        //find total number of pages
        // let totalPages;
        // cy.get(".col-sm-6.text-end").then( (e)=>{
        //     let mytext=e.text() //Showing 1 to 10 of 13117 (1312 Pages)
        //     totalPages=mytext.substring(mytext.indexOf("(")+1, mytext.indexOf("Pages")-1 )
        //     cy.log("Total number of pages in a table====>"+totalPages)
        // })

        let totalPages=5;

        for(let p=1;p<=totalPages;p++)
        {
            if(totalPages>1)
            {
                cy.log("Active page is ====>"+p);

                cy.get("ul[class='pagination']>li:nth-child("+p+")")
                cy.wait(3000)
                cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                .each( ($row, index, $rows) =>{
                    cy.wrap($row).within( ()=> {
                        cy.get("td:nth-child(3)").then( (e)=>{
                            cy.log(e.text()) //Colomn Email
                        })
                    })
                })
            }
        }


        
    })
  
  })

  // source : https://www.youtube.com/watch?v=uDpJsk4ReuY&list=PLUDwpEzHYYLvA7QFkC1C0y0pDPqYS56iU&index=12&ab_channel=SDET-QAAutomationTechie
  
  