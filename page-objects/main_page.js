var main_page = function () {

    this.firstProductInCampaigns = function () {
        return element(by.css('#box-campaigns li:first-child'));
    }
};

module.exports = new main_page();