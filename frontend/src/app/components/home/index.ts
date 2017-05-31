import {Component, OnInit} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';

import {Api} from '../../services/api';         // ./services/api/index.ts

@Component({
  selector: 'home',
  directives: [...FORM_DIRECTIVES],
  pipes: [],
  styles: [require('./style.scss')],
  template: require('./template.html')
})

export class Home implements OnInit {

  sibyls;

  constructor(public api: Api) {
    this.sibyls = api.getSibyls();
    console.log('sibyls: ', this.sibyls);
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}
