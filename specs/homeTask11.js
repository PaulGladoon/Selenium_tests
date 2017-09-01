var properties = require('../resoursces/properties.js');

require('events').EventEmitter.defaultMaxListeners = 0; // shutdown max listeners
var EC = protractor.ExpectedConditions; // assert protractor expected conditions


describe('Home task #11', function () {

    beforeEach(function () {
        browser.ignoreSynchronization = true; // ignore Angular
        browser.driver.manage().window().setSize(properties.width, properties.height); // window resolution
        browser.get('http://localhost:8080/litecart/en/create_account');
    });

    it('Reg new account', function () {
        // prepare
        var randomEmail = 'paul'+Date.now()+'@gl.com';
        var accPassword = '7310413Freelove';

        // act
        element(by.name('tax_id')).sendKeys('doit');
        element(by.name('company')).sendKeys('justdoit');
        element(by.name('firstname')).sendKeys('paul');
        element(by.name('lastname')).sendKeys('gl');
        element(by.name('address1')).sendKeys('usa');
        element(by.name('address2')).sendKeys('california');
        element(by.name('postcode')).sendKeys('12345');
        element(by.name('city')).sendKeys('San');
        element(by.css('.select2-selection')).click();
        element(by.css('[id*="US"]')).click();
        element(by.name('email')).sendKeys(randomEmail);
        element(by.name('phone')).sendKeys('+380631111212');
        element(by.name('password')).sendKeys(accPassword);
        element(by.name('confirmed_password')).sendKeys(accPassword);
        element(by.name('create_account')).click();

        // делаю этот костыль, у меня поле с зоной отображается только после клика на create account
        element(by.name('password')).sendKeys(accPassword);
        element(by.name('confirmed_password')).sendKeys(accPassword);
        element(by.name('create_account')).click();

        element(by.css('[href*="logout"]')).click();

        element(by.name('email')).sendKeys(randomEmail);
        element(by.name('password')).sendKeys(accPassword);
        element(by.name('login')).click();

        element(by.css('[href*="logout"]')).click();


        // assert

    })
});