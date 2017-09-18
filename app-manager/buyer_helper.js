var goTo = require('../app-manager/navigation_helper.js');
var main_page = require('../page-objects/main_page.js');
var product_page = require('../page-objects/product_page.js');
var checkout_page = require('../page-objects/checkout_page.js');

var EC = protractor.ExpectedConditions; // assert protractor expected conditions

module.exports = {

    addFirstProductInPopularToBasket,
    removeProductsFromBasket
};

function addFirstProductInPopularToBasket(productsAmount) {
    for (let i = 0; i < productsAmount; i++) {
        goTo.mainPage();
        main_page.firstProductInPopular().click();
        product_page.sizeSelectArray().then(function (elements) {
            if (elements.length > 0) {
                product_page.sizeSelect().click();
                product_page.smallOptionInSizeSelect().click()
            }
        });
        product_page.addToCartBtn().click();
        product_page.quantityItemsInBasket().getText().then(function (quantityValue) {
            browser.wait(EC.visibilityOf(element(by.cssContainingText('#cart .quantity', +quantityValue + 1))), 2000)
        });
    }
}

function removeProductsFromBasket() {
    checkout_page.productsInCarousel().then(function (productsArray) {
        for (let i = 0; i < productsArray.length; i++) {
            checkout_page.orderTableRows().then(function (trArray) {
                if (trArray.length > 0) {
                    checkout_page.removeProductBtn().click();
                } else {
                    browser.wait(EC.invisibilityOf(checkout_page.orderSummaryMainTableRow()), 2000);
                }
            })
        }
    })
}