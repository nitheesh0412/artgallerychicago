import { JsonPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IartDetails, Iartworks } from 'src/app/models/art';
import { ArtworkService } from 'src/app/services/artwork.service';

@Component({
  selector: 'app-listarts',
  templateUrl: './listarts.component.html',
  styleUrls: ['./listarts.component.css']
})
export class ListartsComponent implements OnInit {
  @Input() artDetails!: IartDetails;


  constructor(private _artworks: ArtworkService) {

  }
  isLiked = false;

  ngOnInit(): void {
    const fav = JSON.parse(localStorage.getItem('favs')!);
    if(fav){
      fav.find((val : IartDetails) => {
       if(val.id === this.artDetails.id) this.artDetails.liked = true;
      })
    }
  }
  toggleLike() {


    this._artworks.addFavourites(this.artDetails);
    const fav = JSON.parse(localStorage.getItem('favs')!);
    console.log(fav)

    if(!fav){
      const favs = []
      
      if(this.artDetails.liked === undefined || this.artDetails.liked === false){
        this.artDetails.liked = true;
        favs.push(this.artDetails)
        localStorage.setItem('favs', JSON.stringify(favs));
        
      }

    }
    else{
      if(this.artDetails.liked === undefined || this.artDetails.liked === false){
        this.artDetails.liked = true;
        fav.push(this.artDetails)
        localStorage.setItem('favs', JSON.stringify(fav));
        
      }
      else{
        console.log("need to remove")
        this.artDetails.liked = false;
        fav.forEach((ele : IartDetails,idx : number) => {

          if(ele.id===this.artDetails.id) fav.splice(idx,1);
        });

        localStorage.setItem('favs', JSON.stringify(fav));
      }
    }
    console.log(this.artDetails)
   


    console.log(JSON.parse(localStorage.getItem('favs')!))
  }
}
