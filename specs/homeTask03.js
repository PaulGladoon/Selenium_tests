var authorization_page = require('../page-objects/authorization_page.js');
var properties = require('../resoursces/properties.js');

require('events').EventEmitter.defaultMaxListeners = 0; // shutdown max listeners
var EC = protractor.ExpectedConditions; // assert protractor expected conditions


describe('Home task #3', function () {

    beforeEach(function () {
        browser.ignoreSynchronization = true; // ignore Angular
        browser.driver.manage().window().setSize(properties.width, properties.height); // window resolution
    });

    it('User login to admin page', function () {
        // prepare

        // act
        browser.get('http://localhost:8080/litecart/admin/');

        authorization_page.userNameField()
            .clear()
            .sendKeys(properties.userName);

        authorization_page.passwordField()
            .clear()
            .sendKeys(properties.userPassword);

        authorization_page.loginBtn().click();

        // assert

    });

});