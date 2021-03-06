import { SuperheroService } from './superhero.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CreateHeroComponent } from './create-hero/create-hero.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ListHeroesComponent } from './list-heroes/list-heroes.component';
import { EditHeroComponent } from './edit-hero/edit-hero.component';
import { DeleteHeroComponent } from './delete-hero/delete-hero.component';
import { ViewHeroComponent } from './view-hero/view-hero.component';


const appRoutes: Routes = [
  { path: 'heroes', component: ListHeroesComponent },
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    CreateHeroComponent,
    ListHeroesComponent,
    EditHeroComponent,
    DeleteHeroComponent,
    ViewHeroComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [SuperheroService],
  entryComponents: [CreateHeroComponent, EditHeroComponent, DeleteHeroComponent, ViewHeroComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
