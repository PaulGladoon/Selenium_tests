var properties = require('../resoursces/properties.js');
var authorization = require('../app-manager/authorization-helper.js');

require('events').EventEmitter.defaultMaxListeners = 0; // shutdown max listeners
var EC = protractor.ExpectedConditions; // assert protractor expected conditions


describe('Home task #17', function () {

    beforeEach(function () {
        browser.ignoreSynchronization = true; // ignore Angular
        browser.driver.manage().window().setSize(properties.width, properties.height); // window resolution
        browser.driver.manage().timeouts().implicitlyWait(2000);
        browser.get('http://localhost:8080/litecart/admin/');
    });

    it('Check logs', function () {

        // act
        authorization.login(properties.userName, properties.userPassword);
        browser.get('http://localhost:8080/litecart/admin/?app=catalog&doc=catalog&category_id=1');
        $$('[href*="product_id"] > .fa.fa-pencil').then(function (arrayOfElements) {
            var arrayLength = arrayOfElements.length;

            for (let i = 0; i < arrayLength; i++) {
                $$('td > img').then(function (elem) {
                    elem[i].click();
                    browser.driver.manage().logs().get("browser").then(function (logsEntries) {
                        logsEntries.forEach(function (l) {
                            console.log(l)
                        });
                    });
                    browser.get('http://localhost:8080/litecart/admin/?app=catalog&doc=catalog&category_id=1');
                })
            }
        });

    });

});