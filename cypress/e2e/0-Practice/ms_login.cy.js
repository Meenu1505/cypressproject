/// <reference types="cypress" />

// test suite name
describe('User Creation', function () {
    // Test case
       it.skip('User Creation', function (){
          // test step for URL launching
          cy.visit("https://www.amazon.in/");
          cy.get('a[href="https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3Fref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0"]').click();
         // cy.get('#myaccount-menu > a[href="https://www.blair.com/login?action=register"]').click();
          cy.wait(5000);
          cy.get('#ap_email_login').type('9865815858');
          cy.get('.a-button-input').click();
          cy.get('#createAccount[class="a-button-input"]').click();
          cy.get('#ap_customer_name').type('Test FName');
          cy.get('#ap_password').type('Aug@2024');
         // cy.get('.a-button-input').click();
           
         // cy.get('#submitButton').click();
        });
        });
        
        describe('Login', function () {
            // Test case
        it.skip('Login', function (){
        // test step for URL launching
        cy.visit("https://www.amazon.in/");
        cy.get('a[href="https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3Fref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0"]').click();
        // cy.get('#myaccount-menu > a[href="https://www.blair.com/login?action=register"]').click();
        cy.wait(5000);
        cy.get('#ap_email_login').type('meenupriyakuppuraj@gmail.com');
        cy.get('.a-button-input').click();
        cy.get('#ap_password').type('Uma@062020');
        // cy.get('.a-button-input').click();
        cy.get('#signInSubmit').click();
        cy.get('#nav-link-accountList-nav-line-1').contains("Hello, meenupriya");
        cy.log('User Logged in Successfully');
        cy.get('.nav-a[href="/deals?ref_=nav_cs_gb"]').click();
        cy.log('Clicked on Todays Deal')
        cy.get('.dui-truncate-4 > .a-truncate > .a-truncate-cut').click();
        cy.wait(3000);
        cy.log('Selected the Item')

        cy.get('body > div:nth-child(5) > div:nth-child(78) > div:nth-child(7) > div:nth-child(7) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(31) > div:nth-child(1) > div:nth-child(37) > div:nth-child(2) > span:nth-child(1) > span:nth-child(1) > span:nth-child(1) > input:nth-child(2)').click();
        cy.wait(3000);
        cy.get('#attach-close_sideSheet-link').click();
        cy.wait(2000);
        cy.get('.nav-cart-icon nav-sprite').click();
        cy.get('input[name="proceedToRetailCheckout"]').click();
        cy.wait(2000);

        cy.get('input[aria-labelledby="orderSummaryPrimaryActionBtn-announce"]').click();
    });
});

describe('Login and child window', function () {
        // Test case
        it('Login and child window', function (){
        // test step for URL launching
        cy.visit("https://www.amazon.in/");
        cy.get('a[href="https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3Fref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0"]').click();
        cy.wait(3000);
        //login to the application
        cy.get('#ap_email_login').type('meenupriyakuppuraj@gmail.com');
        cy.get('.a-button-input').click();
        cy.get('#ap_password').type('Uma@062020');
        cy.get('.a-button-input').click();
        //assertion
        cy.get('#nav-link-accountList-nav-line-1').contains("Hello, meenupriya").should('be.visible');
        //click on Mobiles in menu bar
        cy.get('[data-csa-c-slot-id="nav_cs_2"]').click();
        cy.wait(5000);
        cy.get(':nth-child(4) > .a-unordered-list > :nth-child(2) > .a-list-item > .a-link-normal > .a-checkbox > label > .a-icon').click();        //verifying that the new tab is opened in the existing tab
        cy.get('#search > div.s-desktop-width-max.s-desktop-content.s-opposite-dir.s-wide-grid-style.sg-row > div.sg-col-20-of-24.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span.rush-component.s-latency-cf-section > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(6) > div > div > span > div > div > div.a-section.a-spacing-small.puis-padding-left-small.puis-padding-right-small > div.a-section.a-spacing-none.a-spacing-top-small.s-title-instructions-style > h2 > a')
        .invoke('removeAttr','target').click();
        cy.wait(5000);

    });
    });