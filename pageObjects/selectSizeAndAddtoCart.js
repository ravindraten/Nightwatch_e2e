var selectSizeCommands = {
    selectSizeAndAddtoCart: function () {
        return this.waitForElementVisible('@selectSizeDropdown')
            .pause(1000)
            .click('@selectSizeDropdown')
            .waitForElementVisible('@menu')
            .click('@selectSize_M')
            .pause(1000)
            .click('@addToCart')
            
    }
}

module.exports = {
    commands: [selectSizeCommands],
    elements: {
        selectSizeDropdown:{
            selector: '.ui.selection'
        },
        dropDownButton:{
            selector: '.dropdown.icon'
        },
        selectSize_S: {
            selector: '.visible.menu.transition div.selected.item:nth-child(1)'
        },
        selectSize_M:{
            selector : '.visible.menu.transition div.item:nth-child(2)'
        },
        selectSize_L:{
            selector : '.visible.menu.transition div.item:nth-child(3)'
        },
        selectSize_XL:{
            selector : '.visible.menu.transition div.item:nth-child(4)'
        },
        selectSize_XXL:{
            selector : '.visible.menu.transition div.item:nth-child(5)'
        },
        menu:{
            selector: '.visible.menu.transition'
        },
        addToCart:{
            selector : 'button[data-testid="product-order-button"]'
        }
    }
}
