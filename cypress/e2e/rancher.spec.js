describe('Rancher Tests', () => {

    beforeEach(() => {
        cy.visit('https://localhost/dashboard/home');
        cy.get('#username').type('admin'); 
        cy.get('[type=password]').type('Test!2345678'); 
        cy.get('#submit').click();
    });

    it('User should successfully log in to Rancher UI', () => {        
        cy.url().should('include', 'dashboard/home');
    });

    it('User should see main page after log in', () => {
        cy.get('.main-panel').should('be.visible'); 
    });

    it('User should have the correct title', () => {
        cy.title().should('eq', 'Rancher');
    });
});