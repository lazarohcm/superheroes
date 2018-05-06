import { Superhero, SuperheroService, Image } from './../superhero.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.scss']
})
export class EditHeroComponent implements OnInit {
  hero_id: number;
  hero: Superhero;
  new_images: any[] = [];
  delete_images: any[] = [];
  @Input() heroForm;
  constructor(private heroService: SuperheroService, public activeModal: NgbActiveModal) {

  }

  ngOnInit() {
    this.heroService.viewHero(this.hero_id).subscribe((res) => {
      this.hero = res.json();
    });
  }

  updateHero() {
    this.heroService.updateHero(this.hero, this.delete_images, this.new_images).subscribe((res) => {
      // location.reload();
    });
  }

  getImage(hero_id, image_id) {
    if (image_id) {
      return this.heroService.getImageUrl(hero_id, image_id);
    } else {
      return 'image.jpg';
    }
  }


  catchImages(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      for (const file of event.target.files) {
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = () => {
          const image: Image = { src: reader.result, filename: file.name, filetype: file.type };
          this.new_images.push(image);
        };
      }
    }
  }

  removeImage(image) {
    this.new_images = this.new_images.filter(obj => obj !== image);
  }

  removeImageFromDatabase(image) {
    this.delete_images.push(image);
    this.hero.images = this.hero.images.filter(obj => obj !== image);
  }

}
