import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, tap, catchError, throwError, Subject } from 'rxjs';
import { IartDetails, Iartworks } from '../models/art';
@Injectable({
  providedIn: 'root'
})
export class ArtworkService {

  artWorks! : Iartworks

  favourites : IartDetails[] = []
  singleArt! : any

  url = 'https://api.artic.edu/api/v1/artworks?fields=id,title,artist_title,artist_id,artwork_type_title,artwork_type_id,date_display,description,main_reference_number,thumbnail,publication_history,exhibition_history,image_id'
  constructor(private http: HttpClient) {

  }

  getArtDetails(pageNo : number,limitNo : number): Observable<Iartworks> {
    return this.http.get<Iartworks>(this.url + `&page=${pageNo}&limit=${limitNo}`).pipe(
      tap(arts => this.artWorks = arts),
      catchError(err => this.handleError(err))
    );
  }

  getSearchDetails(filter : string) : Observable<Iartworks>{
    return this.http.get<Iartworks>(`https://api.artic.edu/api/v1/artworks/search?q=${filter}`).pipe(
      tap(arts => this.artWorks = arts),
      catchError(err => this.handleError(err))
    );
  }

  getSingleArtDetails(ids : string) : Observable<any>{
    return this.http.get<any>(`https://api.artic.edu/api/v1/artworks/${ids}?fields=id,title,artist_title,artist_id,artwork_type_title,artwork_type_id,date_display,description,main_reference_number,thumbnail,publication_history,exhibition_history,image_id`).pipe(
      tap(art => this.singleArt= art),
      catchError(err => this.handleError(err))
    );
  }
  handleError(error: HttpErrorResponse) {
    return throwError(error.message || 'server Error');
  }

  addFavourites(art : IartDetails){
    this.favourites.push(art);
    console.log(this.favourites)
  }


  pageName = '';
  clientUrlSegment = 'newClient';
  marketAreaID = 18;
  propertyTypeID = 1;
  rootUrl = 'http://test.resourceAnalytix.com';
  currentPage = 'firstpage';

  // Events
  private pageChangeSubject: Subject<any> = new Subject<any>();
  pageChange$ = this.pageChangeSubject.asObservable();
  pageChanged(newPage: string) {
    this.pageChangeSubject.next(newPage);
  }
}
