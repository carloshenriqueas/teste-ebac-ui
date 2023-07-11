/// <reference types="cypress" />

context('Funcionalidade Login', ()=>{
    
    beforeEach(()=>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    })
    
    it('login com sucesso', ()=>{
        cy.get('#username').type('carloshenrique39@gmail.com')
        cy.get('#password').type('240388chas')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
    })

    it('usuário incorreto', ()=>{
        cy.get('#username').type('carloshenrique#gmail.com')
        cy.get('#password').type('240388chas')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain','Erro: o usuário')
    })

    it('senha incorreta', ()=>{
        cy.get('#username').type('carloshenrique39@gmail.com')
        cy.get('#password').type('240388')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: a senha')
    })
})