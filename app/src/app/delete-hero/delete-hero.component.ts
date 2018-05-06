import { SuperheroService } from './../superhero.service';
import { Component, OnInit } from '@angular/core';
import { Superhero } from '../superhero.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-hero',
  templateUrl: './delete-hero.component.html',
  styleUrls: ['./delete-hero.component.scss']
})
export class DeleteHeroComponent implements OnInit {
  hero: Superhero;
  constructor(private heroService: SuperheroService, public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  delete() {
    this.heroService.deleteHero(this.hero.id).subscribe((res) => {
      location.reload();
    });
  }

}
