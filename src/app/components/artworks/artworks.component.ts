import { Component, OnInit } from '@angular/core';
import { IartDetails, Iartworks } from 'src/app/models/art';
import { ArtworkService } from 'src/app/services/artwork.service';

@Component({
  selector: 'app-artworks',
  templateUrl: './artworks.component.html',
  styleUrls: ['./artworks.component.css']
})
export class ArtworksComponent implements OnInit {
  totalPages : number = 123203;
  cardsPerPage : number = 10;
  currPage : number = 1;
  artWorks! : Iartworks

  arts! : IartDetails[]

  filter : string = ""
  constructor(private _artwork : ArtworkService){

  }
  ngOnInit(): void {
    this.subscribeArtDetails();
    

    console.log(this.artWorks)
  }
  
  subscribeArtDetails(){
    this._artwork.getArtDetails(this.currPage,this.cardsPerPage).subscribe((arts : Iartworks) => {
      this._artwork.artWorks = arts;
      this.artWorks = arts;
      this.arts = this.artWorks.data;
      console.log(this.artWorks)
      console.log(this._artwork.artWorks);
      this.totalPages = arts.pagination.total_pages
    });
  }

  onInputChange(){
    console.log(this.filter)

    this._artwork.getSearchDetails(this.filter).subscribe((arts : Iartworks)=>{
      this._artwork.artWorks = arts;
      this.artWorks = arts;
      this.arts = this.artWorks.data;
      this.totalPages = arts.pagination.total_pages;
    })
    // this.arts = this.artWorks.data.filter(item => item.title.toLocaleLowerCase().includes(this.filter.toLocaleLowerCase()))
  }
  onPageChange(pageNumber : any) {
    this.currPage = pageNumber ;
    console.log(this.currPage);
    this.subscribeArtDetails()
  }

  dosomething(){
    console.log(this.artWorks.data)
  }

  changePageSize(){
    console.log(this.cardsPerPage)
    this.subscribeArtDetails();
  }
  
}
