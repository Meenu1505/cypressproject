/// <reference types="cypress" />

// test suite name
describe('Login', function () {
    // Test case
       it('User Creation and Login', function (){
          // test step for URL launching
          cy.visit("https://www.blair.com/");
          cy.get('#my-account-select-chevron-icon').click();
          cy.get('#myaccount-menu > a[href="https://www.blair.com/login?action=register"]').click();
          cy.wait(5000);
          //cy.get('#userNameInput').type('meenupriya.k@sonata-software.com');
         // cy.get('#passwordInput').type('Aug@2024');
         // cy.get('#submitButton').click();
        });
    });