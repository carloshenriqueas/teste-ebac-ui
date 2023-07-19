/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'
var enderecoDados = require('../fixtures/endereco.json')

context('Funcionalidade Endereços - Faturamento e Entrega', ()=>{
    
    beforeEach(()=>{
        cy.visit('minha-conta/')
        cy.fixture('perfil').then(dados=>{
            cy.login(dados.usuario, dados.senha)
        })
        
    })

    it('Deve fazer cadastro de faturamento com sucesso', ()=>{
        EnderecoPage.editarEnderecoFaturamento('Joao', 'Rocha', 'Argentina', 'Praca 13', 'Rosário', 'Santa Fe', '458788', '77999958987')
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
    })

    it('Deve fazer cadastro de faturamento com sucesso usando arquivos de dados', ()=>{
        EnderecoPage.editarEnderecoFaturamento(enderecoDados[1].nome, enderecoDados[1].sobrenome , enderecoDados[1].pais, enderecoDados[1].endereco, enderecoDados[1].cidade, enderecoDados[1].estado, enderecoDados[1].cep, enderecoDados[1].telefone)
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
    })

    it.only('Deve fazer cadastro endereço de entrega com sucesso', ()=>{
        EnderecoPage.editarEnderecoEntrega(enderecoDados[0].nome, enderecoDados[0].sobrenome, enderecoDados[0].pais, enderecoDados[0].endereco, enderecoDados[0].cidade, enderecoDados[0].estado, enderecoDados[0].cep )
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
    })
})
