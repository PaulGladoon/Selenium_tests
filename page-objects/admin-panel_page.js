var adminPanel_page = function () {

    this.menuTitle = function () {
        return element(by.css('h1'));
    }
};

module.exports = new adminPanel_page();