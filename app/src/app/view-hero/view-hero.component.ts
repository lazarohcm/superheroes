import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Superhero, SuperheroService } from './../superhero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-hero',
  templateUrl: './view-hero.component.html',
  styleUrls: ['./view-hero.component.scss']
})
export class ViewHeroComponent implements OnInit {
  hero: Superhero;
  hero_id: number;
  constructor(private heroService: SuperheroService, private activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.heroService.viewHero(this.hero_id).subscribe((res) => {
      this.hero = res.json();
    });
  }

  getImage(hero_id, image_id) {
    if (image_id) {
      return this.heroService.getImageUrl(hero_id, image_id);
    } else {
      return 'image.jpg';
    }
  }

}
