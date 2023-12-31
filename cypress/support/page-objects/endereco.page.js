class EnderecoPage{
editarEnderecoFaturamento(nome, sobrenome, pais, endereco, cidade, estado, cep, telefone){
    cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
    cy.get(':nth-child(1) > .title > .edit').click()
    cy.get('#billing_first_name').clear().type(nome)
    cy.get('#billing_last_name').clear().type(sobrenome)
    cy.get('#select2-billing_country-container').click().type(pais).get('[aria-selected="true"]').click()
    cy.get('#billing_address_1').clear().type(endereco)
    cy.get('#billing_city').clear().type(cidade)
    cy.get('#select2-billing_state-container').click().type(estado +'{enter}')
    cy.get('#billing_postcode').clear().type(cep)
    cy.get('#billing_phone').clear().type(telefone)
    cy.get('.button').click()
}

editarEnderecoEntrega(nome, sobrenome, pais, endereco, cidade, estado, cep ){
    cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
    cy.get(':nth-child(2) > .title > .edit').click()
    cy.get('#shipping_first_name').clear().type(nome)
    cy.get('#shipping_last_name').clear().type(sobrenome)
    cy.get('#select2-shipping_country-container').click().type(pais + '{enter}')
    cy.get('#shipping_address_1').clear().type(endereco)
    cy.get('#shipping_city').clear().type(cidade)
    cy.get('#select2-shipping_state-container').click().type(estado + '{enter}')
    cy.get('#shipping_postcode').clear().type(cep)
    cy.get('.button').click()
}
}
export default new EnderecoPage()