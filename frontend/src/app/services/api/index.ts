import {Injectable} from '@angular/core';

@Injectable()
export class Api {
  
  title: string = 'Tarotname';

  getSibyls = function() {
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
