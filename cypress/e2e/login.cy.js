/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')

context('Funcionalidade Login', ()=>{
    
    beforeEach(()=>{
        cy.visit('minha-conta/')
    })
    
    it('login com sucesso', ()=>{
        cy.get('#username').type('carloshenrique39@gmail.com')
        cy.get('#password').type('240388chas')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
    })

    it('login com arquivo de dados', ()=>{
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')  
    })

    it.only('login com arquivo usando fixtures', ()=>{
        cy.fixture('perfil').then(dados=>{
        cy.get('#username').type(dados.usuario)
        cy.get('#password').type(dados.senha, {log:false})
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')  
        })
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