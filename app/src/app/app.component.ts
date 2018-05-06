import { SuperheroService, Superhero } from './superhero.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateHeroComponent } from './create-hero/create-hero.component';
import { subscribeOn } from 'rxjs/operator/subscribeOn';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app';
  heroes: Superhero[];

  constructor(private modalService: NgbModal, private heroService: SuperheroService) { }

  OnInit() {
    console.log('go get');
    this.heroService.getAll(0).subscribe((res) => {
      console.log(res);
    });
  }

  createHeroForm() {
    const modalRef = this.modalService.open(CreateHeroComponent, { size: 'lg' });
  }
}
