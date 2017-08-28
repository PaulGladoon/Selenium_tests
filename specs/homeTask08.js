var properties = require('../resoursces/properties.js');

require('events').EventEmitter.defaultMaxListeners = 0; // shutdown max listeners
var EC = protractor.ExpectedConditions; // assert protractor expected conditions


describe('Home task #7', function () {

    beforeEach(function () {
        browser.ignoreSynchronization = true; // ignore Angular
        browser.driver.manage().window().setSize(properties.width, properties.height); // window resolution
        browser.get('http://localhost:8080/litecart/en/');

    });

    it('User check stickers', function () {
        // prepare


        // act
        $$('.product').then(function(products) {
            let productsLength = products.length;

            for (let i = 0; i < productsLength; i++) {
                products[i].$$('.sticker').then(function(sticker) {
                    let stickerLen = sticker.length;
                    expect(stickerLen).toBe(1);
                });
            }
        });

        // assert
        $$('.product .sticker').then(function(stickers) {
            let stickersLength = stickers.length;

            for (let i = 0; i < stickersLength; i++) {
                browser.wait(EC.visibilityOf(stickers[i]), 5000);
            }
        })

    });

});