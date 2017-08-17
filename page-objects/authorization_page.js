var authorization_page = function () {

    this.userNameField = function () {
        return element(by.name('username'));
    };

    this.passwordField = function () {
        return element(by.name('password'));
    };

    this.loginBtn = function () {
        return element(by.name('login'));
    };

};

module.exports = new authorization_page();