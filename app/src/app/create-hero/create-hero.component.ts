import { SuperheroService, Superhero, Image } from './../superhero.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.scss'],
  providers: [NgbCarouselConfig, HttpClient],
})
export class CreateHeroComponent implements OnInit {
  @Input() heroForm;
  images: any[] = [];
  hero: Superhero = { nickname: null, images: [] };

  constructor(
    private activeModal: NgbActiveModal,
    config: NgbCarouselConfig,
    private http: HttpClient,
    private heroService: SuperheroService) { }

  ngOnInit() {

  }

  createHero() {
    this.heroService.createHero(this.hero).subscribe((res) => {
    });
  }

  onSubmit() {
    // console.log(heroForm);
  }

  catchImages(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      console.log(event.target.files);
      for (const file of event.target.files) {
        const reader = new FileReader();

        console.log(file);
        reader.readAsDataURL(file);
        reader.onload = () => {
          const image: Image = { src: reader.result, filename: file.name, filetype: file.type };
          this.hero.images.push(image);
          this.images.push(image);
          console.log(this.images);
        };
      }
    }
  }

}
