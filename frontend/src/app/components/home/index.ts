import {Component, OnInit} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';
import {Observable} from 'rxjs/Rx';

import {Api} from '../../services/api';           // ./services/api/index.ts
import {Sibyl} from '../../models/model.sibyl';   // ./models/model.sibyl.ts

@Component({
  selector: 'home',
  directives: [...FORM_DIRECTIVES],
  pipes: [],
  styles: [require('./style.scss')],
  template: require('./template.html')
})

export class Home implements OnInit {

  sibyls: Sibyl[];

  constructor(public api: Api) {
    api.getSibyls().subscribe(
      sibyls => {
        this.sibyls = sibyls;
      },
      err => { 
        console.log(err);
    });
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}
