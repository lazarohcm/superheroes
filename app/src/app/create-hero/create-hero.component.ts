import { SuperheroService, Superhero } from './../superhero.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.scss'],
  providers: [NgbCarouselConfig, HttpClient],
})
export class CreateHeroComponent implements OnInit {
  images: Array<string>;
  hero: Superhero;

  constructor(private activeModal: NgbActiveModal, config: NgbCarouselConfig, private http: HttpClient, private heroService: SuperheroService) { }

  ngOnInit() {
    this.http.get('https://picsum.photos/list')
      .pipe(map((images: Array<{ id: number }>) => this._randomImageUrls(images)))
      .subscribe(images => this.images = images);
  }

  createHero() {
    this.heroService.createHero({ nickname: 'Superman' }).subscribe((res) => {
      console.log(res);
    });
  }

  private _randomImageUrls(images: Array<{ id: number }>): Array<string> {
    return [1, 2, 3].map(() => {
      const randomId = images[Math.floor(Math.random() * images.length)].id;
      return `https://picsum.photos/900/500?image=${randomId}`;
    });
  }

}
