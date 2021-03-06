/// src/app/index.ts
import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {FORM_PROVIDERS} from '@angular/common';

import '../style/app.scss';

import {Api} from './services/api';         									// ./services/api/index.ts
import {SibylService} from './services/api/service.sibyl';   	// ./services/api/service.sibyl.ts
import routes from './routes';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app', // <app></app>
    providers: [...FORM_PROVIDERS, Api, SibylService],
    directives: [...ROUTER_DIRECTIVES],
    pipes: [],
    styles: [require('./style.scss')],
    template: require('./template.html')
})

@RouteConfig(routes)

export class App {
    url: string = '//www.tarotname.com/';

    constructor(public api: Api) {
    }
}
