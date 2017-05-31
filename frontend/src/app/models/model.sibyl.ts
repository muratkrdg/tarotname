export class Sibyl {
  id: number;
  nickname: string = '';
  name: string = '';
  surname: string = '';
  slug: string = '';
  photoUrl: string = '';
  stars: number = 0;
  tagline: string = '';
  description: string = '';
  comments: any[];
  answers: any[];
  services: any[];
  roles: any[];
  complete: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}