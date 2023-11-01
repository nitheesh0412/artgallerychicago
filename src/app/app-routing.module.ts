import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtdetailsComponent } from './components/artdetails/artdetails.component';
import { ArtworksComponent } from './components/artworks/artworks.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';

const routes: Routes = [
  {
    path : "",
    component : MainpageComponent
  },
  {
    path : "artworks",
    component : ArtworksComponent
  },
  {
    path : "art/:id",
    component : ArtdetailsComponent
  },
  {
    path : "favourites",
    component : FavouritesComponent
  },
  {
    path : "aboutus",
    component : AboutusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
