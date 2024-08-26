/// <reference types="cypress" />

// test suite name
describe('Search', function () {
    // Test case
       it('Scenario 1', function (){
          // test step for URL launching
          cy.visit("sonataone.darwinbox.in");
          //cy.get('input[type="search"]').click();
          cy.get('#userNameInput').type('meenupriya.k@sonata-software.com');
          cy.get('#passwordInput').type('Aug@2024');
          cy.get('#submitButton').click();
          cy.wait(5000);
         cy.get('.module-icon-wrapper > img[src="/images/Icons_latest/pending-action.png"]').click({force: true});
   
        //cy.get('img[src="https://darwinbox-data-prod-mum.s3.ap-south-1.amazonaws.com/INSTANCE7_5f92655067c56_7/workflows/60191be9906ba__1612258281_timesheet.png"]').scrollIntoView();
        cy.wait(3000);
       
        });
    });