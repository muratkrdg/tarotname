import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {SibylService} from './service.sibyl';
import {Sibyl} from '../../models/model.sibyl';

@Injectable()
export class Api {
  
  title: string = 'Tarotname';
  baseUrl: string = 'http://localhost:3000/api';

  private sibylService: SibylService;
  sibyls: Sibyl[];

  constructor(sibylService: SibylService) {
    this.sibylService = sibylService;
  }

  getSibyls(): Observable<Sibyl[]> {

    return this.sibylService.getAllSibyls(this.baseUrl);
  }

  getSibylsDummy(): any[] {
    var sibyls = [
      {name: 'Güneş', surname: 'Alvarez', description: 'Ah vah etme. Düşüşü başlangıç say. Her durak deneyim olacaktır sana. Her kart yoluna bilgelik katacaktır.', url: 'img/shield-with-beta.png'},
      {name: 'Güneş', surname: 'Alvarez', description: 'Ah vah etme. Düşüşü başlangıç say. Her durak deneyim olacaktır sana. Her kart yoluna bilgelik katacaktır.', url: 'img/shield-with-beta.png'},
      {name: 'Güneş', surname: 'Alvarez', description: 'Ah vah etme. Düşüşü başlangıç say. Her durak deneyim olacaktır sana. Her kart yoluna bilgelik katacaktır.', url: 'img/shield-with-beta.png'},
      {name: 'Güneş', surname: 'Alvarez', description: 'Ah vah etme. Düşüşü başlangıç say. Her durak deneyim olacaktır sana. Her kart yoluna bilgelik katacaktır.', url: 'img/shield-with-beta.png'},
      {name: 'Güneş', surname: 'Alvarez', description: 'Ah vah etme. Düşüşü başlangıç say. Her durak deneyim olacaktır sana. Her kart yoluna bilgelik katacaktır.', url: 'img/shield-with-beta.png'},
      {name: 'Güneş', surname: 'Alvarez', description: 'Ah vah etme. Düşüşü başlangıç say. Her durak deneyim olacaktır sana. Her kart yoluna bilgelik katacaktır.', url: 'img/shield-with-beta.png'},
      {name: 'Güneş', surname: 'Alvarez', description: 'Ah vah etme. Düşüşü başlangıç say. Her durak deneyim olacaktır sana. Her kart yoluna bilgelik katacaktır.', url: 'img/shield-with-beta.png'},
      {name: 'Güneş', surname: 'Alvarez', description: 'Ah vah etme. Düşüşü başlangıç say. Her durak deneyim olacaktır sana. Her kart yoluna bilgelik katacaktır.', url: 'img/shield-with-beta.png'},
      {name: 'Güneş', surname: 'Alvarez', description: 'Ah vah etme. Düşüşü başlangıç say. Her durak deneyim olacaktır sana. Her kart yoluna bilgelik katacaktır.', url: 'img/shield-with-beta.png'},
      {name: 'Güneş', surname: 'Alvarez', description: 'Ah vah etme. Düşüşü başlangıç say. Her durak deneyim olacaktır sana. Her kart yoluna bilgelik katacaktır.', url: 'img/shield-with-beta.png'},
      {name: 'Güneş', surname: 'Alvarez', description: 'Ah vah etme. Düşüşü başlangıç say. Her durak deneyim olacaktır sana. Her kart yoluna bilgelik katacaktır.', url: 'img/shield-with-beta.png'},
      {name: 'Güneş', surname: 'Alvarez', description: 'Ah vah etme. Düşüşü başlangıç say. Her durak deneyim olacaktır sana. Her kart yoluna bilgelik katacaktır.', url: 'img/shield-with-beta.png'}
    ];

    return sibyls;
  }
}
