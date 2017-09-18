var properties = require('../resoursces/properties.js');
var authorization = require('../app-manager/authorization_helper.js');
var adminPanel = require('../page-objects/admin-panel_page.js');

require('events').EventEmitter.defaultMaxListeners = 0; // shutdown max listeners
var EC = protractor.ExpectedConditions; // assert protractor expected conditions


describe('Home task #7', function () {

    beforeEach(function () {
        browser.ignoreSynchronization = true; // ignore Angular
        browser.driver.manage().window().setSize(properties.width, properties.height); // window resolution
        browser.get(properties.build);

    });

    it('User go to all pages in admin panel', function () {
        // prepare


        // act
        authorization.login(properties.userName, properties.userPassword);

        $$('#app-').then(function (menuElements) {
            var menuElementsLength = menuElements.length;

            for (let i = 0; i < menuElementsLength; i++) {
                $$('#app-').then(function (menuElement) {
                  menuElement[i].click();
                  browser.wait(EC.visibilityOf(adminPanel.menuTitle()), 5000);

                  $$('.docs li').then(function (subMenuElements) {
                      var subMenuLength = subMenuElements.length;

                      for (let i = 0; i < subMenuLength; i++) {
                          $$('.docs li').then(function (subMenuElement) {
                              subMenuElement[i].click();
                              browser.wait(EC.visibilityOf(adminPanel.menuTitle()), 5000);
                          })
                      }
                  })
                })
            }
        });


        // assert

    });

});