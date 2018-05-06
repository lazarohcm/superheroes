import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.scss'],
  providers: [NgbCarouselConfig, HttpClient], 
})
export class CreateHeroComponent implements OnInit {
  images: Array<string>;

  constructor(private activeModal: NgbActiveModal, config: NgbCarouselConfig, private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://picsum.photos/list')
        .pipe(map((images: Array<{id: number}>) => this._randomImageUrls(images)))
        .subscribe(images => this.images = images);
  }

  private _randomImageUrls(images: Array<{id: number}>): Array<string> {
    return [1, 2, 3].map(() => {
      const randomId = images[Math.floor(Math.random() * images.length)].id;
      return `https://picsum.photos/900/500?image=${randomId}`;
    });
  }

}
