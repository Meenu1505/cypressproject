/// <reference types="cypress" />

// test suite name
describe('New Tab', function () {
    // Test case
       it('New Tab', function (){
          // test step for URL launching
          cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
          cy.get('#opentab').invoke('removeAttr', 'target').click();
       })
    })