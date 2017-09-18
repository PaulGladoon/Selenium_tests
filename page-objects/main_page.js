var main_page = function () {

    this.firstProductInCampaigns = function () {
        return element(by.css('#box-campaigns li:first-child'));
    };

    this.firstProductInPopular = function () {
        return element(by.css('#box-most-popular .product'));
    }
};

module.exports = new main_page();