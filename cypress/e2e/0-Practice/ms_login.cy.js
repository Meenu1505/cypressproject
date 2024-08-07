/// <reference types="cypress" />

// test suite name
/*describe('User Creation', function () {
    // Test case
       it('User Creation', function (){
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
        */
describe('Login', function () {
            // Test case
        it('Login', function (){
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
        cy.get('#nav-main>div>a>i').click();
        cy.get('.hmenu-item[data-menu-id="9"]').click();
        cy.wait(2000);
        cy.get('#hmenu-content > ul.hmenu.hmenu-visible.hmenu-translateX > li:nth-child(3) > a').click();
        cy.wait(2000);
        cy.get('a[href="/s?bbn=1389396031&rh=n%3A1389396031%2Cp_n_feature_thirteen_browse-bin%3A14354457031&dc&qid=1723031382&rnid=14354437031&ref=lp_1389396031_nr_p_n_feature_thirteen_browse-bin_0"]').click();
        cy.wait(2000);
        cy.get('#a-autoid-0-announce').click();
        
        cy.get('#nav-cart-count').contains("Samsung 163 cm (65 inches) D Series Crystal 4K Vivid Ultra HD Smart LED TV UA65DUE70BKLXL (Black)");
    });
    });