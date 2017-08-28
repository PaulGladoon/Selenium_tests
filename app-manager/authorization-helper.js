var authorization_page = require('../page-objects/authorization_page.js');

module.exports = {
    login
};

function login(userName, userPassword) {

    authorization_page.userNameField()
        .clear()
        .sendKeys(userName);

    authorization_page.passwordField()
        .clear()
        .sendKeys(userPassword);

    authorization_page.loginBtn().click();

}

