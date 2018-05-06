import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateHeroComponent } from './create-hero/create-hero.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app';

  constructor(private modalService: NgbModal) { }

  createHeroForm() {
    const modalRef = this.modalService.open(CreateHeroComponent, { size: 'lg' });
  }
}
