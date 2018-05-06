import { SuperheroService } from './superhero.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { CreateHeroComponent } from './create-hero/create-hero.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    CreateHeroComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    HttpModule,
  ],
  providers: [SuperheroService],
  entryComponents: [CreateHeroComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
