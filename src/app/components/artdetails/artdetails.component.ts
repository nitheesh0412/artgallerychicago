import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iartworks } from 'src/app/models/art';
import { ArtworkService } from 'src/app/services/artwork.service';

@Component({
  selector: 'app-artdetails',
  templateUrl: './artdetails.component.html',
  styleUrls: ['./artdetails.component.css']
})
export class ArtdetailsComponent implements OnInit {

  singleArt! : any
  constructor(public activatedRoute: ActivatedRoute,
    private _artwork : ArtworkService,
    private _artdetails : ArtworkService){

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params['id'])
      this.subscribeArtDetails(params['id'])
    })
  }

  subscribeArtDetails(ids : string){
    this._artwork.getSingleArtDetails(ids).subscribe((arts : any) => {
      this.singleArt = arts.data
      console.log(this.singleArt)
    });
  }
  share(){
   
    navigator.share({
      title : "art",
      text : "check out this art",
      url : String(window.location.href),
      
    
    })
  }
  
}
