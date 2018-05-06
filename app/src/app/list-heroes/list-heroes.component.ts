import { Superhero, SuperheroService } from './../superhero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.scss']
})
export class ListHeroesComponent implements OnInit {
  heroes: Superhero[];
  constructor(private heroService: SuperheroService) { }

  ngOnInit() {
    this.heroService.getAll(0).subscribe((res) => {
      this.heroes = res.json();
    });
  }

  getImage(hero_id, image_id) {
    return this.heroService.getImageUrl(hero_id, image_id);
  }

}
