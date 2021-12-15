var logoutCommands = {
    logout: function () {
        return this.waitForElementVisible('@accountButton')
            .pause(1000)
            .click('@accountButton')
            .click('@accountButton')
            .getLocationInView('@logoutBtn', function(result){
                this.execute('scrollTo(0, '+result.value.y+')')
            })
    },
    logoutCheckoutPage: function () {
        return this.waitForElementVisible('@accountButtonCheckoutPage')
            .pause(1000)
            .click('@accountButtonCheckoutPage')
            .getLocationInView('@logoutBtnCheckoutPage', function(result){
                this.execute('scrollTo(0, '+result.value.y+')')
            })
    }
}

module.exports = {
    commands: [logoutCommands],
    elements: {
        accountButton: {
            selector: '.mainHeader__userAccountMenu .mainHeader__button'
        },
        accountButtonCheckoutPage: {
            selector: '.user-account'
        },
        logoutBtnCheckoutPage: {
            selector: '.top-logout-btn'
        },
        logoutBtn: {
            selector: '.Menu__listContent .css-140tfhg'
        }
    }
}