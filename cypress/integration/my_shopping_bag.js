
it('cart test',() =>{
    cy.visit('https://www.pomelofashion.com/th/en/')
    
    //add product to cart
    cy.get('[data-cy="nav_desktop__brand"] > .jsx-3342260016 > .jsx-17203350').click()
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2) > .jsx-3504468287').click()
    cy.get('[data-cy="product_item__description_72479"] > .product_description__wrapper').click()
    cy.get('.jsx-971255180 > :nth-child(3)').click()

    cy.get('.pml-btn-pri')
        .should('contain','Add To Bag')
        .click()
    
    cy.get('[data-cy="cart__view_bag"]').click()
    cy.get('[data-cy="close_cart"] > .jsx-1694967188').click()

    //change quantity
    cy.get('[data-cy="nav_user__cart"] > .pomelo-icon > .jsx-1694967188').click()
    cy.get('.cart-item-info__quantity > .pml-input-layout__container > .pml-input-layout__input-wrapper > .body1 > .pml-dropdown__select')
        .select('3')
    cy.get('.cart-item-info__quantity > .pml-input-layout__container > .pml-input-layout__input-wrapper > .body1 > .pml-dropdown__select')
        .should('have.value','3')
    cy.get('.cart-item-info__quantity > .pml-input-layout__container > .pml-input-layout__input-wrapper > .body1 > .pml-dropdown__select')
        .select('2')
    cy.get('.cart-item-info__quantity > .pml-input-layout__container > .pml-input-layout__input-wrapper > .body1 > .pml-dropdown__select')
        .should('have.value','2')
    
    //change size
    cy.get('.cart-item-info__size > .pml-input-layout__input-wrapper > .body1 > .pml-dropdown__select')
        .select('L')
    cy.get('.cart-item-info__size > .pml-input-layout__input-wrapper > .body1 > .pml-dropdown__select')
        .should('have.value','222925')

    //delete product from cart
    cy.get('.jsx-1747397204 > .pomelo-icon > .jsx-1694967188').click()

    // cy.get('.empty-cart').should('have.text','Your Bag is Empty')

    //add product to cart again
    cy.get('[data-cy="close_cart"] > .jsx-1694967188').click()
    cy.get('[href="/th/en/tops/72478-tweed-button-up-top-black.html"]').click()
    cy.get('.jsx-971255180 > :nth-child(4)')
        .should('have.text','M')
    cy.get('.pdp__options-container > .jsx-971255180').click()
    cy.get('div.jsx-971255180 > :nth-child(4)').click()
    // cy.get('.pdp__options-container > .jsx-971255180 > :nth-child(2)').click()
    cy.get('.pml-btn-pri').click()
    cy.get('[data-cy="cart__view_bag"]').click()

    //type promocode that cannot use
    cy.get('.cart-discount__main > .pml-input-layout__container > .jsx-958784943 > .pml-input__wrapper > .jsx-1695452889')
        .type('promotest')
    cy.get('.cart-discount__main > .jsx-3342260016').click()


    //check out button
    cy.get('[data-cy="cart__checkout"]').click()


})