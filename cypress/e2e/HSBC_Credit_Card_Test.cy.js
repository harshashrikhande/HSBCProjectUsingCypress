describe('HSBC Credit Card Test Scenario', () => {
  it('Credit Card Test', () => {
    cy.visit('https://www.hsbc.co.in/')
    cy.screenshot();
    cy.xpath('(//span[contains(.,"Banking")])[1]').click({force: true})
    cy.wait(5000);
    cy.screenshot();
    cy.contains('Credit Cards').click({force: true})
    cy.screenshot();
    cy.get('h1').contains('Credit cards');
   cy.xpath('//span[@class="link text"][contains(.,"HSBC Cashback Credit Card")]').click({force: true})
   cy.screenshot();
    cy.wait(5000);
    cy.contains('Apply now').should('be.visible')
    cy.url().should('include', 'credit-cards/products/visa-cashback/');
    cy.get('img[id*="pp_intro_image_"]').should('be.visible')
    cy.xpath('//strong[text()="Joining fee "]/following::span[1]').contains('INR999');
    cy.xpath('//strong[text()="Annual fee "]/following::span[1]').contains('INR999 (waived if you spend more than INR200,000 per year) ');
    cy.get('img[id*="LPMimage-"]').should('be.visible')
    cy.get('div[class*="header-logo lg-"]>a').click({force: true})
    cy.screenshot();
    cy.title().should('eq','HSBC India - Credit Cards, NRI Services, Saving and Deposit')

  })
})


// 1. Open https://www.hsbc.co.in/ //span[@class='link text'][contains(.,'HSBC Cashback Credit Card')]
// 2. Hover cursor on Banking menu navigation
// 3. Click on Credit Cards link
// 4. Validate Credit Card as a header text
// 8. Validate second credit Card header text is HSBC Cashback Credit Card
// 10. Click on the HSBC cashback Credit card
// 11. Validate there is Apply now button
// 12. Validate the URL contains credit-cards/products/visa-cashback/
// 13. Validate the HSBC credit card image is displayed
// 14. Validate the joining fee mentioned as INR999
// 15. Validate the text mentioned as INR999 (waived if you spend more than INR200,000 per year)  
// 16. Validate the Chat image is displayed in the bottom 
// 16. Click on HSBC Logo
// 17. Validate page is navigating to home page by its title
