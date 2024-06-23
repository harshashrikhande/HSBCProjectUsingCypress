describe('HSBC Login Test Scenario', () => {
  it('Login Test', () => {
    cy.visit('https://www.hsbc.co.in/')
    cy.screenshot();
    cy.get('h1>img').should('be.visible');
    cy.title().should('eq','HSBC India - Credit Cards, NRI Services, Saving and Deposit');
    cy.contains('Log On').click({force: true})
    cy.screenshot();
    cy.contains('Continue to log on with browser').click({force: true});
    cy.screenshot();
    cy.get('#username_submit_btn').should('be.visible');
    cy.get('#username_submit_btn').should('be.disabled');
    cy.wait(1000);
    cy.get('#username').type("use@123", {scrollBehavior: 'center'})
    cy.screenshot();
    cy.get('#username_submit_btn').should('be.enabled');
    cy.wait(1000);
    cy.get('a#username_help_link').click({force: true});
    cy.screenshot();
    cy.contains('Username').should('be.visible');
    cy.get('#Close_dob_exception').click({force: true})
    cy.screenshot();
  })
})


// Open https://www.hsbc.co.in/
// 2. Validate HSBC Bank Logo
// 3. Validate Home Page Title = HSBC India - Credit Cards, NRI Services, Saving
// and Deposit
// 4. Click on Login button
// 5. Validate Log On header in Login page
// 6. Check Continue button is available
// 7. Also validate initially Continue button is disabled.
// 8. Type any random email in the username field
// 9. Now check Continue button is Enabled
// 11. Validate there is a question mark tooltip present on the page
// 12. Click on the tooltip
// 13. Now validate the username header in the new pop-up screen
// 14. Validate there is a Close button in the new pop-up screen
// 15. Click on the close button present in the new pop-up screen
