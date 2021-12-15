var productCommands = {
    product: function () {
        return this.waitForElementVisible('@firstProduct')
            .pause(1000)
            .getAttribute('@firstProduct',"href", function(result){
                var url = result.value
                console.log(url)
            })
            .click('@firstProduct')
            .pause(1000)
            
    }
}

module.exports = {
    commands: [productCommands],
    elements: {
        firstProduct: {
            selector: '.css-t37aoq :nth-child(1) div[data-testid="product-card"]'
        }
    }
}
