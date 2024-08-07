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
          cy.get('.XNo5Ab[src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAdVBMVEXBMzXBMjTAKy3COTvXiou9FxrUgIHv0dG9Gh3ALjDsycm+HyL89vb68PDHTU/EQkT////eoKG+ISS+Iybir6+/KCrPb3Dbl5jcmZrSe3zKWVvZkJD++/v36eq8AAnnvb3hqqrz3t/ktLW9Exfz39/NZWa7BQy0mgKcAAABCklEQVR4AY2QBZaEMBAF08HS6CfBXff+N1w3hrFCIvVem3gCkv9Pkg7Osh36PTi2dbDS9RR/bVn5rjyGDcIo5k8XR2FA4gAnSLV4R6dIWFxgMlj0kR2ZOcTMc8lCFWX+TlkowTLP6dslVVk3hqTI21YLSaapyyr5sYGPzpZkIqBXJN0O/r+agmHsptxGOqGWUzcOh3pJO4JtTBlqFo6m0wQp6IFZEYlrBAuwBOI6a7f13Xrd8Y50wc5XpV6QFlj09agRECK6Gpcb+IMHNNfimgnLjA2TuRa1B3yy0F+JywnCDlsZIuZz1BTTUIwhkJ7jqg27lPqlxuacJaBICNJAcJLETL/r2dLv+hRvv5oREgsgYMsAAAAASUVORK5CYII="]').click();

             });
    });