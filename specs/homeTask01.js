require('events').EventEmitter.defaultMaxListeners = 0; // shutdown max listeners
var EC = protractor.ExpectedConditions; // assert protractor expected conditions

describe('Home task #1', function () {

    beforeEach(function () {
        browser.ignoreSynchronization = true; // ignore Angular
        browser.driver.manage().window().setSize(1280, 800); // window resolution
    });

    it('User go to test page', function () {
        browser.get('http://software-testing.ru/');
    });

});