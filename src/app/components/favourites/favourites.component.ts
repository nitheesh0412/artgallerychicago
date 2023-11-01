import { Component } from '@angular/core';
import { IartDetails, Iartworks } from 'src/app/models/art';
import { ArtworkService } from 'src/app/services/artwork.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent {
  totalPages: number = 123203;
  cardsPerPage: number = 5;
  currPage: number = 1;
  artWorks: IartDetails[] = JSON.parse(localStorage.getItem('favs')!)
  constructor(private _artwork: ArtworkService) {

  }
  ngOnInit(): void {
    // this.subscribeArtDetails();

    console.log(this.artWorks)
  }

  toggleLike(art: IartDetails) {
    const fav = JSON.parse(localStorage.getItem('favs')!);
    art.liked = false;
    fav.forEach((ele: IartDetails, idx: number) => {

      if (ele.id === art.id) fav.splice(idx, 1);
    });

    localStorage.setItem('favs', JSON.stringify(fav));

    this.artWorks = JSON.parse(localStorage.getItem('favs')!)
  }

  changePageSize() {
    console.log(this.cardsPerPage)
  }
}
