import {
    it,
    inject,
    describe,
    beforeEachProviders
} from '@angular/core/testing';

import {Component, provide} from '@angular/core';

// Load the implementations that should be tested
import {Media} from './index.async';

describe('Media', () => {

    // provide our implementations or mocks to the dependency injector
    beforeEachProviders(() => [
        Media
    ]);

    it('should log ngOnInit', inject([Media], (media) => {
        media.ngOnInit();
    }));

});