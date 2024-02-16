describe('Verify Browser Stack Home Page', () => {

    it.skip('Verify Browserstack logo is visible', () => {

        cy.visit('https://www.browserstack.com/');
        cy.pause();

        cy.get('#logo').should('be.visible');

    })

    it.skip('Click on Product Menu', () => {
        cy.visit('https://www.browserstack.com/');
        cy.get('#product-menu-toggle1').then((yieldedSubject)=>{
            console.table(yieldedSubject);
            debugger;
        })

    })

})