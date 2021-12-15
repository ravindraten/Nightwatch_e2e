var homeCommands = {
    login: function(){
        return this.navigate()
            //.maximizeWindow()
            .assert.containsText("div[data-testid='login-page-welcome-message']", "Welcome back, choose your preferred way to continue.")
            .waitForElementVisible('@username')
            .waitForElementVisible('@password')
            .setValue('@username', '<username>')//key in a username
            .setValue('@password', '<password>')//key in a password
            .click('@loginBtn')
            .pause(1000)
    }
}


module.exports = {
    url: 'https://www.otrium.com/sign-in',
    commands: [homeCommands],
    elements: {
        username: {
            selector: 'input[name="email"]'
        },
        password: {
            selector: 'input[name="password"]',
        },
        loginBtn: {
            selector: 'button[type="submit"]'
        }
    }
}