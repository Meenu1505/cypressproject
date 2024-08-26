/// <reference types="cypress" />

describe('RedBus', function () {
   // Test case
      it('Scenario 1', function (){
         // test step for URL launching
         cy.visit("https://www.redbus.com/");
         cy.get('button[class="sc-fjdhpX jxFepI"]').click();
         cy.wait(3000);
         cy.scrollTo('top');
         cy.wait(3000);
         //cy.get('#src').type('Chennai');

         cy.get('main.rh_content > div#rdc-root > div > div > div > div > div > div > div > div> input#src')
         .click({force: true}).type('Chennai');
         cy.get('main.rh_content > div#rdc-root > div >div > div >div >div >div >div > div> input#dest')
         .click({force: true}).type('Bangalore');
         cy.get('#search_butn').click({force: true});

          });
   })