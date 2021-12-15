module.exports = {
    before: function(browser){
        //Declaring Global Timeout
        browser
            .globals.waitForConditionTimeout = 10000
    },
    
    'Login':function (browser){
        var home = browser.page.login()
        home
            .login()
            browser.url("https://www.otrium.com/men/home")
            .waitForElementVisible('.mainHeader__userAccountMenu')
    },

    'SearchBrand': function(browser){
        var searchPage = browser.page.search()
        searchPage
            .search()
            .waitForElementVisible('div[data-testid="search-products"] h4')
            .assert.containsText("div[data-testid='search-products'] h4", "Products")
    },
    
    'Select1stProduct': function(browser){
        var productPage = browser.page.product()
        productPage
            .product()
            .assert.containsText(".ProductView__productDetails a[data-testid='product-info-brand-name']", "adidas")
    },

    'Select desired size and add to cart': function(browser){
        var individualProduct = browser.page.selectSizeAndAddtoCart()
        individualProduct
            .selectSizeAndAddtoCart()
            .assert.containsText(".mainHeader__cartCount", "1")
    },

    'Go to the cart and click on checkout': function(browser){
        var shoppingCartPage = browser.page.shoppingCart()
        shoppingCartPage
            .shoppingCart()
            .assert.containsText(".page-title>span","CHECKOUT")
    },

    'Fill in the address details and click on continue to pay': function(browser){
        var addressPage = browser.page.address()
        addressPage
            .address()
            //.assert.containsText(".payment-methods-table h4.review-order-title","Payment method")
    },


    'Logout': function (browser) {
        var userMenu = browser.page.logout()
        //console.log(browser.expect.element('.mainHeader__logoContainer').to.be.present)
            userMenu
                .logoutCheckoutPage()
                .assert.urlContains('https://www.otrium.com')
        
    },

    after: function (browser) {
        browser.end();
    }
}