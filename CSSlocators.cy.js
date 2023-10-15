
describe('CSSLocators', () => {

it('csslocators', () =>{

    cy.visit('https://www.bol.com/nl/nl/')
    
    cy.get('#searchfor').type('T-shirts')

    //cy.get("input.wsp-search_input js-search-input[[name ='searchtext']").type('T-shirts')

    cy.get("[type='submit']").click

    cy.get('.h1 bol_header').contains("‘t shirt’ in Alle artikelen")

    })
})