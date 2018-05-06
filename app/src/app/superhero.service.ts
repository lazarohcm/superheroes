import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

export interface Superhero {
  id?: number;
  name?: string;
  nickname: string;
  origin?: string;
  powers?: string;
  catch_phrase?: string;
  images?: Image[];
}

export interface Image {
  id?: number;
  hero_id?: number;
  src: string;
  filename: string;
  filetype: string;
}


@Injectable()
export class SuperheroService {


  constructor(private http: Http) { }

  createHero(hero: Superhero) {
    return this.http.post(environment.origin + 'superhero', hero);
  }

  getAll(lastId: number) {
    return this.http.get(environment.origin + 'superhero/all/' + lastId);
  }

  getImageUrl(hero_id, image_id) {
    return environment.origin + 'superhero/image/' + hero_id + '/' + image_id;
  }

}
