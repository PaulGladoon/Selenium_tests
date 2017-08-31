var properties = require('../resoursces/properties.js');
var main_page = require('../page-objects/main_page.js');

require('events').EventEmitter.defaultMaxListeners = 0; // shutdown max listeners
var EC = protractor.ExpectedConditions; // assert protractor expected conditions


describe('Home task #10', function () {

    beforeEach(function () {
        browser.ignoreSynchronization = true; // ignore Angular
        browser.driver.manage().window().setSize(properties.width, properties.height); // window resolution
        browser.get('http://localhost:8080/litecart/');
    });

    it('User check product', function () {
        // prepare
        var mainPageNameOfProduct = main_page.firstProductInCampaigns().$('.name').getText();
        var mainPageRegularPriceProduct = main_page.firstProductInCampaigns().$('.regular-price').getText();
        var mainPageCampaignPriceProduct = main_page.firstProductInCampaigns().$('.campaign-price').getText();
        var mainPageRegularPriceStyleProduct = main_page.firstProductInCampaigns().$('.regular-price').getCssValue('text-decoration');
        var mainPageCampaignPriceStyleProduct = main_page.firstProductInCampaigns().$('.campaign-price').getCssValue('color');
        var mainPageCampaignPriceFontWeightProduct = main_page.firstProductInCampaigns().$('.campaign-price').getCssValue('font-weight');
        var mainPageRegularPriceSize = main_page.firstProductInCampaigns().$('.regular-price').getCssValue('font-size');
        var mainPageCampaignPriceSize = main_page.firstProductInCampaigns().$('.campaign-price').getCssValue('font-size');

        // act
        main_page.firstProductInCampaigns().click();

        // prepare
        var productPageNameOfProduct = $('.box h1.title').getText();
        var productPageRegularPriceProduct = $('.box .regular-price').getText();
        var productPageCampaignPriceProduct = $('.box .campaign-price').getText();
        var productPageRegularPriceStyleProduct = $('.box .regular-price').getCssValue('text-decoration');
        var productPageCampaignPriceStyleProduct = $('.box .campaign-price').getCssValue('color');
        var productPageCampaignPriceFontWeightProduct = $('.box .campaign-price').getCssValue('font-weight');
        var productPageRegularPriceSize = $('.box .regular-price').getCssValue('font-size');
        var productPageCampaignPriceSize = $('.box .campaign-price').getCssValue('font-size');

        // assert
        expect(mainPageNameOfProduct).toBe(productPageNameOfProduct);
        expect(mainPageRegularPriceProduct).toBe(productPageRegularPriceProduct);
        expect(mainPageCampaignPriceProduct).toBe(productPageCampaignPriceProduct);
        expect(mainPageRegularPriceStyleProduct).toBe('line-through solid rgb(119, 119, 119)');
        expect(mainPageCampaignPriceStyleProduct).toBe('rgba(204, 0, 0, 1)');
        expect(mainPageCampaignPriceFontWeightProduct).toBe('bold');
        expect(mainPageRegularPriceSize).toBeLessThan(mainPageCampaignPriceSize);
        expect(productPageRegularPriceStyleProduct).toBe('line-through solid rgb(102, 102, 102)');
        expect(productPageCampaignPriceStyleProduct).toBe('rgba(204, 0, 0, 1)');
        expect(productPageCampaignPriceFontWeightProduct).toBe('bold');
        expect(productPageRegularPriceSize).toBeLessThan(productPageCampaignPriceSize);

    })
});