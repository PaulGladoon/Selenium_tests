var properties = require('../resoursces/properties.js');
var authorization = require('../app-manager/authorization-helper.js');

require('events').EventEmitter.defaultMaxListeners = 0; // shutdown max listeners
var EC = protractor.ExpectedConditions; // assert protractor expected conditions


describe('Home task #9', function () {

    beforeEach(function () {
        browser.ignoreSynchronization = true; // ignore Angular
        browser.driver.manage().window().setSize(properties.width, properties.height); // window resolution
        browser.get('http://localhost:8080/litecart/admin/');
    });

    it('User check sort of countries', function () {
        // prepare

        // act
        authorization.login(properties.userName, properties.userPassword);
        browser.get('http://localhost:8080/litecart/admin/?app=countries&doc=countries');


        $$('tr > td:nth-child(5)')
            .then(function (value) {
                return Promise.all(value.map(function (el) {
                    return el.getText();
                }))
            })
            .then(function (arrayOfCountriesNames) {
                var sortedArrayOfCountriesNames = Object.assign([], arrayOfCountriesNames).sort();

                // assert

                expect(arrayOfCountriesNames).toEqual(sortedArrayOfCountriesNames);
            })

        $$('.row')
            .then(function (rows) {
                var promisesArray = rows.map(function (row) {
                    return row.$('td:nth-child(6)').getText().then(function (zoneValue) {
                        if (zoneValue > 0) {
                            return row;
                        }
                    })
                });
                return Promise.all(promisesArray)
            })
            .then(function (zones) {
                var elementsWithZonesGreaterThanZero = zones.filter(function (zone) {
                    return zone;
                });

                var promisesArray = elementsWithZonesGreaterThanZero.map(function (zone) {
                    return zone.$('td:nth-child(5) > a').getAttribute('href').then(function (zoneLink) {
                        return zoneLink;
                    })
                });
                return Promise.all(promisesArray)
            })
            .then(function (zonesLinks) {
                for (let i = 0; i < zonesLinks.length; i++) {
                    browser.get(zonesLinks[i]);
                    $$('#content tr:not(:last-child) > td:nth-child(3)')
                        .then(function (value) {
                            return Promise.all(value.map(function (el) {
                                return el.getText();
                            }))
                        })
                        .then(function (arrayOfCountriesNames) {
                            var sortedArrayOfCountriesNames = Object.assign([], arrayOfCountriesNames).sort();

                            // assert

                            expect(arrayOfCountriesNames).toEqual(sortedArrayOfCountriesNames);
                        })
                }
            })
    });

    it('User check sort of geo zones', function () {
        authorization.login(properties.userName, properties.userPassword);
        browser.get('http://localhost:8080/litecart/admin/?app=geo_zones&doc=geo_zones');

        $$('.row')
            .then(function (elements) {
                var promisesArray = elements.map(function (countries) {
                    return countries.$('td:nth-child(3) > a').getAttribute('href').then(function (countrieLink) {
                        return countrieLink;
                    })
                });
                return Promise.all(promisesArray)
            })
            .then(function (countriesLinks) {
                for (let i = 0; i < countriesLinks.length; i++) {
                    browser.get(countriesLinks[i]);
                    $$('tbody > tr > td:nth-child(3) > select > option[selected=selected]')
                        .then(function (value) {
                            return Promise.all(value.map(function (el) {
                                return el.getText();
                            }))
                        })
                        .then(function (arrayOfZonesNames) {
                            var sortedArrayOfZonesNames = Object.assign([], arrayOfZonesNames).sort();

                            // assert

                            expect(arrayOfZonesNames).toEqual(sortedArrayOfZonesNames);
                        })
                }
            })

    });

});