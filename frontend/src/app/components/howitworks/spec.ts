import {
    it,
    inject,
    describe,
    beforeEachProviders
} from '@angular/core/testing';

import {Component, provide} from '@angular/core';

// Load the implementations that should be tested
import {HowItWorks} from './index.async';

describe('HowItWorks', () => {

    // provide our implementations or mocks to the dependency injector
    beforeEachProviders(() => [
        HowItWorks
    ]);

    it('should log ngOnInit', inject([HowItWorks], (howItWorks) => {
        howItWorks.ngOnInit();
    }));

});