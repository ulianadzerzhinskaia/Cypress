/// <reference types ="Cypress"/>

describe('handle dropdowns', ()=>{
    it.skip('dropdown with select', ()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#country')
        .select('France')
        .should('have.value', 'france')
    
    })
    it.skip('dropdown without select', ()=>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Sweden').type('{enter}')
        cy.get('#select2-billing_country-container')
        .should('have.text', 'Sweden')
})
    it.skip('Auto suggest dropdown', ()=>{
    cy.visit('https://www.wikipedia.org/')
    cy.get('#searchInput').type('Stockholm')
    cy.get('.suggestion-title').contains('Stockholm Metro').click()
  
})
it('Dynamic dropdown', ()=>{
    cy.visit('https://www.google.com/')
    cy.get("#APjFqb").type('cypress automation')
    cy.wait(3000)
    cy.get('div.ClJ9Yb > span').should('have.length', 12)
    cy.get('div.ClJ9Yb > span').each( ($el, index, $list)=>{
        if($el.text()=='cypress automation training')
        {
            cy.wrap(($el)).click()
        }
    })
    cy.get("#APjFqb").should('have.value','cypress automation training')
  
    })