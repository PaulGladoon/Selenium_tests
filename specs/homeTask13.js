var properties = require('../resoursces/properties.js');
var authorization = require('../app-manager/authorization-helper.js');
var path = require('path');

require('events').EventEmitter.defaultMaxListeners = 0; // shutdown max listeners
var EC = protractor.ExpectedConditions; // assert protractor expected conditions


describe('Home task #13', function () {

    beforeEach(function () {
        browser.ignoreSynchronization = true; // ignore Angular
        browser.driver.manage().window().setSize(properties.width, properties.height); // window resolution
        browser.driver.manage().timeouts().implicitlyWait(2000);

    });

    it('User add product to cart', function () {
        // prepare

        // act

        for (let i = 0; i < 3; i++) {
            browser.get('http://litecart.stqa.ru/index.php/en/');
            element(by.css('#box-most-popular .product')).click();
            $$('[name="options[Size]"]').then(function (value) {
                if (value.length > 0) {
                    element(by.name("options[Size]")).click();
                    element(by.css('[value="Small"]')).click()
                }
            });
            element(by.name('add_cart_product')).click();
            element(by.css('#cart .quantity')).getText().then(function (quantityValue) {
                browser.wait(EC.visibilityOf(element(by.cssContainingText('#cart .quantity', +quantityValue + 1))), 1000)
            });
        }

        element(by.css('#cart a.link')).click();

        $$('.shortcut').then(function (productsArray) {
            for (let i = 0; i < productsArray.length; i++) {
                $$('#checkout-summary-wrapper tr').then(function (trArray) {
                    if (trArray.length > 0) {
                        element(by.name('remove_cart_item')).click();
                    } else {
                        browser.wait(EC.invisibilityOf(element(by.css('tr.header'))), 1000);
                    }
                })
            }
        })

        // assert

    });

});