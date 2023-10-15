
describe('Assertions demo', ()=> {
    it('implicit assertions', ()=>{

        cy.visit('https://accounts.spotify.com/nl/login?continue=https%3A%2F%2Fopen.spotify.com%2F%3F')
        //cy.url().should('include', 'spotify.com')
        //cy.url().should('eq', 'https://accounts.spotify.com/nl/login?continue=https%3A%2F%2Fopen.spotify.com%2F%3F')
        //cy.url().should('contain', 'spotify')

        /*cy.url().should('include', 'spotify.com')
        .should('eq', 'https://accounts.spotify.com/nl/login?continue=https%3A%2F%2Fopen.spotify.com%2F%3F')
        .should('contain', 'spotify')*/

        cy.url().should('include', 'spotify.com')
        .and('eq', 'https://accounts.spotify.com/nl/login?continue=https%3A%2F%2Fopen.spotify.com%2F%3F')
        .and('contain', 'spotify')
        .and('not.contain', 'shopify')

        cy.title().should('include', 'Spoti')
        .and('eq', 'Spotify')
        .and('contain', 'fy')

        cy.get('#login-username').type('test_23')
        cy.get('#login-username').should('have.value', 'test_23')

        cy.get('.sc-khsqcC').should('be.visible')
        .and('exist')

        

    })
})

it('explicit assertions', ()=>{

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("input[placeholder='Username']").type('Admin')
    cy.get("input[placeholder='Password']").type('admin123')
    cy.get("button[type='submit']").click()

    let expName="Anas Collings"; 

    cy.get(".oxd-userdropdown-name").then( (x)=>{

                        let actName=x.text()
                        expect(actName).to.equal(expName)
                        expect(actName).to.not.equal(expName)

                        assert.equal(actName, expName)
                        assert.notEqual(actName, expName)                   
                    })
})
