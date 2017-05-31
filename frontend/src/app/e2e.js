'use strict';
describe('App', function() {

    beforeEach(function() {
        browser.get('/');
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Tarotname');
    });

    /* eslint-disable no-undef */
    it('should have <header>', function() {
        expect(element(by.css('app header')).isPresent()).toEqual(true);
    });

    it('should have <main>', function() {
        expect(element(by.css('app main')).isPresent()).toEqual(true);
    });

    it('should have <footer>', function() {
        expect(element(by.css('app footer')).getText()).toEqual('®Tarotname - Bütün hakları saklıdır.');
    });
    /* eslint-enable no-undef */

});
