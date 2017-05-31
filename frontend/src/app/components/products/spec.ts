import {
    it,
    inject,
    describe,
    beforeEachProviders
} from '@angular/core/testing';

import {Component, provide} from '@angular/core';

// Load the implementations that should be tested
import {Products} from './index.async';

describe('Products', () => {

    // provide our implementations or mocks to the dependency injector
    beforeEachProviders(() => [
        Products
    ]);

    it('should log ngOnInit', inject([Products], (products) => {
        products.ngOnInit();
    }));

});