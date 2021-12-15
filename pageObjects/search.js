var searchCommands = {
    search: function () {
        return this.waitForElementVisible('@searchField')
            .pause(1000)
            //.click('@searchField')
            .setValue('@searchField', 'Adidas')
            .pause(1000)
    }
}

module.exports = {
    commands: [searchCommands],
    elements: {
        searchField: {
            selector: 'input[data-testid="search-input"]'
        }
    }
}