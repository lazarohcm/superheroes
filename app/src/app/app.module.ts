import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { CreateHeroComponent } from './create-hero/create-hero.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CreateHeroComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  entryComponents: [CreateHeroComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
