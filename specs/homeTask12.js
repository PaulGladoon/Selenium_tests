var properties = require('../resoursces/properties.js');
var authorization = require('../app-manager/authorization-helper.js');
var path = require('path');

require('events').EventEmitter.defaultMaxListeners = 0; // shutdown max listeners
var EC = protractor.ExpectedConditions; // assert protractor expected conditions


describe('Home task #12', function () {

    beforeEach(function () {
        browser.ignoreSynchronization = true; // ignore Angular
        browser.driver.manage().window().setSize(properties.width, properties.height); // window resolution
        browser.get('http://localhost:8080/litecart/admin/');
        browser.driver.manage().timeouts().implicitlyWait(2000);

    });

    it('Admin add product', function () {
        // prepare
        var randomProductName = 'TestProduct'+Date.now();
        var randomProductCode = Date.now();

        // act
        authorization.login(properties.userName, properties.userPassword);

        element(by.css('[href*=catalog]')).click();
        element(by.css('[href*=edit_product]')).click();

        // general
        element(by.css('[value="1"][name=status]')).click();
        element(by.css('[name="name[en]"]')).sendKeys(randomProductName);
        element(by.name('code')).sendKeys(randomProductCode);
        element(by.css('[name="product_groups[]"][value="1-3"]')).click();
        element(by.name('quantity')).clear().sendKeys('100');
        element(by.name("new_images[]")).sendKeys(path.resolve('resoursces/guitar.JPG'));

        var dateValidFromSelect = element(by.name('date_valid_from'));
        var dateValidToSelect = element(by.name('date_valid_to'));

        browser.actions()
                .mouseMove(dateValidFromSelect, {x: 10, y: 0})
                .click()
                .sendKeys('08252017')
                .perform();

        browser.actions()
                .mouseMove(dateValidToSelect, {x: 10, y: 0})
                .click()
                .sendKeys('11252017')
                .perform();

        element(by.css('[href*=information]')).click();

        // information
        element(by.name('manufacturer_id')).click();
        element(by.css('[name=manufacturer_id] > [value="1"]')).click();
        element(by.name('keywords')).sendKeys('Guitar');
        element(by.css('[name="short_description[en]"]')).sendKeys('Best Guitar');
        element(by.css('.trumbowyg-editor')).click().sendKeys('Good Guitar');
        element(by.css('[name="head_title[en]"]')).sendKeys('Guitar Title');
        element(by.css('[name="meta_description[en]"]')).sendKeys('Guitar Meta Description');

        element(by.css('[href*=prices]')).click();
        browser.sleep(1000);

        // prices
        element(by.name('purchase_price')).clear().sendKeys('200');
        element(by.name('purchase_price_currency_code')).click();
        element(by.css('[name=purchase_price_currency_code] > [value="USD"]')).click();
        element(by.css('[name="gross_prices[USD]"]')).clear().sendKeys('120');
        element(by.css('[name="gross_prices[EUR]"]')).clear().sendKeys('90');
        element(by.name('save')).click();


        // assert
        var createdProduct = element(by.cssContainingText('a', randomProductName));
        browser.wait(EC.visibilityOf(createdProduct), 5000);

    });

});