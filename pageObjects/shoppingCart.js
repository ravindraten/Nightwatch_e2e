var cartCommands = {
    shoppingCart: function () {
        return this.waitForElementVisible('@cartIcon')
            .click('@cartIcon')
            .waitForElementVisible("@continueToCheckout")
            .click('@continueToCheckout')
    }
}

module.exports = {
    commands: [cartCommands],
    elements: {
        cartIcon: {
            selector: '.mainHeader__button.mainHeader__button--icon.mainHeader__cartButton'
        },
        continueToCheckout:{
            selector: 'button[data-testid="cart-continue-to-checkout-top-button"]'
        }
    }
}