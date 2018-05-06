import { ViewHeroComponent } from './../view-hero/view-hero.component';
import { DeleteHeroComponent } from './../delete-hero/delete-hero.component';
import { EditHeroComponent } from './../edit-hero/edit-hero.component';
import { Superhero, SuperheroService } from './../superhero.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.scss']
})
export class ListHeroesComponent implements OnInit {
  heroes: Superhero[];
  constructor(private heroService: SuperheroService, private modalService: NgbModal) { }

  ngOnInit() {
    this.heroService.getAll(0).subscribe((res) => {
      this.heroes = res.json();
    });
  }

  getImage(hero_id, image) {
    if (image) {
      return this.heroService.getImageUrl(hero_id, image.id);
    } else {
      return 'image.jpg';
    }
  }

  getMore() {
    this.heroService.getAll(this.heroes[this.heroes.length - 1].id).subscribe((res) => {
      const new_heros: any[] = res.json();
      new_heros.forEach((hero) => {
        this.heroes.push(hero);
      });
    });
  }

  editHero(hero: Superhero) {
    const editRef = this.modalService.open(EditHeroComponent, { size: 'lg' });
    editRef.componentInstance.hero_id = hero.id;
  }

  viewHero(hero: Superhero) {
    const editRef = this.modalService.open(ViewHeroComponent, { size: 'lg' });
    editRef.componentInstance.hero_id = hero.id;
  }

  deleteHero(hero: Superhero) {
    const deleteRef = this.modalService.open(DeleteHeroComponent);
    deleteRef.componentInstance.hero = hero;
  }

}
