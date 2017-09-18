var checkout_page = function () {
    
    this.productsInCarousel = function () {
        return $$('.shortcut');
    };

    this.orderTableRows = function () {
        return $$('#checkout-summary-wrapper tr');
    };

    this.removeProductBtn = function () {
        return element(by.name('remove_cart_item'));
    };

    this.orderSummaryMainTableRow = function () {
        return element(by.css('tr.header'));
    };
    
};

module.exports = new checkout_page();