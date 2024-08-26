/// <reference types="cypress" />

// test suite name
describe('Create account and Login', function () {
    // Test case
       it.skip('User Creation and Login', function (){
          // test step for URL launching
          cy.visit('https://www.fingerhut.com/');
         // cy.get('#Cash-Logo[class="img-responsive brand-logo visible-sm visible-md visible-lg"]').should('be.visible');       
          cy.get('#sign-in-dropdown > a').click();
          cy.get('a[data-track-value="Create Account Link"]').click();
          cy.get('#userName').type('meenupriya.k@sonata-software.com');
          cy.get('#confirmUserName').type('meenupriya.k@sonata-software.com');
          cy.get('#password').type('Test@12345');
          cy.get('#confirmPassword').type('Test@12345');     
          cy.get('[data-testid="register-account-button"]').click();
        });
    });

    describe('Login', function () {
      // Test case
    it.skip('User Creation and Login', function (){
      // test step for URL launching
      cy.visit('https://www.fingerhut.com/');
      cy.get('#sign-in-dropdown > a').click();
      cy.get('div.sign-in-register > a[class="btn btn-primary btn-block"]').click();  
      cy.wait(8000);
      cy.get('[alt="Company Logo"]').click();    
      cy.wait(3000);
      cy.get('[data-id="username-input-input"]').type('meenupriya.k@sonata-software.com');
      cy.get('[data-id="password-input-input"]').type('Test@12345');
      cy.get('[data-id="submit-button"]').click();
      cy.wait(8000);

          });
        });
    describe('Item Selection', function () {
  // Test case
      it('Item Selection and moving to cart', function (){
        // test step for URL launching
        cy.visit('https://www.fingerhut.com/');
        cy.get('#sign-in-dropdown > a').click();
        cy.get('div.sign-in-register > a[class="btn btn-primary btn-block"]').click();  
        cy.wait(8000);
        cy.get('[alt="Company Logo"]').click();    
        cy.wait(3000);
        cy.get('[data-id="username-input-input"]').type('meenupriya.k@sonata-software.com');
        cy.get('[data-id="password-input-input"]').type('Test@12345');
        cy.get('[data-id="submit-button"]').click();
        cy.wait(8000);
        cy.get('#shop-by-department-button > span > span').click();
        cy.get('#category-nav-list > li:nth-child(3) > a.menu-item.no-underline.aria-expanded-toggle > span.menu-label').click();  
        cy.get('[data-track-id="Mega:Clothing & Shoes:Womens:Dresses"]').click();     
        cy.get('[class="hidden-xs hidden-sm"] > h2.product-link > a[href="/product/NQ9A9?cat=3697"]').click();
        cy.get('[alt="Red"]').click();
        cy.get('[data-testid="add-to-cart-button"]').click();
        cy.wait(5000);
        cy.get('#shopping-cart-link > span.shopping-cart-label').click();
        cy.wait(5000);
       // cy.get('div.col-sm-6 > h3 >[data-track-id="CO_MiniPdpModal"]').contains('White Mark Women');    
        cy.get('button#_cart_continue_button_top').click();
        cy.wait(8000);
        
      });
    });