/// <reference types="cypress" />

// test suite name
describe('Search', function () {
   // Test case
      it('Scenario 1', function (){
         // test step for URL launching
         cy.visit("https://www.google.com/");
         //cy.get('input[type="search"]').click();
         //cy.get('input[class="truncate"]').click();
         //cy.get('.truncate').click();
         cy.get('.gLFyf[title="Search"]').type('Javascript Tutorials {enter}');
         cy.wait(8000);
         cy.get(':nth-child(1) > .MjjYud > .g > .N54PNb > .jGGQ5e > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb').click();
         cy.wait(6000);

            });
   });