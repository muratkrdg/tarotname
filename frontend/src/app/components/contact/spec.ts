import {
    it,
    inject,
    describe,
    beforeEachProviders
} from '@angular/core/testing';

import {Component, provide} from '@angular/core';

// Load the implementations that should be tested
import {Contact} from './index.async';

describe('Contact', () => {

    // provide our implementations or mocks to the dependency injector
    beforeEachProviders(() => [
        Contact
    ]);

    it('should log ngOnInit', inject([Contact], (contact) => {
        contact.ngOnInit();
    }));

});