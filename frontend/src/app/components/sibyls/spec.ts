import {
    it,
    inject,
    describe,
    beforeEachProviders
} from '@angular/core/testing';

import {Component, provide} from '@angular/core';

// Load the implementations that should be tested
import {Sibyls} from './index.async';

describe('Sibyls', () => {

    // provide our implementations or mocks to the dependency injector
    beforeEachProviders(() => [
        Sibyls
    ]);

    it('should log ngOnInit', inject([Sibyls], (sibyls) => {
        sibyls.ngOnInit();
    }));

});