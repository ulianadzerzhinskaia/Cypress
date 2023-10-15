describe('Alerts', ()=>{
    it('JS alert', ()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get("button[onclick='myFunctionAlert()']").click
        cy.on('window:alert', (t)=>{
            expect(t).to.contain('I am an alert box!')
        })
    })
    it('JS confirm alert - OK', ()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get("button[onclick='myFunctionConfirm()']").click
        cy.on('window:confirm', (t)=>{
            expect(t).to.contain('Press a button!')
            })
        cy.get('#demo').should('have.text', 'You pressed OK!')
})
it('JS confirm alert - Cancel', ()=>{
    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.get("button[onclick='myFunctionConfirm()']").click
    cy.on('window:confirm', (t)=>{
        expect(t).to.contain('Press a button!')
        })
    cy.on('window:confirm', ()=> false);
    cy.get('#demo').should('have.text', 'You pressed Cancel!')
})
it('JS prompt alert', ()=>{
    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.window().then((win)=>{
        cy.stub(win, 'prompt').returns('Winston');
    })
    cy.get("button[onclick='myFunctionPrompt()']").click;
    cy.on('window:prompt',()=> false);
    cy.get('#demo').should('have.text', '')
})
it('Authenticated alert', ()=>{
    cy.visit('https://the-internet.herokuapp.com/basic_auth', {auth: {username: "admin", password: "admin" }});
    cy.get("div[class='example'] p").should('have.contain', 'Congratulations')
    
})
it.only('Authenticated alert 2', ()=>{
    cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth');
    cy.get("div[class='example'] p").should('have.contain', 'Congratulations');
    
})
})