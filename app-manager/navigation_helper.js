var product_page = require('../page-objects/product_page.js');

module.exports = {

    mainPage,
    checkoutPage
};

function mainPage() {
    browser.get('http://litecart.stqa.ru/index.php/en/');
}

function checkoutPage() {
    product_page.checkoutLink().click();
}