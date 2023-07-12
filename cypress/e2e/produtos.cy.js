/// <reference types="cypress" />

context('inserir produtos no carrinho', ()=>{
    beforeEach(()=>{
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    })

    it('seleciona produto', ()=>{
        cy.get('[class="product-block grid"]').eq(5).click()
    })

    it('seleciona produto e verifica carrinho', ()=>{
        let posicao = 0;
        let quantidade = 8
        cy.get('[class="product-block grid"]').eq(posicao).click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain',quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade +' × “Abominable Hoodie” foram adicionados no seu carrinho.')
    })
})