var addressCommands = {
    address: function () {
        return this.waitForElementVisible('@firstName')
            .pause(1000)
            .clearValue('@firstName')
            .setValue('@firstName', 'Ravindra')
            .clearValue('@lastName')
            .setValue('@lastName', 'Test')
            .clearValue('@emailAddress')
            .setValue('@emailAddress', 'ravindra.nayak@outlook.com')
            .clearValue('@emailAddressRepeat')
            .setValue('@emailAddressRepeat', 'ravindra.nayak@outlook.com')
            .clearValue('@phoneNumber')
            .setValue('@phoneNumber', '+3160000000')
            .setValue('@postCode', '5508SK')
            .setValue('@houseNumber', '1')
            .click("@lastName")
            .pause(1000)
            .waitForElementVisible('@addressBlock')
            .getLocationInView('@continueToPay', function(result){
                this.execute('scrollTo(0, '+result.value.y+')')
            })
            .click('@continueToPay')
            
    }
}

module.exports = {
    commands: [addressCommands],
    elements: {
        firstName: {
            selector: '.woocommerce-input-wrapper >input[name="shipping_first_name"]'
        },
        lastName: {
            selector: '.woocommerce-input-wrapper >input[name="shipping_last_name"]'
        },
        emailAddress: {
            selector: '.woocommerce-input-wrapper >input[name="shipping_email"]'
        },
        emailAddressRepeat: {
            selector: '.woocommerce-input-wrapper >input[name="shipping_email_repeat"]'
        },
        phoneNumber: {
            selector: '.woocommerce-input-wrapper >input[name="shipping_phone"]'
        },
        postCode: {
            selector: '.woocommerce-input-wrapper >input[name="shipping_postcode"]'
        },
        houseNumber: {
            selector: '.woocommerce-input-wrapper >input[name="shipping_house_number"]'
        },
        continueToPay: {
            selector: 'button.checkout-btn-cnt-new.active.continue-checkout'
        },
        addressBlock:{
            selector : '.checkout-address-block'
        }
    }
}
