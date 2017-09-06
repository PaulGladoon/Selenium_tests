var properties = require('../resoursces/properties.js');
var authorization = require('../app-manager/authorization-helper.js');

require('events').EventEmitter.defaultMaxListeners = 0; // shutdown max listeners
var EC = protractor.ExpectedConditions; // assert protractor expected conditions


describe('Home task #14', function () {

    beforeEach(function () {
        browser.ignoreSynchronization = true; // ignore Angular
        browser.driver.manage().window().setSize(properties.width, properties.height); // window resolution
        browser.driver.manage().timeouts().implicitlyWait(2000);
        browser.get('http://localhost:8080/litecart/admin/');
    });

    it('User add product to cart', function () {
        // prepare
        authorization.login(properties.userName, properties.userPassword);
        browser.get('http://localhost:8080/litecart/admin/?app=countries&doc=countries');

        var linkElements = [
            '[href*="alpha-2"]',
            '[href*="alpha-3"]',
            '[href*="Regular_expression"]',
            '[href*="address-formats.html"]',
            'tr:nth-child(8) a > i',
            '[href*="currency_and_language"]',
            '[href*="country_calling_codes"]'];

        // act
        element(by.css('[href*="AF"]')).click();

        for (let i = 0; i < linkElements.length; i++) {
            element(by.css(linkElements[i])).click();
            browser.getAllWindowHandles().then(function (handles) {
                browser.switchTo().window(handles[1]);
                browser.close();
                browser.switchTo().window(handles[0]);
            });
        }
    });

});