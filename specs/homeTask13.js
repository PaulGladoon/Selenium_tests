var properties = require('../resoursces/properties.js');
var goTo = require('../app-manager/navigation_helper.js');
var product_page = require('../page-objects/product_page.js');
var checkout_page = require('../page-objects/checkout_page.js');
var buyer_helper = require('../app-manager/buyer_helper.js');

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
        buyer_helper.addFirstProductInPopularToBasket(3);

        goTo.checkoutPage();

        buyer_helper.removeProductsFromBasket();
    });

});