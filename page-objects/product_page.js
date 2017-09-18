var product_page = function () {

    this.sizeSelectArray = function () {
        return browser.findElements(by.css('[name="options[Size]"]'));
    };

    this.sizeSelect = function () {
        return element(by.name("options[Size]"));
    };

    this.smallOptionInSizeSelect = function () {
        return element(by.css('[value="Small"]'));
    };

    this.addToCartBtn = function () {
        return element(by.name('add_cart_product'));
    };

    this.quantityItemsInBasket = function () {
        return element(by.css('#cart .quantity'));
    };

    this.checkoutLink = function () {
        return element(by.css('#cart a.link'));
    }

};

module.exports = new product_page();