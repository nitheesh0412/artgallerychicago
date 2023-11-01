import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListartsComponent } from './components/listarts/listarts.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ArtdetailsComponent } from './components/artdetails/artdetails.component';
import { ArtworksComponent } from './components/artworks/artworks.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import {MatIconModule} from '@angular/material/icon'
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    ListartsComponent,
    ArtdetailsComponent,
    ArtworksComponent,
    FavouritesComponent,
    AboutusComponent,
    MainpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    MatProgressSpinnerModule,
    ShareButtonsModule,
    ShareIconsModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
