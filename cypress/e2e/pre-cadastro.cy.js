/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');
context('pre cadastro cliente', ()=>{

    beforeEach(()=>{
        cy.visit('minha-conta/')
    })

    it('novo cadastro completo', ()=>{
        
        let fakername = faker.name.firstName();
        let fakerlastname = faker.name.lastName()
        let fakeremail = faker.internet.email(fakername);

        cy.get('#reg_email').type(fakeremail).
        cy.get('#reg_password').type('1234@1234')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(fakername)
        cy.get('#account_last_name').type(fakerlastname)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'sucesso')
    })

})